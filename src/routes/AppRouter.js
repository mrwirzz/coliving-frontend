import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cocoons from "../pages/Cocoons";
import About from "../pages/About";
import Invest from "../pages/Invest";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Layout from "../components/Layouts";
import Account from "../pages/Account";

const AppRouter = () => {
  return (
    <Routes>
      {/* Layout рендерится для всех страниц */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="cocoons" element={<Cocoons />} />
        <Route path="invest" element={<Invest />} />
        <Route path="contact" element={<Contact />} />
        <Route path="account" element={<Account />} />
      </Route>
      
      {/* 404 страница */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRouter;