import React from 'react'
import '../css/about.css';
import '../css/master.css';
import { withTheme } from 'styled-components'
import {ReactComponent as Diamond } from '../css/diamond.svg'

const Resume = (props) => {
    return (
      <div className="about-container" >
        <div className="diamond-header">
          <Diamond className="diamond2"></Diamond>
          <Diamond className="diamond2"></Diamond>
          <Diamond className="diamond2"></Diamond>
        </div>
        <h2>resume</h2>
      </div>
    )
  }

  const ResumePage = withTheme(Resume);
  export default ResumePage;
