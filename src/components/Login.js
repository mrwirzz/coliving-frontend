import { useState } from 'react';
import { supabase } from '../config/supabase';

const Login = ({ show, onHide }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });
      if (error) throw error;
      onHide(); // Закрываем окно после успешного входа
    } catch (error) {
      console.error('Ошибка входа:', error.message);
    }
  };

  if (!show) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content" style={{ backgroundColor: "#98BFCA" }}>
        <div className="popup-header">
          <h3>Login</h3>
          <button onClick={onHide} className="close-button">&times;</button>
        </div>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-button">Войти</button>
        </form>
      </div>
    </div>
  );
};

export default Login; 