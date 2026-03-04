export const formatFirstLetterCap = (text: string) => {
  if (!text) return "";

  const normalized =
    text.trim().charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  if (normalized[normalized.length - 1] !== ".") {
    return normalized + ".";
  }
  return normalized;
};