import React from 'react'
import '../css/about.css';
import '../css/master.css';
import { withTheme } from 'styled-components'
import { ReactComponent as Diamond } from '../css/diamond.svg'
import profile from '../assets/profile.gif'
import { animateScroll as scroll } from 'react-scroll'

const About = (props) => {
  return (
    <div className="section-container" >
      <div className="diamond-header">
        <Diamond className="diamond2"></Diamond>
        <Diamond className="diamond2"></Diamond>
        <Diamond className="diamond2"></Diamond>
      </div>
      <h2>about</h2>
      <hr />
      <div className="image-container">
        <img className="profile-image" src={profile} alt="loading..." />
      </div>
      <div className="info"><h3>enneagram: &nbsp; </h3> <p>type 4 (individualist)</p></div>
      <div className="info"><h3>creative type: &nbsp; </h3> <p>dreamer</p></div>
      <div className="info"><h3>os of choice: &nbsp; </h3> <p>mac</p></div>
      <hr />
      <h3>interests:</h3>
      <p>doing my nails (i make my own press-ons), painting (watercolor), drawing (ink), running, graphic design
      </p>
      <h3>favorite fonts:</h3>
      <p>been rlly into montesserat, quicksand, & spartan lately
      </p>
      <h3>favorite coding softwares:</h3>
      <p>good old terminal + decked out text editor
      </p>
      <h3>how did u make this portfolio site?</h3>
      <p>made from scratch using react!
      </p>
      <div className="to-top" onClick={() => scroll.scrollToTop()}><Diamond className="diamond-top" />
        <div className="diamond-top-text">top</div></div>
    </div>
  )
}

const AboutPage = withTheme(About);
export default AboutPage;
