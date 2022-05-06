const eachDay = require('date-fns/eachDayOfInterval');
const addMonths = require('date-fns/addMonths');

module.exports = () => {
  const dateRange = eachDay({start: new Date(), end: addMonths(new Date(), 6) });
  return dateRange;
}