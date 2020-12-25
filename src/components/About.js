import React from 'react'
import '../css/about.css';
import '../css/master.css';
import { withTheme } from 'styled-components'

const About = (props) => {
    return (
      <div className="about-container">
        <h2>about</h2>
        <p>born in queens, NY, grew up in north/northwest Arkansas. </p>
        <p>24 years old (oct 1 1996)</p>
      </div>
    )
  }

  const AboutPage = withTheme(About);
  export default AboutPage;
