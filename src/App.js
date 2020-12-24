import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/themes';
import { GlobalStyles } from './styles/global';
import './css/master.css';
import ToggleSwitch from './components/Toggle';


function App(props) {
  const [theme, setTheme] = useState('light');

// The function that toggles between themes
const toggleTheme = () => {
  // if the theme is not light, then set it to dark
  if (theme === 'light') {
    setTheme('dark');
  // otherwise, it should be light
  } else {
    setTheme('light');
  }
}


  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <div className="container">
      <ToggleSwitch theme={theme === 'light' ? lightTheme : darkTheme} toggleTheme={toggleTheme}>Toggle theme</ToggleSwitch>
      <GlobalStyles />
      <BrowserRouter>
      <Switch>
        <Route exact path="/portfolio/" component={HomePage} />
      </Switch>
      </BrowserRouter>
      </div>
    </ThemeProvider>
    
  );
}

export default App;
