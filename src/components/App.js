import React, { useState, useEffect } from 'react';
import Items from './../Items';
import Grid from './Grid';
import Header from './Header';

const App = () => {
  let [matrix, setMatrix] = useState([])

  useEffect(() => {
    setMatrix(Items.orgnanizeItems())
  }, []);

  return (
    <div>
      <Header/>
      { matrix &&
        <Grid
          matrix={matrix}/>
      }
    </div>
  );
}

export default App
