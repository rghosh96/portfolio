import React from 'react'
import '../css/about.css';
import '../css/master.css';
import { withTheme } from 'styled-components'
import { ReactComponent as Diamond } from '../css/diamond.svg'
import profile from '../assets/profile.gif'
import { animateScroll as scroll } from 'react-scroll'
import { Button } from 'react-bootstrap'
import { Link } from "react-router-dom";


const About = (props) => {
  return (
    <div className="home-section">
      <div className="diamond-header">
        <Diamond className="diamond2"></Diamond>
        <Diamond className="diamond2"></Diamond>
        <Diamond className="diamond2"></Diamond>
      </div>
      <h2>about</h2>
      <div className="about-section">
        <div>
    
      <div className="image-container">
        <img className="profile-image" src={profile} alt="loading..." />
      </div>
      </div>
      <div>
      <h7>hello, i'm rashi!</h7>
      <p>i'm a libra, an enneagram type IV (individualist), and my creative type is a dreamer. i love web development and doing my
        nails (i make my own press-ons). my fav fonts are currently montserrat, quicksand, and spartan!
      </p>
      <p>i'm also currently a first year phD student at University of Florida. i got my bachelor's in computer science,
        & have industry experience from working briefly at a healthcare information technology company.
      </p>
      </div>
    </div>
    <Link to="/resume">
    <Button variant="generic">check out my resume!</Button></Link>
    </div>
  )
}

const AboutSection = withTheme(About);
export default AboutSection;
