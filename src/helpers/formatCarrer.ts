export const formatCareer = (text: string, max = 60) => {
  if (!text) return "";

  const trimmed = text.trim();
  const normalized = trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
  return normalized.length > max
    ? `${normalized.slice(0, max)}...`
    : normalized;
};
