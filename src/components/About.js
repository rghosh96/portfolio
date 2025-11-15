import React from 'react'
import '../css/about.css';
import '../css/master.css';
import { withTheme } from 'styled-components'
import profile from '../assets/profile.png'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-solid-svg-icons'


const About = (props) => {
  return (
    <div className="home-section">
      <div className="section-heading">
        <FontAwesomeIcon
            color={props.theme.accent}
            icon={faUser}
            size='lg'
          />
        <h2>about</h2>
      </div>
      <br/>
      <div className="about-section">
        <div>
    
      <div className="image-container">
        <img className="profile-image" src={profile} alt="loading..." />
      </div>
      </div>
      <div>
      <h3>hello, i am rashi!</h3>
      <p>i am currently a  <span className="rainbow-gradient">human-centered computing phd student</span> at the <span className="rainbow-gradient">university of florida</span> in 
        the <span className="rainbow-gradient">virtual experiences research group (VERG)</span>.
      </p>
      <p>i completed a <span className="rainbow-gradient">BS in computer science</span> from the <span className="rainbow-gradient">university of arkansas</span> and have brief 
        experience working as a <span className="rainbow-gradient">software engineer</span> at a <span className="rainbow-gradient">healthcare tech company</span> in <span className="rainbow-gradient">kansas city, missouri</span>.
      </p>
      </div>
    </div>
    <a href="https://docs.google.com/document/d/1slNW9CStbBQoJ1W5X51Wb60-7X84J8rLh6gPEpR48WI/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
      <Button variant="generic">My CV</Button>
    </a>
    </div>
  )
}

const AboutSection = withTheme(About);
export default AboutSection;
