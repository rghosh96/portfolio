import React, { useState } from 'react'
import '../css/about.css';
import '../css/master.css';
import '../css/contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { withTheme } from 'styled-components'
import connect from '../assets/connect.png'

const Contact = (props) => {
    const [copied, setCopied] = useState(false);

    const textToCopy = "rashighosh@ufl.edu";

    const handleCopy = async () => {
      try {
        await navigator.clipboard.writeText(textToCopy);
        setCopied(true);
      } catch (err) {
        console.error("Failed to copy: ", err);
      }
    };

    return (
      <div className="home-section">
         <div className="section-heading">
          <FontAwesomeIcon
              color={props.theme.accent}
              icon={faPaperPlane}
              size='lg'
            />
          <h2>connect</h2>
        </div>
        <div className="contact-text">
          <p>Want to connect? Please reach out to me using one of the methods below!</p>
        </div>
        <div className="image-container">
        <img className="profile-image" src={connect} alt="loading..." />
      </div>
        <br/>      
        <div className="contact-row">
          <FontAwesomeIcon
                color={props.theme.accent}
                icon={faEnvelope} 
                size='lg'
                className="social-media"
              />
          <p className="rainbow-gradient" onClick={handleCopy}>{copied ? "Copied!" : "Copy Email to Clipboard"}</p>
        </div>
        <div className="contact-row">
          <FontAwesomeIcon
                color={props.theme.accent}
                icon={faLinkedin} 
                size='lg'
                className="social-media"
              />
          <a href="https://www.linkedin.com/in/rashi-ghosh-a39ab6171/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
       
        

      </div>
    )
  }

  const ContactPage = withTheme(Contact);
  export default ContactPage;
