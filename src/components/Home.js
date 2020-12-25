import React, { useState } from 'react'
import '../css/home.css';
import '../css/master.css';
import Button from 'react-bootstrap/Button'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faFileAlt, faCode, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { withTheme } from 'styled-components'
import {ReactComponent as Diamond } from '../css/diamond.svg'
import AboutPage from './About';
import ResumePage from './Resume';
import ProjectsPage from './Projects';
import ContactPage from './Contact';
import { motion, AnimatePresence } from "framer-motion"

const Home = (props) => {
  const [about, setAbout] = useState(false);
  const [resume, setResume] = useState(false);
  const [projects, setProjects] = useState(false);
  const [contact, setContact] = useState(false);

  const [show, setShow] = useState(false)

  const linkClicked = (link) => {
    switch(link) {
      case "about":
        setAbout(!about);
        setResume(false);
        setProjects(false);
        setContact(false);
        break;
      case "resume":
        setResume(!resume)
        setAbout(false);
        setProjects(false);
        setContact(false);
        break;
      case "projects":
        setProjects(!projects);
        setResume(false);
        setAbout(false);
        setContact(false);
        break;
      case "contact":
        setContact(!contact)
        setResume(false);
        setProjects(false);
        setAbout(false);
        break;
      default:
        break;
    }
    
  }



    return (
      <div className="home-container">  
        <div className="home">
          <h1 className="logo">rg</h1>
          <div className="title-container">
            <div>
            <span className="title">r</span>
            <span>
              <Diamond className="diamond"></Diamond>
              <Diamond className="diamond"></Diamond>
              <Diamond className="diamond"></Diamond>
            </span>
            <span className="title">s</span>
            <span className="title">h</span>
            <span className="title">i &nbsp;</span>
            </div>
            <div>
            <span className="title">g</span>
            <span className="title">h</span>
            <span className="title">o</span>
            <span className="title">s</span>
            <span className="title">h</span>
            </div>
          </div>
          <p className="subtitle">computer scientist | software engineer | developer</p>
          <hr />
          <div className="nav">
            <Button variant={about ? "primary" : "link"} onClick={() => linkClicked("about")}>
              <FontAwesomeIcon
                color={props.theme.accent}
                icon={faUserCircle} 
                size='2x'
              />
            </Button>
            <Button variant={resume ? "primary" : "link"}  onClick={() => linkClicked("resume")}>
            <FontAwesomeIcon
                color={props.theme.accent}
                icon={faFileAlt} 
                size='2x'
              />
            </Button>
            <Button variant={projects ? "primary" : "link"}  onClick={() => linkClicked("projects")}>
            <FontAwesomeIcon
                color={props.theme.accent}
                icon={faCode} 
                size='2x'
              />
            </Button>
            <Button variant={contact ? "primary" : "link"}  onClick={() => linkClicked("contact")}>
            <FontAwesomeIcon
                color={props.theme.accent}
                icon={faEnvelope} 
                size='2x'
              />
            </Button>
          </div>

          {about ? <AboutPage /> : null }
          {resume ? <ResumePage /> : null }
          {projects ? <ProjectsPage /> : null }
          {contact ? <ContactPage /> : null }
        </div>
      </div>
    )
  }

  const HomePage = withTheme(Home);
  export default HomePage;
