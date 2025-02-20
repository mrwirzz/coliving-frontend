import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand fw-bold">COCOON</Link>
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
              <Link to="/cocoons" className="nav-link">Cocoons</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/invest" className="nav-link">Invest</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>
          </ul>
          {/* Кнопка Log In */}
<Link to="/login" className="btn ms-3" style={{
  backgroundColor: "rgba(155, 57, 42, 0.8)", // Коричневый с 80% прозрачности
  border: "2px solid black", // Черная граница
  color: "white", // Белый текст
  width: "178px", // Ширина
  height: "38px", // Высота
  fontWeight: "bold",
  fontSize: "16px", // Чуть больше шрифт
  textAlign: "center", // Выравнивание текста
  display: "flex", 
  justifyContent: "center", 
  alignItems: "center"
}}>
  Log In
</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
