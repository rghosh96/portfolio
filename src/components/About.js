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
      <br/>
      <div className="about-section">
        <div>
    
      <div className="image-container">
        <img className="profile-image" src={profile} alt="loading..." />
      </div>
      </div>
      <div>
      <h7>hello, i'm rashi!</h7>
      <p>I'm a Libra, an Enneagram Type IV (Individualist), and my creative type is a dreamer. I love web development and doing my
        nails (I make my own press-ons). My favorite font is currently poppins!
      </p>
      <p>I'm also currently a second year phD student in Human Centered Computing at University of Florida. I am a member of the 
        Virtual Experiences Research Group (VERG) Lab. 
      </p>
      <p>I got my Bachelor's in Computer Science at University of Arkansas,
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
