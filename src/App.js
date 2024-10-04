import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const Projects = () => (
  <div>
    <h2>Projects</h2>
    <p>Manage your projects here.</p>
  </div>
);

const Tasks = () => (
  <div>
    <h2>Tasks</h2>
    <p>Manage your tasks here.</p>
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route 
          path="/dashboard" 
          element={
            <div style={{ display: 'flex' }}>
              <Sidebar />
              <div style={{ marginLeft: '200px', padding: '20px' }}>
                <Header />
                <Dashboard />
              </div>
            </div>
          } 
        />
        <Route 
          path="/projects" 
          element={
            <div style={{ display: 'flex' }}>
              <Sidebar />
              <div style={{ marginLeft: '200px', padding: '20px' }}>
                <Header />
                <Projects />
              </div>
            </div>
          } 
        />
        <Route 
          path="/tasks" 
          element={
            <div style={{ display: 'flex' }}>
              <Sidebar />
              <div style={{ marginLeft: '200px', padding: '20px' }}>
                <Header />
                <Tasks />
              </div>
            </div>
          } 
        />
      </Routes>
    </Router>
  );
};

export default App;
