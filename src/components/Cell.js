import React from 'react';
import { getDayInGrid } from './../timelineItems';

const Cell = ({item}) => {
  let eventStyle = {
    gridColumn: `${getDayInGrid(item.start)}/${getDayInGrid(item.end)}`
  }

  const onItemSelect = (item) => {
    console.log('item', item);
  }

  return(
    <div
      key={item.id}
      className='grid-cell'
      style={eventStyle}
      onClick={() => onItemSelect(item)}>
      {item.id}
      {item.name}
    </div>
  )
}

export default Cell;
