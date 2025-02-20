import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="content">
        <Outlet /> {/* Сюда будут подставляться страницы */}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
