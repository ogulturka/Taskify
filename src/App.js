import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import AnaSayfa from './components/pages/AnaSayfa';
import Aktivite from './components/pages/Aktivite';
import Masraf from './components/pages/Masraf';
import İzin from './components/pages/İzin';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true); // Yüklenme durumu

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    if (loggedInStatus === 'true') {
      setIsLoggedIn(true);
    }
    setLoading(false); // Yüklenme durumunu tamamla
  }, []);

  if (loading) {
    return <div>Loading...</div>; 
  }

  const handleLogin = () => {
    localStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Routes>
        {!isLoggedIn ? (
          <>
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        ) : (
          <>
            <Route path="/dashboard" element={<Dashboard onLogout={handleLogout} />}>
              <Route path="anasayfa" element={<AnaSayfa />} />
              <Route path="aktivite" element={<Aktivite />} />
              <Route path="masraf" element={<Masraf />} />
              <Route path="izin" element={<İzin />} />
              <Route index element={<Navigate to="anasayfa" />} />
            </Route>
            <Route path="*" element={<Navigate to="/dashboard" />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
