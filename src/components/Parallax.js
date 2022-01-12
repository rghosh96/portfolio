import React, { useRef, useEffect, useState } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import '../css/about.css';
import '../css/master.css';
import { withTheme } from 'styled-components'
import { faUserCircle, faCode, faEnvelope, faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import Button from 'react-bootstrap/Button';
import { ReactComponent as Diamond } from '../css/diamond.svg'
import AboutSection from './About';
import ResearchPage from './Research';
import ProjectsPage from './Projects';
import ContactPage from './Contact';

const ParallaxTest = (props) => {
  // for theming
  const theme = props.theme.mode

  // showing nav/showing dot indicator for sections
  const [showNav, setShowNav] = useState(false);
  const [about, setAbout] = useState(false);
  const [projects, setProjects] = useState(false);
  const [research, setResearch] = useState(false);
  const [contact, setContact] = useState(false);

  // vector image base URL for parallax
  const url = (name: string, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`
  console.log(url('stars', true))

  // parallax things
  const parallax = useRef()
  const handleScroll = () => {
    if (parallax.current) {
      console.log("IN HANDLE SCROLL")
      console.log(parallax.current.current)
      const windowHeight = window.innerHeight - (window.innerHeight/2);
      parallax.current.current > windowHeight ? setShowNav(true) : setShowNav(false)
    }
  }
  
  useEffect(() => {
    const container = document.querySelector('.parallax-class')
    container.addEventListener('scroll', handleScroll)
    return () => {
      container.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // when sections are navigated to...
  const linkClicked = (link) => {
    switch (link) {
      case "about":
        parallax.current.scrollTo(1)
        setAbout(true);
        setProjects(false);
        setResearch(false);
        setContact(false);
        break;
      case "projects":
        parallax.current.scrollTo(2)
        setProjects(true);
        setAbout(false);
        setResearch(false);
        setContact(false);
        break;
      case "research":
        parallax.current.scrollTo(3)
        setContact(false)
        setProjects(false);
        setResearch(true);
        setAbout(false);
        break;
      case "contact":
        parallax.current.scrollTo(4)
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
    <div class="parallax">
      <motion.div animate={{opacity: showNav? 1 : 0}} initial={{opacity: 0}}>

      <div className="navigation">
        <Link to="sectionAbout" className="navItem" smooth={true} duration={1000} onClick={() => linkClicked("about")}>
          <FontAwesomeIcon
            color={props.theme.accent}
            icon={faUserCircle}
            size='lg'
          />
          <p className="navLink">About</p>
          {about ? <div class="dot"/> : <div/>}
        </Link>

        <Link className="navItem" to="sectionProjects" smooth={true} duration={1000} onClick={() => linkClicked("projects")}>
          <FontAwesomeIcon
              color={props.theme.accent}
              icon={faCode}
              size='lg'
            />
          <p className="navLink">Projects</p>
          {projects ? <div class="dot"/> : <div/>}
        </Link>

        <Link className="navItem" to="sectionResearch" smooth={true} duration={1000} onClick={() => linkClicked("research")}>
          <FontAwesomeIcon
              color={props.theme.accent}
              icon={faBookOpen}
              size='lg'
            />
          <p className="navLink">Research</p>
          {research ? <div class="dot"/> : <div/>}
        </Link>

        <Link className="navItem" to="sectionContact" smooth={true} duration={1000} onClick={() => linkClicked("contact")}>
          <FontAwesomeIcon
              color={props.theme.accent}
              icon={faEnvelope}
              size='lg'
            />
          <p className="navLink">Contact</p>
          {contact ? <div class="dot"/> : <div/>}
        </Link>
      </div>
    </motion.div>

    <Parallax ref={parallax} pages={5} enabled={true} className="parallax-class">
      <ParallaxLayer offset={1} speed={1}  />
      <ParallaxLayer offset={2} speed={1}  />
      <ParallaxLayer offset={3} speed={1}  />
      <ParallaxLayer offset={4} speed={1}  />

      <ParallaxLayer
        offset={0}
        speed={0}
        factor={5}
        style={{
          backgroundImage: url('stars', true),
          backgroundSize: 'cover',
        }}
      />

      <ParallaxLayer
        offset={.5}
        speed={.3}
        factor={5}
        style={{
          backgroundImage: url('stars', true),
          backgroundSize: 'cover',
        }}
      />

      <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
        <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
        <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
      </ParallaxLayer>

      <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
        <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
        <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
        <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
        <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
      </ParallaxLayer>

      <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
        <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
        <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
        <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
      </ParallaxLayer>

      <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
        <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
        <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
      </ParallaxLayer>

      <ParallaxLayer offset={3} speed={0.4} style={{ opacity: 0.6 }}>
        <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
        <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
      </ParallaxLayer>

      <ParallaxLayer offset={3.6} speed={-0.1} style={{ opacity: 0.4 }}>
        <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
        <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
        <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
      </ParallaxLayer>

      <ParallaxLayer offset={4} speed={0.8} style={{ opacity: 0.1 }}>
        <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
        <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
      </ParallaxLayer>

      <ParallaxLayer offset={4.75} speed={-0.1} style={{ opacity: 0.4 }}>
        <img src={url('cloud')} style={{fill: 'white', display: 'block', width: '20%', marginLeft: '60%' }} />
        <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
        <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
      </ParallaxLayer>

      <ParallaxLayer
        offset={0}
        speed={0.1}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
      }}>

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

          <div class="description">
            <p className="subtitle">phD student | developer</p>
            <hr />
          </div>
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
          </div>

        </div>

      </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <AboutSection/>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0.1}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <ProjectsPage/>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={0.1}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ResearchPage/>
        </ParallaxLayer>

        <ParallaxLayer
          offset={4}
          speed={-0}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ContactPage/>
        </ParallaxLayer>
      </Parallax>

      <motion.div animate={{opacity: showNav? 1 : 0}} initial={{opacity: 0}}>
        <div className="to-top" onClick={() => parallax.current.scrollTo(0)}><Diamond className="diamond-top"/>
        <div className="diamond-top-text">top</div></div>
      </motion.div>
    </div>
  )
}

const ParallaxPage = withTheme(ParallaxTest);
export default ParallaxPage;