import Header from "./Header";
import Footer from "./Footer";
import MainHome from "../MainHome";
import Blueberry from "../Blueberry";
import Caring from "../Caring";
import Shop from "../Shop";
import ScrollToTop from './ScrollToTop'; // ScrollToTop 컴포넌트 import
import { HashRouter as BrowserRouter, Routes, Route } from "react-router-dom";

const Layout = () => {
    return (
      <>
        <BrowserRouter>
        <ScrollToTop /> {/* 라우팅 시 스크롤을 최상단으로 이동 */}
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