import React from 'react';
import { getDayInGrid } from './../timelineItems';

const Cell = ({node}) => {
  let eventStyle = {
    gridColumn: `${getDayInGrid(node.item.start)}/${getDayInGrid(node.item.end)}`
  }
  
  return(
    <div
      key={node.item.id}
      className='grid-cell'
      style={eventStyle}>
      {node.item.id}
      {node.item.name}
    </div>
  )
}

export default Cell;
