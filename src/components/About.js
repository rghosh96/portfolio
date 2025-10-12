import React from 'react'
import '../css/about.css';
import '../css/master.css';
import { withTheme } from 'styled-components'
import { ReactComponent as Diamond } from '../css/diamond.svg'
import profile from '../assets/profile.gif'
import { Button } from 'react-bootstrap'
import { Link } from "react-router-dom";


const About = (props) => {
  return (
    <div className="home-section">
      <h2>about</h2>
      <br/>
      <div className="about-section">
        <div>
    
      <div className="image-container">
        <img className="profile-image" src={profile} alt="loading..." />
      </div>
      </div>
      <div>
      <h3>Hello, I am Rashi!</h3>
      <p>i am currently a  <span className="rainbow-gradient">human-centered computing phd student</span> at the <span className="rainbow-gradient">university of florida</span> in 
        the <span className="rainbow-gradient">virtual experiences research group (VERG)</span>.
      </p>
      <p>i completed a <span className="rainbow-gradient">BS in computer science</span> from the <span className="rainbow-gradient">university of arkansas</span> and have brief 
        experience working as a <span className="rainbow-gradient">software engineer</span> at a <span className="rainbow-gradient">healthcare tech company</span> in <span className="rainbow-gradient">kansas city, missouri</span>.
      </p>
      </div>
    </div>
    {/* <Link to="/resume">
    <Button variant="generic">check out my resume!</Button></Link> */}
    </div>
  )
}

const AboutSection = withTheme(About);
export default AboutSection;
