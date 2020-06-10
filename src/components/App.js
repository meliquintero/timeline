import React, { useState, useEffect } from 'react';
import Items from './../Items';
import Grid from './Grid';

const App = () => {
  let [items, setItems] = useState([])

  useEffect(() => {
    let items = new Items()
    setItems(items.getSortedItems())
  }, []);

  const onItemEdit = (itemPased) => {
    const copyItems = items.map(item => {
      return (item.id === itemPased.id) ? itemPased : item;
    });

    setItems(copyItems);
  }

  return (
    <div>
      { items &&
        <Grid items={items} onItemEdit={onItemEdit}/>
      }
    </div>
  );
}

export default App
