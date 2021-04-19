import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import App from './App';
import Projects from './pages/Projects';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
// import { Route, Switch, HashRouter as Router } from 'react-router-dom'


ReactDOM.render(
  <React.StrictMode>
    {/* <Header />
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/?id=projects/#/" exact component={Projects} />
      </Switch>
    </Router>
    <Footer /> */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
