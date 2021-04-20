
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Guidelines from './pages/Guidelines';  
import { HashRouter, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header />

        {/* <HashRouter basename="/community">
          <Route exact path="/community" component={Home} />
          <Route path="/community/projects" exact component={Projects} />
          <Route path="/community/guidelines" exact component={Guidelines} />
        </HashRouter> */}
        
      {/* Under Development Status */}
      <p id="under-development-badge">
        Glad to have you here! Currently, This website is Under-Development Phase.
      </p>
      <Footer />
    </div>
  );
}

export default App;
