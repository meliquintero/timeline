import React, { useState, useEffect } from 'react';
import { getDayInGrid } from './../utils';

const Cell = ({item, onItemEdit}) => {
  let [isEditing, setIsEditing] = useState(false)
  let [itemCopy, setItemCopy] = useState(item)

  useEffect(() => {
    onItemEdit(itemCopy);
  }, [itemCopy]);

  const onItemSelect = () => {
    setIsEditing(!isEditing)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(!isEditing)
  }

  const handleChange = (e) => {
    setItemCopy({...itemCopy, name: e.target.value})
  }

  let eventStyle = {
    gridColumn: `${getDayInGrid(item.start)+1}/${getDayInGrid(item.end)+2}`
  }

  return(
    <div
      className='grid-cell'
      key={item.id}
      style={eventStyle}
      onDoubleClick={() => onItemSelect()}>
      {isEditing ? (
        <form className='ui form' onSubmit={handleSubmit}>
          <input
            type='text'
            defaultValue={item.name}
            onChange={handleChange}/>
        </form >
      ) : (
        <span> {item.name}  </span>
      )}
    </div>
  )
}

export default Cell;
