import { describe, expect, it, vi, afterEach } from "vitest";
import { formatCareer, formatFirstLetterCap, getYearsOld } from "./index";

describe("text helpers", () => {
  it("trims text without lowercasing proper names", () => {
    expect(formatFirstLetterCap("  openAI México")).toBe("OpenAI México.");
    expect(formatCareer("  CEO de ACME")).toBe("CEO de ACME");
  });
});

describe("getYearsOld", () => {
  afterEach(() => vi.useRealTimers());

  it("accounts for whether the birthday has passed this year", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-09-03T12:00:00Z"));
    expect(getYearsOld("2000-09-02")).toBe("26 años");
    expect(getYearsOld("2000-09-04")).toBe("25 años");
  });

  it("rejects invalid and future dates", () => {
    expect(getYearsOld("not-a-date")).toBe("-");
    expect(getYearsOld("2999-01-01")).toBe("-");
  });
});
