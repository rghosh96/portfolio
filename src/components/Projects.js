import React from 'react'
import '../css/about.css';
import '../css/master.css';
import { withTheme } from 'styled-components'

const Projects = (props) => {
    return (
      <div className="about-container">
        <h1>projects</h1>
        <p>hello</p>
      </div>
    )
  }

  const ProjectsPage = withTheme(Projects);
  export default ProjectsPage;
