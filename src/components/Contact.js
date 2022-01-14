import React from 'react'
import '../css/about.css';
import '../css/master.css';
import '../css/contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faLinkedin, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { withTheme } from 'styled-components'
import {ReactComponent as Diamond } from '../css/diamond.svg'

const Contact = (props) => {

    return (
      <div className="home-section">
        <div className="diamond-header">
          <Diamond className="diamond2"></Diamond>
          <Diamond className="diamond2"></Diamond>
          <Diamond className="diamond2"></Diamond>
        </div>
        <h2>contact</h2>
        <div className="contact-text">
          <p>questions? comments? pls to reach out! i'll respond within a couple of days (:</p>
        </div>
        <br/>      
        <a href="mailto:rashighosh96@gmail.com">
          <FontAwesomeIcon
                color={props.theme.accent}
                icon={faPaperPlane} 
                size='3x'
                className="social-media"
              />
        </a>
        <br/>   
        <hr />
        <div class="center">
          <h4>connect with me</h4>
        </div>

        <div class="social-media-area">

        <a href="https://www.linkedin.com/in/rashi-ghosh-a39ab6171/">
        <FontAwesomeIcon
                color={props.theme.accent}
                icon={faLinkedin} 
                size='lg'
                className="social-media"
              />
        </a>

        <a href="https://www.facebook.com/rashi.x.gh">
        <FontAwesomeIcon
                color={props.theme.accent}
                icon={faFacebookSquare} 
                size='lg'
                className="social-media"
              />
        </a>

        <a href="https://www.instagram.com/oh_my_ghosh_/?hl=en">
        <FontAwesomeIcon
                color={props.theme.accent}
                icon={faInstagramSquare} 
                size='lg'
                className="social-media"
              />
        </a>

        </div>

        

      </div>
    )
  }

  const ContactPage = withTheme(Contact);
  export default ContactPage;
