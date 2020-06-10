import React from 'react';
import Cell from './Cell';

const Grid = ({items, onItemEdit}) => {
  const CellList =  items.map((item, i) => {
    return(
      <Cell
        key={i}
        item={item}
        onItemEdit={onItemEdit}/>
    )
  });

  return(
    <div className='grid-container'>
      {CellList}
    </div>
  )
}

export default Grid;
