const format = require('date-fns/format');

module.exports = (date, formatStr) => {
  return format(date, formatStr);
}