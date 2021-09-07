import React from 'react'
import '../css/about.css';
import '../css/master.css';
import { withTheme } from 'styled-components'
import {ReactComponent as Diamond } from '../css/diamond.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt} from '@fortawesome/free-brands-svg-icons';
import { animateScroll as scroll } from 'react-scroll'

const Projects = (props) => {
    return (
      <div className="section-container">
        <div className="diamond-header">
          <Diamond className="diamond2"></Diamond>
          <Diamond className="diamond2"></Diamond>
          <Diamond className="diamond2"></Diamond>
        </div>
        <h2>projects</h2>
        <hr />
        <div className="center">
          <p>check out my github for random projects i've done</p>
          <a href="https://github.com/rghosh96" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              color={props.theme.accent}
              icon={faGithubAlt} 
              size='2x'
            />
          </a>

          <br></br>

          <p>also, check out my 
            <a href="https://marketplace.visualstudio.com/publishers/Shira" target="_blank" rel="noopener noreferrer" style={{ color: props.theme.accent }}>vs code themes</a> (:</p>
        </div>
        <div className="to-top" onClick={() => scroll.scrollToTop()}><Diamond className="diamond-top"/>
        <div className="diamond-top-text">top</div></div>
      </div>
    )
  }

  const ProjectsPage = withTheme(Projects);
  export default ProjectsPage;
