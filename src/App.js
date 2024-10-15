import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import AnaSayfa from './components/pages/AnaSayfa';
import Aktivite from './components/pages/Aktivite';
import Masraf from './components/pages/Masraf';
import İzin from './components/pages/İzin';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');

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
              <Route path="masraf" element={<Masraf />} /> {/* Masraf sayfasını burada tanımlıyoruz */}
              <Route path="izin" element={<İzin />} /> 
              <Route index element={<Navigate to="anasayfa" />} /> {/* Default yönlendirme */}
            </Route>
            <Route path="*" element={<Navigate to="/dashboard" />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
