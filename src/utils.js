const CONSTANTS = {
  startTimeline: new Date('2018-01-01'),
  endTimeline: new Date('2018-02-16')
}

const getNumberOfDays = () => {
  return (CONSTANTS.endTimeline - CONSTANTS.startTimeline) / (1000 * 3600 * 24)
}

const getDayInGrid = (date) => {
  let date2 = new Date(date);
  let Difference_In_Time = date2.getTime() - CONSTANTS.startTimeline.getTime();
  let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24)

  return Difference_In_Days
};

export {getDayInGrid, CONSTANTS, getNumberOfDays};
