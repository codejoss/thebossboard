import { describe, expect, it } from "vitest";
import type { Member } from "@/types/members";
import { FEATURED_MEMBER_ID, sortMembers } from "./sortMembers";

const member = (id: string, createdAt: string): Member =>
  ({ id, created_at: createdAt }) as Member;

describe("sortMembers", () => {
  const featured = member(FEATURED_MEMBER_ID, "2026-03-01T00:00:00Z");
  const older = member("older", "2026-01-01T00:00:00Z");
  const newer = member("newer", "2026-02-01T00:00:00Z");

  it("sorts by creation date without mutating the source", () => {
    const source = [newer, older];
    expect(sortMembers(source, "created_at", {})).toEqual([older, newer]);
    expect(source).toEqual([newer, older]);
  });

  it("sorts by stars and uses creation time as a tie breaker", () => {
    expect(
      sortMembers([newer, older], "stars", { older: 2, newer: 2 }),
    ).toEqual([older, newer]);
    expect(
      sortMembers([older, newer], "stars", { older: 1, newer: 3 }),
    ).toEqual([newer, older]);
  });

  it("always places the featured member first", () => {
    expect(
      sortMembers([older, featured, newer], "stars", { newer: 10 }),
    ).toEqual([featured, newer, older]);
  });
});
