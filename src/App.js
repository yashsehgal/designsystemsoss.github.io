
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Route path="/" exact component={Home} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
