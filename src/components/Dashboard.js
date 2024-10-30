import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Dashboard.css';
import avatarImage from './images/logo.png';
import { FaHome, FaSignOutAlt, FaMoneyBill, FaClipboardList, FaCalendarAlt, FaClock } from 'react-icons/fa';

const Dashboard = ({ onLogout }) => {
  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="profile">
          <img src={avatarImage} alt="User Avatar" className="avatar" />
          <h3>Oğultürk KARAORMAN</h3>
          <p>ogulturk.karaorman@taskify.com</p>
        </div>
        <ul className="menu">
          <li>
            <Link to="/dashboard/anasayfa">
              <FaHome className="menu-icon" /> Ana Sayfa
            </Link>
          </li>
          <li>
            <Link to="/dashboard/aktivite">
              <FaClipboardList className="menu-icon" /> Aktivite
            </Link>
          </li>
          <li>
            <Link to="/dashboard/masraf">
              <FaMoneyBill className="menu-icon" /> Masraf
            </Link>
          </li>
          <li>
            <Link to="/dashboard/plan">
              <FaCalendarAlt className="menu-icon" /> Plan
            </Link>
          </li>
          <li>
            <Link to="/dashboard/izin">
              <FaClock className="menu-icon" /> İzin
            </Link>
          </li>
          <li onClick={onLogout}>
            <FaSignOutAlt className="menu-icon" /> Çıkış Yap
          </li>
        </ul>
      </div>

      <div className="content">
        <Outlet /> 
      </div>
    </div>
  );
};

export default Dashboard;
