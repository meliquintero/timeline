import React from 'react';
import Cell from './Cell';

const Grid = ({items}) => {
  const CellList =  items.map((item, i) => {
    return(
      <Cell key={i} item={item}/>
    );
  });

  return(
    <div className='grid-container'>
      {CellList}
    </div>
  )
}

export default Grid;
