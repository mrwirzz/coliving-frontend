import { useState } from 'react';
import { supabase } from '../config/supabase';

const Register = ({ show, onHide }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name: name
          }
        }
      });
      
      if (error) throw error;
      
      alert('Chek your email!');
      onHide();
      
    } catch (error) {
      console.error('Register error:', error.message);
      alert(error.message);
    }
  };

  if (!show) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content" style={{ backgroundColor: "#98BFCA" }}>
        <div className="popup-header">
          <h3>Register</h3>
          <button onClick={onHide} className="close-button">&times;</button>
        </div>
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
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
            <label>Passowrd</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-button">submit</button>
        </form>
      </div>
    </div>
  );
};

export default Register; 