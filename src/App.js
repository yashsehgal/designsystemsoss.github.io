

// Importing components - header and Footer Components for static display
import Header from './Components/Header';
import Footer from './Components/Footer';
import React, { Suspense } from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';


// Importing Page/View Modules
import Home from './Views/Home';
import Projects from './Views/Projects/index';
import Guidelines from './Views/Guidelines/index';
import Events from './Views/Events/index';
import Contact from './Views/Contact/index';
import LoadingPage from './Views/LoadingPage/index';

function App() {
  return (
    <div className="App">
      <Header />
      <Suspense fallback={LoadingPage}>
        <HashRouter basename="/">
          <Switch>

            {/* Rendering the Homepage */}
            <Route
              path="/"
              exact component={Home}
            />

            {/* Rendering the Projects Page */}
            <Route
              path="/projects"
              exact component={Projects}
            />

            {/* Rendering the Guidelines Page */}
            <Route
              path="guidelines"
              exact component={Guidelines}
            />

            {/* Rendering the Events Page */}
            <Route
              path="events"
              exact component={Events}
            />

            {/* Rendering the Contact Page */}
            <Route
              path="/contact"
              exact component={Contact}
            />


          </Switch>
        </HashRouter>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
