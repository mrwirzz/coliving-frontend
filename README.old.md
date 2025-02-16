Project structure:
coliving-frontend/
│── public/                # Статические файлы (favicon, index.html)
│── src/
│   ├── assets/            # Медиафайлы, иконки, стили
│   ├── components/        # Переиспользуемые компоненты
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Button.jsx
│   │   ├── ContactForm.jsx
│   │   ├── PopupContact.jsx
│   │   ├── ApplicationForm.jsx
│   │   ├── PropertyCard.jsx
│   ├── pages/             # Основные страницы
│   │   ├── Home.jsx
│   │   ├── Cocoons.jsx
│   │   ├── About.jsx
│   │   ├── Invest.jsx
│   │   ├── Contact.jsx
│   │   ├── NotFound.jsx
│   ├── routes/            # Настройки маршрутизации
│   │   ├── AppRouter.jsx
│   ├── context/           # Глобальное управление состоянием (например, Zustand или Context API)
│   ├── api/               # Запросы к backend API
│   │   ├── properties.js
│   │   ├── contact.js
│   │   ├── application.js
│   ├── App.jsx            # Основной компонент
│   ├── main.jsx           # Входная точка
│── .env                   # Файл для переменных окружения
│── package.json           # Файл зависимостей
│── tailwind.config.js      # Конфигурация TailwindCSS (если используется)
│── README.md              # Документация проекта

Технологии
React (Vite/CRA) – Основной фреймворк.
React Router – Маршрутизация между страницами.
TailwindCSS / Styled Components – Для стилизации.
Zustand / Context API – Для управления состоянием.
Axios / Fetch API – Для запросов к серверу.
Framer Motion – Анимации.
🚀 Структура страниц
1. Landing Page (Home)
Headline
Кнопки: Cocoons, About us, Invest with us, Contact us
Список преимуществ проживания (What is in)
Раздел с Pamper Me Add-ons (Coming soon)
Кнопка Explore Cocoons
2. Cocoons (Список недвижимости)
PropertyCard с информацией о каждом объекте.
Раздел "Welcome to Cocoon Place / City".
Фильтрация по локациям.
Кнопка "Apply Now" (ведет к Application Form).
3. About Us
Информация о компании.
История и миссия.
Раздел "3 I’s" (Inspire, Inclusive, Innovation).
Цветовая концепция.
4. Invest with us
Преимущества инвестиций.
Статистика по рынку.
Кнопка "Contact Us" (открывает попап).
5. Contact Us
ContactForm (имя, email, компания, сообщение).
Иконки WhatsApp и Email.
Popup с подтверждением отправки.
6. Application Form
Поля формы (Personal Info, Work/Academic Info, Residency Info).
Поле для загрузки документов.
Подтверждение заявки.
🔗 Маршрутизация (React Router)
Файл AppRouter.jsx:
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cocoons from "../pages/Cocoons";
import About from "../pages/About";
import Invest from "../pages/Invest";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cocoons" element={<Cocoons />} />
        <Route path="/about" element={<About />} />
        <Route path="/invest" element={<Invest />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;