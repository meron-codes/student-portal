import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        <li><Link to="/results">Results</Link></li>
        <li><Link to="/announcements">Announcements</Link></li>
        <li><Link to="/schedule">Schedule</Link></li>
        <li><Link to="/opportunities">Opportunities</Link></li>
      </ul>
    </div>
  );
};

export default Dashboard;
