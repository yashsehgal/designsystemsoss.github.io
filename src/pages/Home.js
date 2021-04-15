
import '../css/main.css'

const Home = () => {
  return (
    <div className="Home">
    
    <h1 className="home-tagline">Lorem epsum Dummy text. This will contain a tagline</h1>
    
    <div className="button_layer">
      <button className="PrimaryButton">Our Projects</button>
      <button className="SecondaryButton">Join Today</button>
    </div>
    

    <div className="home-about-section">
      <div className="home-about-container">
        <div className="home-about-container-left">
          <h3 className="headline">What is The DesignSystems?</h3>
          <p className="home-about-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.</p>
        </div>

        <div className="home-about-container-right">
          {/* Code for the Illustration here */}
        </div>
      </div>
    </div>

  </div>
   
  )
};

export default Home;