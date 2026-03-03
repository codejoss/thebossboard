export const formatCareer = (text: string, max = 60) => {
  if (!text) return "";

  const normalized =
    text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  return normalized.length > max
    ? `${normalized.slice(0, max)}...`
    : normalized;
};