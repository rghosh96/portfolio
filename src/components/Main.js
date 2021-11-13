import React, { useState, useEffect } from 'react'
import '../css/home.css';
import '../css/master.css';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faCode, faEnvelope, faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { withTheme } from 'styled-components'
import { ReactComponent as Diamond } from '../css/diamond.svg'
import AboutSection from './About';
import ProjectsPage from './Projects';
import ResearchPage from './Research';
import ContactPage from './Contact';
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import { animateScroll as scroll } from 'react-scroll'


const Main = (props) => {
    const [showNav, setShowNav] = useState(false);
  const [about, setAbout] = useState(false);
  const [projects, setProjects] = useState(false);
  const [research, setResearch] = useState(false);
  const [contact, setContact] = useState(false);

  useEffect(() => {
    function handleScroll() {
      console.log("scrolling")
      const yPos = window.scrollY;
      const windowHeight = window.innerHeight - (window.innerHeight/2);
      console.log(windowHeight)
      console.log(yPos)
      yPos > windowHeight ? setShowNav(true) : setShowNav(false)
    }
    window.addEventListener('scroll', handleScroll, false);
    return () => {
      window.removeEventListener('scroll', handleScroll, false);
    }
  })

  const linkClicked = (link) => {
    switch (link) {
      case "about":
        setAbout(true);
        setProjects(false);
        setResearch(false);
        setContact(false);
        break;
      case "projects":
        setProjects(true);
        setAbout(false);
        setResearch(false);
        setContact(false);
        break;
      case "research":
        setContact(false)
        setProjects(false);
        setResearch(true);
        setAbout(false);
        break;
      case "contact":
        setContact(true)
        setProjects(false);
        setResearch(false);
        setAbout(false);
        break;
      default:
        break;
    }
  }
    return (
        <div className="main">
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
        <p className="subtitle">phD student | developer</p>
        <hr />
        <div className="nav">
          <Link to="sectionAbout" smooth={true} duration={1000} onClick={() => linkClicked("about")}>
            <Button variant="link">
              <FontAwesomeIcon
                color={props.theme.accent}
                icon={faUserCircle}
                size='2x'
              />
              <p class="button-label">about</p>
            </Button></Link>

            <Link to="sectionProjects" smooth={true} duration={1000} onClick={() => linkClicked("projects")}>
            <Button variant="link">
              <FontAwesomeIcon
                color={props.theme.accent}
                icon={faCode}
                size='2x'
              />
              <p class="button-label">projects</p>
            </Button></Link>

            <Link to="sectionResearch" smooth={true} duration={1000} onClick={() => linkClicked("research")}>
            <Button variant="link">
              <FontAwesomeIcon
                color={props.theme.accent}
                icon={faBookOpen}
                size='2x'
              />
              <p class="button-label">research</p>
            </Button></Link>

          

          <Link to="sectionContact" smooth={true} duration={1000} onClick={() => linkClicked("contact")}>
            <Button variant="link">
              <FontAwesomeIcon
                color={props.theme.accent}
                icon={faEnvelope}
                size='2x'
              />
              <p class="button-label">contact</p>
            </Button></Link>
        </div></div>
    )
}

const MainPage = withTheme(Main);
export default MainPage;
