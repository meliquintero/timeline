import React from 'react';
import { CONSTANTS, getNumberOfDays, getDayInGrid } from './../utils';

const generateDays = () => {
  let firstDay = CONSTANTS.startTimeline

  let daysRow = [];

  for (let i = 1; i < getNumberOfDays()+2; i++) {
    let dayStyle = { gridColumn: `${i}/${i+1}`}

    const current = new Date(Number(firstDay))
    current.setDate(firstDay.getDate() + i)

    daysRow.push(
      <div key={`day${i}`} className='grid-cell' style={dayStyle}>
        {current.getDate()}
      </div>
    );
  }
  return daysRow
}

const generateMonths = () => {
  let monthsRow = [];

  let date = CONSTANTS.startTimeline

  let i = 1
  let month = 0
  while (i < getNumberOfDays()) {
    const current = new Date(Number(date))
    current.setMonth(date.getMonth() + 1)

    let monthStyle = { gridColumn: `${i}/${getDayInGrid(current)+1}`}

    monthsRow.push(
      <div key={`month${i}`} className='grid-cell' style={monthStyle}>
        {CONSTANTS.months[month]}
      </div>
    );

    date = current
    i+= getDayInGrid(current)
    month++
  }

  return monthsRow
}

export {generateDays, generateMonths};
