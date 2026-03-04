export const getYearsOld = (birthday: Date | null): string => {
  if (!birthday) return "-";
  const age = Math.floor(
    (new Date().getTime() -
      new Date(birthday).getTime()) /
    (365.25 * 24 * 60 * 60 * 1000),
  )
  return `${age} años`;
}