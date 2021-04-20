
import Logo from './logo-github.jpg';
import { HashRouter, Route, Link } from "react-router-dom";


const Footer = () => {
  return (
    <HashRouter basename="/" >
    <div className="Footer">
      <div className="footer-upper-container">
        
        {/* Footer Upper Section 01 - Community */}
        <div className="footer-options-container">
          
          <p className="footer-option-title">Community</p>
          <ul className="footer-option-list">
            <li className="footer-option">
              <a href="#" className="footer-option-link">Open Source</a>
            </li>
            <li className="footer-option">
              <a href="#" className="footer-option-link">Contributing</a>
            </li>
            <li className="footer-option">
              <a href="https://www.github.com/DesignSystemsOSS" className="footer-option-link">GitHub</a>
            </li>
            <li className="footer-option">
              <a href="#" className="footer-option-link">Discord Server</a>
            </li>
          </ul>
        </div>

        {/* Footer Upper Section 02 - Site Map */}
        <div className="footer-options-container">
          
          <p className="footer-option-title">Site Map</p>
          <ul className="footer-option-list">
            <li className="footer-option">
              <Link to="/">
                Home
              </Link>
            </li>
            <li className="footer-option">
              <Link to="/projects">
                Our Projects
              </Link>
            </li>
            <li className="footer-option">
              <a href="#" className="footer-option-link">Events</a>
            </li>
            <li className="footer-option">
              <a href="#" className="footer-option-link">Join The DesignSystems</a>
            </li>
            <li className="footer-option">
              <a href="https://www.github.com/DesignSystemsOSS" className="footer-option-link">GitHub</a>
            </li>
          </ul>
        </div>

        {/* Footer Upper Section 03 - Guidelines */}
        <div className="footer-options-container">
          
          <p className="footer-option-title">Guidelines</p>
          <ul className="footer-option-list">
            <li className="footer-option">
              <a href="/community/guidelines#contribute" className="footer-option-link">How to Contribute</a>
            </li>
            <li className="footer-option">
              <a href="/community/guidelines#code-of-conduct" className="footer-option-link">Code of Conduct</a>
            </li>
            <li className="footer-option">
              <a href="/community/guidelines#license" className="footer-option-link">License</a>
            </li>
            <li className="footer-option">
              <a href="/community/guidelines#rules" className="footer-option-link">Rules</a>
            </li>
            <li className="footer-option">
              <a href="/community/guidelines#community-measures" className="footer-option-link">Community Measures</a>
            </li>
          </ul>
        </div>

      </div>    {/* Footer Upper Layer is closing here  */}


      <div className="footer-lower-container">
        
        {/* Logo + Copyright Line : Container */}
        <div className="footer-lower-left-container">
          <img src={Logo} alt="logo" className="logo" alt="logo" />
          <span className="footer-copyright-line">
            &copy; 2021 The DesignSystems. All rights reserved.
          </span>
        </div>

        {/* Social Media Icons : Container */}
        <div className="footer-lower-right-container">
          
          <a href="https://www.linkedin.com/company/designsystemsoss" className="footer-lower-social-icon-link">
            <i className="fab fa-linkedin" id="footer-social-icons"></i>
          </a>

          <a href="#" className="footer-lower-social-icon-link">
            <i className="fab fa-discord" id="footer-social-icons"></i>
          </a>

          <a href="https://www.github.com/DesignSystemsOSS" className="footer-lower-social-icon-link">
            <i className="fab fa-github" id="footer-social-icons"></i>
          </a>

        </div>


      </div>      { /** End of Footer Lower Container */  }
        <p className="footer-credits-line">The Website is developed with 💜 by 
          <a id="footer-website-link" href="/community">
            The DesignSystems Community
          </a>
        </p>
    </div>
    </HashRouter>
  )
};

export default Footer;