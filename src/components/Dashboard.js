import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import './Dashboard.css';

const data = [
  { name: 'Project 1', progress: 40 },
  { name: 'Project 2', progress: 75 },
  { name: 'Project 3', progress: 90 },
];

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2>Welcome to the Project Management Dashboard</h2>
      <div className="dashboard-stats">
        <div className="stat-card">
          <h3>Total Projects</h3>
          <p>10</p>
        </div>
        <div className="stat-card">
          <h3>Active Tasks</h3>
          <p>24</p>
        </div>
        <div className="stat-card">
          <h3>Completed Tasks</h3>
          <p>50</p>
        </div>
        <div className="stat-card">
          <h3>Upcoming Deadlines</h3>
          <p>3</p>
        </div>
      </div>

      <div className="dashboard-charts">
        <div className="chart-placeholder">
          <h3>Project Progress</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={data}>
              <Line type="monotone" dataKey="progress" stroke="#4CAF50" />
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="chart-placeholder">
          <h3>Task Completion Rate</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={data}>
              <Line type="monotone" dataKey="progress" stroke="#4CAF50" />
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
