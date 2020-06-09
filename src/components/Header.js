import React from 'react';

const Header = ({timelineItems}) => {
  let row = [];
  for (let i = 1; i < 47; i++) {
      row.push(<div>{i}</div>);
  }

  return(
    <div className='grid-container'>
      { row }
    </div>
  )
}

export default Header;
