import React from 'react'
import '../css/about.css';
import '../css/master.css';
import { withTheme } from 'styled-components'
import {ReactComponent as Diamond } from '../css/diamond.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFigma, faGithubAlt, faReact} from '@fortawesome/free-brands-svg-icons';
import { Button } from 'react-bootstrap'
import { Link } from "react-router-dom";
import { faLaptopCode, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

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
            <p>i have a few projects in different areas, different areas, and different softwares.
            </p>

            <br></br>

          <div class="project-types">
            <Link to="/allprojects" >
              <FontAwesomeIcon
                color={props.theme.accent}
                icon={faMobileAlt} 
                size='4x'
              />
            </Link>

            <Link to="/allprojects" >
              <FontAwesomeIcon
                color={props.theme.accent}
                icon={faReact} 
                size='4x'
              />
            </Link>

            <Link to="/allprojects">
              <FontAwesomeIcon
                color={props.theme.accent}
                icon={faLaptopCode} 
                size='4x'
              />
            </Link>

            <Link to="/allprojects" >
              <FontAwesomeIcon
                color={props.theme.accent}
                icon={faFigma} 
                size='4x'
              />
            </Link>

            <Button 
            variant="generic"
            href="/allprojects" 
             rel="noopener noreferrer">
            all projects...</Button>
          </div>
          
          <br></br>
          <br></br>

          <p>you can also go check out my github:</p>
          <a href="https://github.com/rghosh96" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              color={props.theme.accent}
              icon={faGithubAlt} 
              size='2x'
            />
          </a>
          <br></br>
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
