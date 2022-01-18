const dateToday = () => {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();

  return `${year}-${month < 10 ? `0${month}` : month}-${day}`;
};

const randString = (prefix) =>
  `${prefix}${Math.random().toString(36).substring(7)}`.toUpperCase();

export default {
  dateToday,
  randString,
};
