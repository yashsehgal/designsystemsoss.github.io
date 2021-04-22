import React, { lazy, Suspense } from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';

// Importing Page/View Modules
import Home from './Views/Home'
import Projects from './Views/Projects/index'
import Guidelines from './Views/Guidelines/index'
import Events from './Views/Events/index'
import Contact from './Views/Contact/index'
import LoadingPage from './Views/LoadingPage/index'

const RenderRoutes = () => {
  <Suspense fallback={LoadingPage}>
    <Switch>
      <HashRouter basename="/">

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


      </HashRouter>
    </Switch>
  </Suspense>
};

export default RenderRoutes;