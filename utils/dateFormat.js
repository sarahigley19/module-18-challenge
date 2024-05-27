const addDateSuffix = (date) => {
  const suffixes = ['th', 'st', 'nd', 'rd'];
  const lastDigit = date % 10;
  const suffix = lastDigit >= 1 && lastDigit <= 3 && date !== 11 && date !== 12 && date !== 13 ? suffixes[lastDigit] : suffixes[0];
  return `${date}${suffix}`;
};

const monthNames = (length) => ({
  0: length === 'short' ? 'Jan' : 'January',
  1: length === 'short' ? 'Feb' : 'February',
  2: length === 'short' ? 'Mar' : 'March',
  3: length === 'short' ? 'Apr' : 'April',
  4: length === 'short' ? 'May' : 'May',
  5: length === 'short' ? 'Jun' : 'June',
  6: length === 'short' ? 'Jul' : 'July',
  7: length === 'short' ? 'Aug' : 'August',
  8: length === 'short' ? 'Sep' : 'September',
  9: length === 'short' ? 'Oct' : 'October',
  10: length === 'short' ? 'Nov' : 'November',
  11: length === 'short' ? 'Dec' : 'December',
});

const formatTimestamp = (timestamp, { monthLength = 'short', dateSuffix = true } = {}) => {
  const months = monthNames(monthLength);
  const dateObj = new Date(timestamp);
  const formattedMonth = months[dateObj.getMonth()];
  const dayOfMonth = dateSuffix ? addDateSuffix(dateObj.getDate()) : dateObj.getDate();
  const year = dateObj.getFullYear();
  let hour = dateObj.getHours() > 12 ? dateObj.getHours() - 12 : dateObj.getHours();
  hour = hour === 0 ? 12 : hour;
  const minutes = (dateObj.getMinutes() < 10 ? '0' : '') + dateObj.getMinutes();
  const periodOfDay = dateObj.getHours() >= 12 ? 'pm' : 'am';
  return `${formattedMonth} ${dayOfMonth}, ${year} at ${hour}:${minutes} ${periodOfDay}`;
};

module.exports = formatTimestamp;
