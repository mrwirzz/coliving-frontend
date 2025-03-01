import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// import PopUpContact from './PopUpContact.js'; // Импортируем компонент PopUpContact

const Navbar = () => {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false); // Закрыть окно
  // const handleShow = () => setShow(true);   // Открыть окно
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{
      position: "fixed", // Закрепляем на верхней части экрана
      top: 0, // Верхний отступ от экрана
      left: 0, // Левый отступ
      right: 0, // Правый отступ
      zIndex: 1000, // Чтобы навбар был поверх других элементов
      borderRadius: "10px", // Закругленные углы
      backgroundColor: "rgba(152, 191, 202, 0.85) ",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Тень
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
              <Link to="/cocoons" className="nav-link">Cocoons</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/invest" className="nav-link">Invest</Link>
            </li>
            <li className="nav-item">
            <button className="nav-link btn" onClick={() => {}}> Contact </button>
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
