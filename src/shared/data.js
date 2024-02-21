export const data = [
  { id: 1, name: "지수 - Jisoo" },
  { id: 2, name: "제니 - Jennie" },
  { id: 3, name: "로제 - ROSÉ" },
  { id: 4, name: "리사 - Lisa" },
];

export const getformattedDate = (date) =>
  new Date(date).toLocaleString("ko", {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
