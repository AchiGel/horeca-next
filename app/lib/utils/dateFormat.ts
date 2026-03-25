export const dateFormat = (dateString: string) => {
  const rawDate = dateString;
  const date = new Date(rawDate);

  const formatted = `${date.getDate().toString().padStart(2, "0")}.${(
    date.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}.${date.getFullYear()} - ${date
    .getHours()
    .toString()
    .padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`;

  return formatted;
};
