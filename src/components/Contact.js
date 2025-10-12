import React from 'react'
import '../css/about.css';
import '../css/master.css';
import '../css/contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { withTheme } from 'styled-components'
import {ReactComponent as Diamond } from '../css/diamond.svg'

const Contact = (props) => {

    return (
      <div className="home-section">
        <h2>connect</h2>
        <div className="contact-text">
          <p>Want to connect? Please reach out to me using one of the methods below!</p>
        </div>
        <br/>      
        <div className="contact-row">
          <FontAwesomeIcon
                color={props.theme.accent}
                icon={faEnvelope} 
                size='lg'
                className="social-media"
              />
          <p>rashighosh@ufl.edu</p>
        </div>
        <div className="contact-row">
          <FontAwesomeIcon
                color={props.theme.accent}
                icon={faLinkedin} 
                size='lg'
                className="social-media"
              />
          <p>LinkedIn</p>
        </div>
       
        

      </div>
    )
  }

  const ContactPage = withTheme(Contact);
  export default ContactPage;
