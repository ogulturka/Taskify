import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from './images/logo2.png';
import './Header.css';

const Header = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // localStorage'dan isLoggedIn'i sil ve logout işlemini tetikleyip login'e yönlendir
    onLogout();
    navigate('/login'); // Login sayfasına yönlendirme
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Taskify Logo" className="header-logo" />
      </div>
      <nav className="navbar">
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
        </ul>
      </nav>
      <div className="logout">
        <button onClick={handleLogout}>Çıkış Yap</button>
      </div>
    </header>
  );
};

export default Header;
