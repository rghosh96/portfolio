import React from 'react'
import '../css/about.css';
import '../css/master.css';
import { withTheme } from 'styled-components'
import {ReactComponent as Diamond } from '../css/diamond.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt} from '@fortawesome/free-brands-svg-icons';


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
          <p>check out my github!</p>
          <a href="https://github.com/rghosh96" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              color={props.theme.accent}
              icon={faGithubAlt} 
              size='2x'
            />
          </a>
        </div>
      </div>
    )
  }

  const ProjectsPage = withTheme(Projects);
  export default ProjectsPage;
