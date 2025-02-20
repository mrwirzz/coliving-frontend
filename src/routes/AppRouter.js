import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cocoons from "../pages/Cocoons";
import About from "../pages/About";
import Invest from "../pages/Invest";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
import Layout from "../components/Layouts";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Layout рендерится для всех страниц */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="cocoons" element={<Cocoons />} />
          <Route path="invest" element={<Invest />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;