import { supabase } from "../lib/supabase";
import type { Member } from "../types/members";

export const getMembers = async (): Promise<Member[]> => {
  const { data, error } = await supabase
    .from("members")
    .select(
      "id, member_name, father_last_name, mother_last_name, nickname, birthday, address_city, address_state, address_country, career, dream, affiliate_name, motivation, instagram_url, tiktok_url, youtube_url, website_url, member_message, picture_url, created_at, updated_at, is_active, is_autorizated",
    )
    .eq("is_active", true)
    .eq("is_autorizated", true);

  if (error) throw new Error(error.message);
  return (data ?? []) as Member[];
};
