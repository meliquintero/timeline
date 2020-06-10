const CONSTANTS = {
  startTimeline: new Date('2018-01-01'),
  endTimeline: new Date('2018-02-16'),
  months: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ],
  timeToDays: 1000 * 3600 * 24
}

const getNumberOfDays = () => {
  return (CONSTANTS.endTimeline - CONSTANTS.startTimeline) / (CONSTANTS.timeToDays)
}

const getDayInGrid = (date) => {
  let date2 = new Date(date);
  let DifferenceInTime = date2.getTime() - CONSTANTS.startTimeline.getTime();
  let DifferenceInDays = DifferenceInTime / (CONSTANTS.timeToDays)

  return DifferenceInDays
};

export {getDayInGrid, CONSTANTS, getNumberOfDays};
