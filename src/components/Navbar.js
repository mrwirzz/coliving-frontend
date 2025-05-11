import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import PopupContact from './PopupContact.js';
import Login from './Login';
import Register from './Register';
import { supabase } from '../config/supabase';

const Navbar = () => {
  const [showContact, setShowContact] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Проверяем авторизацию при монтировании и после логина/логаута
  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    getUser();

    // Подписка на изменения сессии
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    navigate('/');
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light" style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        borderRadius: "10px",
        backgroundColor: "rgba(157, 189, 198, 0.96)",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)"
      }}>
        <div className="container">
          <Link to="/" className="navbar-brand fw-bold">
            <img 
              src="/assets/Cocoon_Icon(1).png" 
              alt="COCOON" 
              className="mt-2" 
              style={{ maxWidth: "360px", maxHeight: "60px" }} 
            />
          </Link>

          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/cocoons" className="nav-link fs-5 py-2 px-3">Cocoons</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link fs-5 py-2 px-3">About Us</Link>
              </li>
              <li className="nav-item">
                <Link to="/invest" className="nav-link fs-5 py-2 px-3">Invest</Link>
              </li>
              <li className="nav-item">
                <button className="nav-link btn fs-5 py-2 px-4" onClick={() => setShowContact(true)}>Contact</button>
              </li>
            </ul>

            {/* Кнопки авторизации */}
            <div className="d-flex gap-2">
              {!user ? (
                <>
                  <button 
                    onClick={() => setShowLogin(true)}
                    className="btn" 
                    style={{
                      backgroundColor: "rgb(127, 190, 207)",
                      border: "2px solid black",
                      color: "white",
                      width: "100px",
                      height: "38px",
                      fontWeight: "bold",
                      fontSize: "16px",
                      textAlign: "center",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    Log in
                  </button>
                  <button 
                    onClick={() => setShowRegister(true)}
                    className="btn" 
                    style={{
                      backgroundColor: "white",
                      border: "2px solid black",
                      color: "black",
                      width: "140px",
                      height: "38px",
                      fontWeight: "bold",
                      fontSize: "16px",
                      textAlign: "center",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    Register
                  </button>
                </>
              ) : (
                <>
                  <Link 
                    to="/account"
                    className="btn"
                    style={{
                      backgroundColor: "rgb(127, 190, 207)",
                      border: "2px solid black",
                      color: "white",
                      width: "120px",
                      height: "38px",
                      fontWeight: "bold",
                      fontSize: "16px",
                      textAlign: "center",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    Account
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="btn"
                    style={{
                      backgroundColor: "white",
                      border: "2px solid black",
                      color: "black",
                      width: "140px",
                      height: "38px",
                      fontWeight: "bold",
                      fontSize: "16px",
                      textAlign: "center",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    log out
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Модальные окна */}
      <PopupContact show={showContact} handleClose={() => setShowContact(false)} />
      <Login show={showLogin} onHide={() => setShowLogin(false)} />
      <Register show={showRegister} onHide={() => setShowRegister(false)} />
    </>
  );
};

export default Navbar;

