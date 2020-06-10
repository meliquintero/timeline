import React from 'react';
import { CONSTANTS, getNumberOfDays } from './../utils';

import Cell from './Cell';

const Grid = ({items, onItemEdit}) => {
  const getHeaderDays = () => {
    let date = CONSTANTS.startTimeline

    let daysRow = [];

    for (let i = 1; i < getNumberOfDays()+2; i++) {
      let dayStyle = { gridColumn: `${i}/${i+1}`}

      const copy = new Date(Number(date))
      copy.setDate(date.getDate() + i)

      daysRow.push(
        <div key={`day${i}`} className='grid-cell' style={dayStyle}>
          {copy.getDate()}
        </div>
      );
    }
    return daysRow
  }

  const CellList = items.map((item, i) => {
    return(
      <Cell
        key={i}
        item={item}
        onItemEdit={onItemEdit}/>
    )
  });

  return(
    <div className='grid-container' >
      {[...getHeaderDays(), ...CellList]}
    </div>
  )
}

export default Grid;
