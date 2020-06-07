import React from 'react';
import { getDayInGrid } from './../timelineItems';

const Grid = ({timelineItems}) => {
  const CellList = timelineItems.map((item) => {
    let eventStyle = {
      gridColumn: `${getDayInGrid(item.start)}/${getDayInGrid(item.end)}`
    }

    return(
      <div className='grid-cell'
        style={eventStyle}>
        {item.name}
      </div>
    )
  });

  return(
    <div className='grid-container'>
      { CellList }
    </div>
  )
}

export default Grid;
