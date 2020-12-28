import React from 'react'
import '../css/about.css';
import '../css/master.css';
import { withTheme } from 'styled-components'
import {ReactComponent as Diamond } from '../css/diamond.svg'

const Contact = (props) => {
    return (
      <div className="section-container">
        <div className="diamond-header">
          <Diamond className="diamond2"></Diamond>
          <Diamond className="diamond2"></Diamond>
          <Diamond className="diamond2"></Diamond>
        </div>
        <h2>contact</h2>
      </div>
    )
  }

  const ContactPage = withTheme(Contact);
  export default ContactPage;
