import React from 'react';

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1>TASKIFY</h1>
    </header>
  );
};

const headerStyle = {
  background: '#4CAF50',
  color: '#fff',
  padding: '10px 20px',
  textAlign: 'center',
};

export default Header;
