import React from 'react';
import Row from './Row';

const Grid = ({matrix}) => {
  const CellList =  matrix.map((linkedList, i) => {
      return(<div ><Row key={i} linkedList={linkedList}/></div >)
    });

  return(
    <div >
      {CellList}
    </div>
  )
}

export default Grid;
