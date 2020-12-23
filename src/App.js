import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/themes';
import { GlobalStyles } from './styles/global';



function App() {
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
      <div>
      <GlobalStyles />
      <button onClick={toggleTheme}>Toggle theme</button>
      <BrowserRouter>
      <Switch>
        <Route exact path="/portfolio/" component={Home} />
      </Switch>
      </BrowserRouter>
    </div>
    </ThemeProvider>
    
  );
}

export default App;
