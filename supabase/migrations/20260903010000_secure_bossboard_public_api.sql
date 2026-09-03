-- Security-first migration. Applying it intentionally disables the unauthenticated
-- codejoss/bossadmin client until that application implements admin authorization.
begin;

-- Keep private contact data inaccessible through the public API.
alter table public.member_private_data enable row level security;
drop policy if exists "Solo admin puede ver datos privados" on public.member_private_data;
revoke all on table public.member_private_data from anon, authenticated;

-- The public site only needs read access. Mutations remain reserved for service_role.
alter table public.blocks enable row level security;
alter table public.challenges enable row level security;
alter table public.member_challenge_stars enable row level security;
alter table public.grid_settings enable row level security;

drop policy if exists "Public can read blocks" on public.blocks;
create policy "Public can read blocks"
  on public.blocks for select to anon, authenticated using (true);

drop policy if exists "Public can read challenges" on public.challenges;
create policy "Public can read challenges"
  on public.challenges for select to anon, authenticated using (true);

drop policy if exists "Public can read challenge stars" on public.member_challenge_stars;
create policy "Public can read challenge stars"
  on public.member_challenge_stars for select to anon, authenticated using (true);

drop policy if exists "Public can read active grid settings" on public.grid_settings;
create policy "Public can read active grid settings"
  on public.grid_settings for select to anon, authenticated using (is_active);

-- Enforce the assumptions made by the frontend queries.
create unique index if not exists blocks_one_active_idx
  on public.blocks ((is_active_block)) where is_active_block;
create unique index if not exists grid_settings_one_active_idx
  on public.grid_settings ((is_active)) where is_active;

alter table public.grid_settings
  drop constraint if exists grid_settings_sort_mode_check;
alter table public.grid_settings
  add constraint grid_settings_sort_mode_check
  check (sort_mode in ('created_at', 'stars'));

-- Recreate the public projection as invoker so the caller's RLS applies.
create or replace view public.ranking_by_block
with (security_invoker = true)
as
select
  b.id as block_id,
  b.name_of_block as block_name,
  b.number_of_block,
  b.year_of_block,
  m.id as member_id,
  m.member_name,
  m.nickname,
  coalesce(sum(mcs.stars_earned), 0::bigint) as block_stars,
  dense_rank() over (
    partition by b.id
    order by coalesce(sum(mcs.stars_earned), 0::bigint) desc
  ) as block_rank
from public.blocks b
join public.challenges c on c.block_id = b.id
join public.member_challenge_stars mcs on mcs.challenge_id = c.id
join public.members m on m.id = mcs.member_id
where m.is_active and m.is_autorizated
group by b.id, b.name_of_block, b.number_of_block, b.year_of_block,
  m.id, m.member_name, m.nickname;

revoke all on public.blocks from anon, authenticated;
revoke all on public.challenges from anon, authenticated;
revoke all on public.member_challenge_stars from anon, authenticated;
revoke all on public.grid_settings from anon, authenticated;
revoke all on public.members from anon, authenticated;
revoke all on public.ranking_by_block from anon, authenticated;

grant select on public.ranking_by_block to anon, authenticated;
grant select (id, name_of_block, number_of_block, year_of_block, is_active_block)
  on public.blocks to anon, authenticated;
grant select (id, block_id) on public.challenges to anon, authenticated;
grant select (challenge_id, member_id, stars_earned)
  on public.member_challenge_stars to anon, authenticated;
grant select (
  id, member_name, father_last_name, mother_last_name, nickname, birthday,
  address_city, address_state, address_country, career, dream, affiliate_name,
  motivation, instagram_url, tiktok_url, youtube_url, website_url,
  member_message, picture_url, created_at, updated_at, is_active, is_autorizated
)
  on public.members to anon, authenticated;
grant select (sort_mode, is_active, updated_at)
  on public.grid_settings to anon, authenticated;

-- SECURITY DEFINER routines must never inherit a caller-controlled search_path.
alter function public.authorize_member(uuid) set search_path = pg_catalog, public;
alter function public.block_member(uuid) set search_path = pg_catalog, public;
alter function public.get_all_members_admin() set search_path = pg_catalog, public;
alter function public.insert_member_with_private_data(
  text, text, text, text, date, text, text, text, text, text,
  text, text, text, text, text, text, text, text, text, text
) set search_path = pg_catalog, public;
alter function public.update_member_with_private_data(
  uuid, text, text, text, text, date, text, text, text, text,
  text, text, text, text, text, text, text, text, text, boolean, boolean, text, text
) set search_path = pg_catalog, public;
alter function public.update_updated_at_column() set search_path = pg_catalog, public;

-- All writes go through trusted server-side code using service_role.
revoke execute on function public.authorize_member(uuid) from public, anon, authenticated;
revoke execute on function public.block_member(uuid) from public, anon, authenticated;
revoke execute on function public.get_all_members_admin() from public, anon, authenticated;
revoke execute on function public.insert_member_with_private_data(
  text, text, text, text, date, text, text, text, text, text,
  text, text, text, text, text, text, text, text, text, text
) from public, anon, authenticated;
revoke execute on function public.update_member_with_private_data(
  uuid, text, text, text, text, date, text, text, text, text,
  text, text, text, text, text, text, text, text, text, boolean, boolean, text, text
) from public, anon, authenticated;

grant execute on function public.authorize_member(uuid) to service_role;
grant execute on function public.block_member(uuid) to service_role;
grant execute on function public.get_all_members_admin() to service_role;
grant execute on function public.insert_member_with_private_data(
  text, text, text, text, date, text, text, text, text, text,
  text, text, text, text, text, text, text, text, text, text
) to service_role;
grant execute on function public.update_member_with_private_data(
  uuid, text, text, text, text, date, text, text, text, text,
  text, text, text, text, text, text, text, text, text, boolean, boolean, text, text
) to service_role;

-- Correct the semantic bug: a blocked member must also be inactive.
create or replace function public.block_member(p_member_id uuid)
returns void
language plpgsql
security definer
set search_path = pg_catalog, public
as $function$
begin
  update public.members
  set is_autorizated = false, is_active = false
  where id = p_member_id;
end;
$function$;

revoke execute on function public.block_member(uuid) from public, anon, authenticated;
grant execute on function public.block_member(uuid) to service_role;

commit;
