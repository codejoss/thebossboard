begin;

-- Keep the deny-by-default intent explicit and visible to database tooling.
create policy "Client roles cannot access private member data"
  on public.member_private_data
  for all
  to anon, authenticated
  using (false)
  with check (false);

commit;
