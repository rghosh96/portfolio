import React from 'react'
import '../css/about.css';
import '../css/master.css';
import { withTheme } from 'styled-components'

const Contact = (props) => {
    return (
      <div className="about-container">
        <h2>contact</h2>
        <p>hello</p>
      </div>
    )
  }

  const ContactPage = withTheme(Contact);
  export default ContactPage;
