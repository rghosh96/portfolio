import React from 'react'
import '../css/about.css';
import '../css/master.css';
import { withTheme } from 'styled-components'
import {ReactComponent as Diamond } from '../css/diamond.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt} from '@fortawesome/free-brands-svg-icons';
import { Button } from 'react-bootstrap'

const Projects = (props) => {
    return (
      <div className="home-section">
        <div className="diamond-header">
          <Diamond className="diamond2"></Diamond>
          <Diamond className="diamond2"></Diamond>
          <Diamond className="diamond2"></Diamond>
        </div>
        <h2>projects</h2>
        <br/>
        <div className="projects-section">
          <div style={{textAlign: 'center'}}>
            <p>going to update this soon!!!</p>
          <p>in the meantime, check out my github for random projects i've done</p>
          <a href="https://github.com/rghosh96" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              color={props.theme.accent}
              icon={faGithubAlt} 
              size='2x'
            />
          </a>

          <br></br>

          <p>also, check out my vscode themes! or feel free to suggest one for me (:</p>
          <Button 
            variant="generic"
            href="https://marketplace.visualstudio.com/publishers/Shira" 
            target="_blank"
             rel="noopener noreferrer">
            my vscode themes</Button>
        </div>
        </div>
      </div>
    )
  }

  const ProjectsPage = withTheme(Projects);
  export default ProjectsPage;
