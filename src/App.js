import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import About from './components/About'
import Healthcare from './components/Healthcare'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/portfolio/" component={Home} />
        <Route exact path="/portfolio/about" component={About} />
        <Route exact path="/portfolio/healthcare" component={Healthcare} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
