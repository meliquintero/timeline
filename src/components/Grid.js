import React from 'react';
import {generateDays, generateMonths} from './gridHeaders';

import Cell from './Cell';

const Grid = ({items, onItemEdit}) => {
  const CellList = items.map((item, i) => {
    return(
      <Cell
        key={i}
        item={item}
        onItemEdit={onItemEdit}/>
    )
  });

  return(
    <div className='grid-container'>
      {generateMonths()}
      {generateDays()}
      {CellList}
    </div>
  )
}

export default Grid;
