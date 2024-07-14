const createFormatedDate = (date) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const now = new Date(date);

  return `${now.getDate()}, ${months[now.getMonth()]} ${now.getFullYear()}`;
};

export default createFormatedDate;
