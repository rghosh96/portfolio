import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
        <Route exact path="/portfolio/" component={Home} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
