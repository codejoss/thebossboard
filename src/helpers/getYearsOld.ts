export const getYearsOld = (birthday: string | Date | null): string => {
  if (!birthday) return "-";
  const dateOnlyMatch =
    typeof birthday === "string"
      ? /^(\d{4})-(\d{2})-(\d{2})$/.exec(birthday)
      : null;
  const birthDate = dateOnlyMatch
    ? new Date(
        Number(dateOnlyMatch[1]),
        Number(dateOnlyMatch[2]) - 1,
        Number(dateOnlyMatch[3]),
      )
    : new Date(birthday);
  if (Number.isNaN(birthDate.getTime())) return "-";

  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const birthdayHasPassed =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() >= birthDate.getDate());

  if (!birthdayHasPassed) age -= 1;
  if (age < 0) return "-";
  return `${age} años`;
};
