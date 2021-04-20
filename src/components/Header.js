
import '../css/main.css';
import Logo from './logo-github.jpg';

const Header =() => {
  return (
    <div className="Header">
      <a href="/community">
        <div className="header-left-container">
          <img src={Logo} alt="logo" className="logo" alt="logo"/>
          <span className="header-logo-line">
            The DesignSystems
          </span>
        </div>
      </a>
      <div className="header_option_container">
        <ul className="header-option-list">
          <li className="header-option"><a href="/community">Home</a></li>
          <li className="header-option"><a href="/community/projects/">Our Projects</a></li>
          <li className="header-option"><a>Events</a></li>
          <li className="header-option"><a href="https://forms.gle/qqM3tZy55GDDcwfC8" target="_blank">Join TDS</a></li>
          <li className="header-option"><a href="https://www.github.com/DesignSystemsOSS" target="_blank">GitHub</a></li>
        </ul>
      </div>
    </div>
  )
};

export default Header;