export const formatFirstLetterCap = (text: string) => {
  if (!text) return "";

  const trimmed = text.trim();
  if (!trimmed) return "";
  const normalized = trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
  if (normalized[normalized.length - 1] !== ".") {
    return normalized + ".";
  }
  return normalized;
};
