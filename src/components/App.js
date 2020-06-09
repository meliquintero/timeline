import React, { useState, useEffect } from 'react';
import Items from './../Items';
import Grid from './Grid';
import Header from './Header';

const App = () => {
  let [items, setItems] = useState([])

  useEffect(() => {
    let items = new Items()
    setItems(items.getSortedItems())
  }, []);

  return (
    <div>
      <Header/>
      { items &&
        <Grid items={items}/>
      }
    </div>
  );
}

export default App
