

import GreenSquares from '../Assets/Images/green_squares.svg';
import LinkDetails from '../Assets/LinkDetails';

import React from 'react';
import { Switch, Route, HashRouter, Link } from 'react-router-dom';

import Projects from '../Views/Projects/index';

const Home = function Home() {
  return (
    <HashRouter basename="/">
      <div className="Home">

        {/* Homepage - Landing Container */}
        <div className="Home-LandingPageContainer Container page-body">
          <h2 className="massive-headline">
            Here we are building projects, learn new technologies and contributing to <span className="highlight-underlined">Open Source</span>
          </h2>
          <div id="button_layer">
            
            {/* Discord Server Button */}
            <a href={LinkDetails.getDiscordServerURL()} target="_blank">
              <button 
                className="PrimaryButton">
                  Join our Discord Server
                <i className="fab fa-discord" id="icon"></i>
              </button>
            </a>

            {/* GitHub Profile Button */}
            <a href={LinkDetails.getGitHubURL()} target="_blank">
              <button 
                className="SecondaryButton">
                  Join our GitHub
                <i className="fab fa-github" id="icon"></i>
              </button>
            </a>
          
          </div>
        </div>  { /** Closing the Homepage Landing Container */  }

        {/* Technologies we work on */}
        <div className="Home-TechContainer Container">
          <div className="Home-TechSection page-body">
            <h2 className="headline">
              Technologies we work on our Daily Basis
            </h2>
          
          {/* Setting up a marquee here */}
            <div className="Home-TechContainer-TechLayer">
              {/* Creating Technology Cards */}
              <div className="TechCard">
                <i class="fab fa-html5 TechLogo"></i>
                <p className="TechCard-TechTitle">
                  HTML 5
                </p>
              </div>

              <div className="TechCard">
                <i class="fab fa-css3-alt TechLogo"></i>
                <p className="TechCard-TechTitle">
                  CSS 3
                </p>
              </div>

              <div className="TechCard">
                <i class="fab fa-js-square TechLogo"></i>
                <p className="TechCard-TechTitle">
                  JavaScript
                </p>
              </div>

              <div className="TechCard">
              <i class="fab fa-sass TechLogo"></i>
                <p className="TechCard-TechTitle">
                  SCSS
                </p>
              </div>

              <div className="TechCard">
                <i class="fab fa-python TechLogo"></i>
                <p className="TechCard-TechTitle">
                  Python
                </p>
              </div>

              <div className="TechCard">
                <i class="fab fa-react TechLogo"></i>
                <p className="TechCard-TechTitle">
                  ReactJS
                </p>
              </div>

              <div className="TechCard">
                <i class="fab fa-git-alt TechLogo"></i>
                <p className="TechCard-TechTitle">
                  Git
                </p>
              </div>

              <div className="TechCard">
                <i class="fab fa-node-js TechLogo"></i>
                <p className="TechCard-TechTitle">
                  NodeJS
                </p>
              </div>

              <div className="TechCard">
                <i class="fab fa-figma TechLogo"></i>
                <p className="TechCard-TechTitle">
                  Figma
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* Homepage Contribute Today Section */}
        <div className="Home-ContributingContainer Container">
          <div className="Home-ContributingSection page-body">
            <h2 className="headline">
              Start Contributing Today!
            </h2>
            <div className="Home-ContributingCard">
              <img src={GreenSquares} alt="green-squares" className="Home-ContributeSection-CardBG" />
              <h3 className="ContributionCard-Title">We have beginner friendly Open Source Projects</h3>
              <p className="ContributionCard-Description">
                We here at The DesignSystems are constantly trying to build projects and get you in the world of Open Source Software Development. It is an amazing way to learn, collaborate and network with like-minded folks.
                Contribute and Get those Green Squares
              </p>
              
            <div id="home-button_layer">
              {/* Discord Server Button */}
              <a href={LinkDetails.getDiscordServerURL()} target="_blank">
                <button 
                  className="PrimaryButton">
                    Join our Discord Server
                  <i className="fab fa-discord" id="icon"></i>
                </button>
              </a>

              {/* GitHub Profile Button */}
              <a href={LinkDetails.getGitHubURL()} target="_blank">
                <button 
                  className="SecondaryButton">
                    Join our GitHub
                  <i className="fab fa-github" id="icon"></i>
                </button>
              </a>
              </div>
            </div>
          </div>
        </div>

        {/* Homepage - Our Projects Container */}
       <Projects />

      </div>
    </HashRouter>
  )
};

export default Home;