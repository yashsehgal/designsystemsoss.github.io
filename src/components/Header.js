import React from 'react';
import ReactDOM from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import '../Theme/main.css'
import Logo from '../Assets/Images/designsystemsLogo.jpg'

const Header = function Header() {
  return (
    <div className="Header">

      <div className="page-body">
        <div className="HeaderComponent-Logo">
          <img src={Logo} alt="LogoImage" className="LogoImage" />
          <a className="LogoText">The DesignSystems</a>
        </div>
        <div className="HeaderComponent-Options">
          <ul className="HeaderComponent-OptionList">
            <HashRouter basename="/">
              <Link to="/">
                <li className="HeaderComponent-HeaderOption">Home</li>
              </Link>
              {/* <Link to="/projects">
                <li className="HeaderComponent-HeaderOption">Projects</li>
              </Link> */}
              <Link to="/events">
                <li className="HeaderComponent-HeaderOption">Events</li>
              </Link>
              <Link to="/guidelines">
                <li className="HeaderComponent-HeaderOption">Guidelines</li>
              </Link>
              <Link to="/contact">
                <li className="HeaderComponent-HeaderOption">Contact</li>
              </Link>
              <Link to="/join-tds">
                <li className="HeaderComponent-HeaderOption">
                  <input type="button" className="HeaderComponent-Button PrimaryButton" value="Join The DesignSystems" />
                </li>
              </Link>
            </HashRouter>
          </ul>
        </div>
      </div>
    </div>
  )
};

export default Header;