import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const users = [{ username: 'admin', password: '123' }];
    const foundUser = users.find(user => user.username === username && user.password === password);

    if (foundUser) {
      setLoginMessage('Giriş başarılı!');
      setTimeout(() => {
        onLogin(); // Giriş durumu güncelleniyor
        navigate('/Dashboard'); // Ana Sayfa'ya yönlendiriliyor
      }, 1000);
    } else {
      alert('Kullanıcı adı veya şifre yanlış!');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>Giriş Yap</h2>
        <div className="form-group">
          <label htmlFor="username">Kullanıcı Adı</label>
          <input 
            type="text" 
            id="username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Şifre</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Giriş Yap</button>

        {loginMessage && <p>{loginMessage}</p>}
      </form>
    </div>
  );
};

export default Login;
