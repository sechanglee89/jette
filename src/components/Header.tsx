import { Link, NavLink } from "react-router-dom";
import logo from '../images/logo.svg';


const Header = () => {
    return (
      <>
        <header>
          <div>
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
        </header>
      </>
    );
  };

export default Header;