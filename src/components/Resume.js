import React from 'react'
import '../css/about.css';
import '../css/master.css';
import { withTheme } from 'styled-components'

const Resume = (props) => {
    return (
      <div className="about-container">
        <h1>resume</h1>
        <p>hello</p>
      </div>
    )
  }

  const ResumePage = withTheme(Resume);
  export default ResumePage;
