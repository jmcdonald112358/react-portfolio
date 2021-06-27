import React from 'react';
import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Invalid from './pages/Invalid';
import Portfolio from './pages/Portfolio';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="bg-dark">
        <Header />
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/Contact" component={Contact} />
          <Route component={Invalid} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
