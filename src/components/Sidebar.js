import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={sidebarStyle}>
      <ul style={ulStyle}>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/tasks">Tasks</Link>
        </li>
      </ul>
    </div>
  );
};

const sidebarStyle = {
  background: '#333',
  width: '200px',
  height: '100vh',
  position: 'fixed',
  top: 0,
  left: 0,
  padding: '10px',
  color: '#fff',
};

const ulStyle = {
  listStyle: 'none',
  padding: 0,
};

export default Sidebar;
