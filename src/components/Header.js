import React from 'react';

const Header = ({timelineItems}) => {
  let rowStyle = { gridTemplateRows: 'repeat(1, 50px)'}

  let row = [];
  for (let i = 1; i < 47; i++) {
      row.push(<div key={i}>{i}</div>);
  }

  return(
    <div className='grid-container' style={rowStyle}>
      { row }
    </div>
  )
}

export default Header;
