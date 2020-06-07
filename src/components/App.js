import React from 'react';
import Grid from './Grid';

import {timelineItems} from './../timelineItems';

const App = () => {
  return (
    <div>
      <Grid timelineItems={timelineItems}/>
    </div>
  );
}

export default App
