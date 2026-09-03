import type { Member } from "@/types/members";
import type { SortMode } from "@/types/gridSettingsTypes";

export const FEATURED_MEMBER_ID = "c0aa013d-be71-47e8-a102-6b06977b7d17";

export function sortMembers(
  members: Member[],
  sortMode: SortMode,
  starsByMember: Readonly<Record<string, number>>,
): Member[] {
  const featured = members.find((member) => member.id === FEATURED_MEMBER_ID);
  const rest = members.filter((member) => member.id !== FEATURED_MEMBER_ID);

  rest.sort((a, b) => {
    if (sortMode === "stars") {
      const starsDifference =
        (starsByMember[b.id] ?? -1) - (starsByMember[a.id] ?? -1);
      if (starsDifference !== 0) return starsDifference;
    }

    return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
  });

  return featured ? [featured, ...rest] : rest;
}
