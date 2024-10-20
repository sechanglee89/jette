import Header from "./Header";
import Footer from "./Footer";
import MainHome from "../MainHome";
import Blueberry from "../Blueberry";
import Caring from "../Caring";
import Shop from "../Shop";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<MainHome />} />
          <Route path="/blueberry" element={<Blueberry />} />
          <Route path="/caring" element={<Caring />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
};

export default Layout;