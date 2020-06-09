import React from 'react';
import Cell from './Cell';

const Row = ({linkedList}) => {
  let res = []
  let node = linkedList.head
  while (node) {
    res.push(<Cell node={node}/>)
    node = node.next
  }
  return(
    <div className='grid-container'>
      { res }
    </div>
  )
}

export default Row;
