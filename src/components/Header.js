
import '../css/main.css';
import Logo from './logo-github.jpg';
import { HashRouter, Route, Link } from "react-router-dom";
import Home from '../pages/Home';
import Projects from '../pages/Projects'

const Header =() => {
  return (
    <HashRouter basename="/community">
      <div className="Header">
        <Link to="/">
          <div className="header-left-container">
            <img src={Logo} alt="logo" className="logo" alt="logo"/>
            <span className="header-logo-line">
              The DesignSystems
            </span>
          </div>
        </Link>
        <div className="header_option_container">
          <ul className="header-option-list">
            <li className="header-option">
              <Link to="/">
                Home
              </Link>
            </li>
            <li className="header-option">
              <Link to="/projects">
                Our Projects
              </Link>
            </li>
            <li className="header-option"><a>Events</a></li>
            <li className="header-option"><a href="https://forms.gle/qqM3tZy55GDDcwfC8" target="_blank">Join TDS</a></li>
            <li className="header-option"><a href="https://www.github.com/DesignSystemsOSS" target="_blank">GitHub</a></li>
          </ul>
        </div>
      </div>

      <Route exact path="/" component={Home} />
      <Route exact path="/projects" component={Projects} />
    </HashRouter>
  )
};

export default Header;