import React from 'react'
import '../css/about.css';
import '../css/master.css';
import { withTheme } from 'styled-components'

const About = (props) => {
    return (
      <div className="about-container">
        <h1>about</h1>
        <p>hello</p>
      </div>
    )
  }

  const AboutPage = withTheme(About);
  export default AboutPage;
