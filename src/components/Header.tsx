import { Link, NavLink } from "react-router-dom";
import logo from '../images/logo.svg';
import { useState } from "react";

// const toggleHandler = (_event: any) => {

// };

const Header = () => {
    const [isOn, setisOn] = useState(false);

    const toggleHandler = () => {
      // isOn의 상태를 변경하는 메소드를 구현
      setisOn(!isOn)
    };

    const handleLinkClick = () => {
      // 클릭 시 동작 수행 (예: 로그 찍기)
      console.log('Link clicked!');
    };
  

    return (
      <>
        <header className={`${isOn ? "is-active" : ""}`}>
          <div className="pc-header-wrap">
            <div className="logo-wrap">
            <Link to='/'><img alt="제때 로고" src={logo} /></Link>
            </div>
            <div className="text-wrap">
                <div className="header-link-wrap">
                  <NavLink to='/blueberry' className={({ isActive }) => (isActive ? "active" : "")}>블루베리 농장</NavLink>
                  <NavLink to='/caring' className={({ isActive }) => (isActive ? "active" : "")}>농촌 돌봄 농장</NavLink>
                  <NavLink to='/shop' className={({ isActive }) => (isActive ? "active" : "")}>제때 쇼핑몰</NavLink>
                </div>
            </div>
          </div>
          <div className="mw-header-wrap hide">
            <div className="logo-wrap">
            <Link to='/'><img alt="제때 로고" src={logo} /></Link>
            </div>
            <div className="burger-sticks" onClick={toggleHandler}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="text-wrap hide">
                <div className="header-link-wrap">
                  <NavLink to='/blueberry' onClick={handleLinkClick} className={({ isActive }) => (isActive ? "active" : "")}>블루베리 농장</NavLink>
                  <NavLink to='/caring' onClick={handleLinkClick} className={({ isActive }) => (isActive ? "active" : "")}>농촌 돌봄 농장</NavLink>
                  <NavLink to='/shop' onClick={handleLinkClick} className={({ isActive }) => (isActive ? "active" : "")}>제때 쇼핑몰</NavLink>
                </div>
            </div>
          </div>
        </header>
      </>
    );
  };

export default Header;