import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/themes';
import { GlobalStyles } from './styles/global';
import './css/master.css';
import ToggleSwitch from './components/Toggle';
import ResumePage from './components/Resume';
import ParallaxPage from './components/Parallax';
import AllProjectsPage from './components/project_pages/AllProjects';

function App(props) {
  // check if persisting theme exists, set to last theme; else light is default
  let siteTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
  const [theme, setTheme] = useState(siteTheme);

// The function that toggles between themes
const toggleTheme = () => {
  // if the theme is not light, then set it to dark
  if (theme === 'light') {
    setTheme('dark');
    // save this choice to local storage
    localStorage.setItem('theme', 'dark');
  // otherwise, it should be light
  } else {
    setTheme('light');
    // save this choice to local storage
    localStorage.setItem('theme', 'light');
  }
}


  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <div className="leContainer">
      <ToggleSwitch theme={theme === 'light' ? lightTheme : darkTheme} toggleTheme={toggleTheme}>Toggle theme</ToggleSwitch>
      <GlobalStyles />
      <BrowserRouter>
      <Switch>
        <Route exact path="/oldHomePage" component={HomePage} />
        <Route exact path="/resume" component={ResumePage} />
        <Route exact path="/portfolio" component={ParallaxPage} />
        <Route exact path="/allprojects" component={AllProjectsPage} />
      </Switch>
      </BrowserRouter>
      </div>
    </ThemeProvider>
    
  );
}

export default App;
