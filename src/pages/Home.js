
import '../css/main.css'
import Projects from './Projects'
// import DemoCardComponent from '../components/tds_card_demo.png'
import DiscordLogo from '../components/DiscordLogo.png'
import GitHubLogo from '../components/GithubLogo.png'

const Home = () => {
  return (
    <div className="Home">
    
    <div className="landing-section">
    <h1 className="home-tagline">Here we are building projects, learn new technologies and contributing to Open Source</h1>
    
    <div className="button_layer">
      <a href="/community/projects">
        <button className="PrimaryButton">Our Projects</button>
      </a>
      <a href="https://forms.gle/qqM3tZy55GDDcwfC8" target="_blank">
        <button className="SecondaryButton">Join Today</button>
      </a>
    </div>
    </div>
    <div className="home-about-section">
      <div className="home-about-container">
        <div className="home-about-container-left">
          <h3 className="headline">What is The DesignSystems?</h3>
          <p className="home-about-content">It's a Community for Developers and Designers or People in general who are like-minded and learning new skills every day. We work on our Open Source Projects such as Eccentric Touch, GetResume and much more are gonna come. We are also trying to promote Open Source Contribution and Giving the upcoming contributors or beginners a space to grow and work in. 
          <br /><br />
          
We are also going to take part in lots of Community Challenges and Open Source Events to promote this Community between our fellow Developers and Designers worldwide. Let's Build Something Great and Together is what we believe in. We are inviting you to Join The DesignSystems Today.
Get those Green Squares on your GitHub Profile, Work on various Repositories/Projects, Have a chance to collaborate with like-minded folks. You're Welcome!
          </p>
        </div>

        <div className="home-about-container-right">
          {/* Code for the Illustration here */}
          <img src={DiscordLogo} id="discord-logo" />
          <img src={GitHubLogo} id="github-logo" />
        </div>
      </div>  {/** Closing HomeAboutSection */}
    </div>  {/** Closing HomeAboutContainer */}

    {/* Starting the OurProjects Section */}

    <div className="home-projects-container">
      <h3 className="page-headline">Our Projects</h3>
      <div className="home-projects-slider-section">

        <div className="home-project-cards-layer">

          <div className="home-project-card" id="project-card-01">
            <div className="project-image-container">
                <img className="project-image" />
              </div>
            
            <div className="project-details-section">
              <p className="project-name">Eccentric Touch</p>
              <p className="project-desc">A CSS Library to solve all your frontend problems</p>

              <div className="project-card-bottom-layer">
                  <input type="button" id="project-button" className="PrimaryButton" value="Open on GitHub" />
                <p className="project-tech-stack">
                  CSS/SCSS
                </p>
              </div>
            </div>
          </div>
          <div className="home-project-card" id="project-card-02">
            <div className="project-image-container">
                <img className="project-image" />
              </div>
            
            <div className="project-details-section">
              <p className="project-name">Eccentric Touch</p>
              <p className="project-desc">A CSS Library to solve all your frontend problems</p>

              <div className="project-card-bottom-layer">
                  <input type="button" id="project-button" className="PrimaryButton" value="Open on GitHub" />
                <p className="project-tech-stack">
                  CSS/SCSS
                </p>
              </div>
            </div>
          </div>
          <div className="home-project-card" id="project-card-03">
            <div className="project-image-container">
                <img className="project-image" />
              </div>
            
            <div className="project-details-section">
              <p className="project-name">Eccentric Touch</p>
              <p className="project-desc">A CSS Library to solve all your frontend problems</p>

              <div className="project-card-bottom-layer">
                  <input type="button" id="project-button" className="PrimaryButton" value="Open on GitHub" />
                <p className="project-tech-stack">
                  CSS/SCSS
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="home-project-cards-layer">

          <div className="home-project-card" id="project-card-04">
            <div className="project-image-container">
                <img className="project-image" />
              </div>
            
            <div className="project-details-section">
              <p className="project-name">Eccentric Touch</p>
              <p className="project-desc">A CSS Library to solve all your frontend problems</p>

              <div className="project-card-bottom-layer">
                  <input type="button" id="project-button" className="PrimaryButton" value="Open on GitHub" />
                <p className="project-tech-stack">
                  CSS/SCSS
                </p>
              </div>
            </div>
          </div>
          <div className="home-project-card" id="project-card-05">
            <div className="project-image-container">
                <img className="project-image" />
              </div>
            
            <div className="project-details-section">
              <p className="project-name">Eccentric Touch</p>
              <p className="project-desc">A CSS Library to solve all your frontend problems</p>

              <div className="project-card-bottom-layer">
                  <input type="button" id="project-button" className="PrimaryButton" value="Open on GitHub" />
                <p className="project-tech-stack">
                  CSS/SCSS
                </p>
              </div>
            </div>
          </div>
          <div className="home-project-card" id="project-card-06">
            <div className="project-image-container">
                <img className="project-image" />
              </div>
            
            <div className="project-details-section">
              <p className="project-name">Eccentric Touch</p>
              <p className="project-desc">A CSS Library to solve all your frontend problems</p>

              <div className="project-card-bottom-layer">
                  <input type="button" id="project-button" className="PrimaryButton" value="Open on GitHub" />
                <p className="project-tech-stack">
                  CSS/SCSS
                </p>
              </div>
            </div>
          </div>
        </div>

      
      </div>
    </div>

  </div>  
   
  )
};

export default Home;