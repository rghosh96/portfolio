import React, { useRef, useEffect, useState } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import '../css/about.css';
import '../css/master.css';
import { withTheme } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faPaperPlane, faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import Button from 'react-bootstrap/Button';
import { ReactComponent as Diamond } from '../css/diamond.svg'
import AboutSection from './About';
import ResearchPage from './Research';
import ProjectsPage from './Projects';
import ContactPage from './Contact';
import Spline from '@splinetool/react-spline';

const ParallaxTest = (props) => {
  // for theming
  // const theme = props.theme.mode

  // showing nav/showing dot indicator for sections
  const [showNav, setShowNav] = useState(false);
  const [about, setAbout] = useState(false);
  const [projects, setProjects] = useState(false);
  const [research, setResearch] = useState(false);
  const [contact, setContact] = useState(false);
  const [splineLoaded, setSplineLoaded] = useState(false);

  console.log("THEME",props.theme.mode)

  const directionalLight1 = useRef();
  const directionalLight2 = useRef();
  const window = useRef();
  const wall = useRef();
  const floor = useRef();

  function lightsOn() {
    console.log("THEME",props.theme.mode)
    console.log("LIGHTS ON FOR DARK MODE!")
    directionalLight1.current.emitEvent('mouseHover');
    directionalLight2.current.emitEvent('mouseHover');
    window.current.emitEvent('mouseHover');
    wall.current.emitEvent('mouseHover');
    floor.current.emitEvent('mouseHover');
  }

    function lightsOff() {
    console.log("THEME",props.theme.mode)
    console.log("LIGHTS OFF FOR LIGHT MODE!")
    directionalLight1.current.emitEvent('mouseUp');
    directionalLight2.current.emitEvent('mouseUp');
    window.current.emitEvent('mouseUp');
    wall.current.emitEvent('mouseUp');
    floor.current.emitEvent('mouseUp');
  }

  function onLoad(spline) {
    const obj1 = spline.findObjectById('1e71ab32-7840-4c4b-81c2-b119bc75f78c');
    const obj2 = spline.findObjectById('830a2708-8ed9-49cf-a68e-085299899103');
    const obj3 = spline.findObjectById('9f1a544b-e511-4a36-ba3e-0920c00190f6');
    const obj4 = spline.findObjectById('f1d72470-6e3a-45a0-8b74-58f65fff54e6');
    const obj5 = spline.findObjectById('54f96a7b-4656-4434-b76d-299341b47a86');
    // save it in a ref for later use
    directionalLight1.current = obj1;
    directionalLight2.current = obj2;
    window.current = obj3;
    wall.current = obj4;
    floor.current = obj5;
    setSplineLoaded(true); // ✅ mark as loaded
  }


  // vector image base URL for parallax
 const url = (name, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`;

  // parallax things
  const parallax = useRef()
  useEffect(() => {
   // 1) target the actual scroll container (not "window") because your div is scrollable
    const container = document.querySelector('.parallax-class')
    if (!container) {
      console.log("No container found - is the ref attached?");
      return;
    }

    // 2) get the real window associated with the document (safe with Spline)
    const realWindow = document?.defaultView || window;

    const handleScroll = () => {

      // use the container's scroll position
      const scrollPos = parallax.current.current;
      // use the browser window height via realWindow
      const windowHeight = (realWindow?.innerHeight ?? window.innerHeight) / 2;

      setShowNav(scrollPos > windowHeight);
    };

    // attach the listener to the container (not window)
    container.addEventListener("scroll", handleScroll);

    // run once to set initial state (optional)
    handleScroll();

    return () => container.removeEventListener("scroll", handleScroll);
  }, [])
  

    useEffect(() => {
      if (!splineLoaded) return; // 🚫 skip if spline not ready

      console.log("Theme changed!", props.theme.mode);
      // 👇 Do something whenever the theme changes
      if (props.theme.mode === "dark") {
        lightsOn();
      } else {
        lightsOff();
      }
    }, [props.theme.mode, splineLoaded]); // <-- dependency array watches for changes

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
      case "research":
        parallax.current.scrollTo(2)
        setProjects(false);
        setAbout(false);
        setResearch(true);
        setContact(false);
        break;
      case "contact":
        parallax.current.scrollTo(3)
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
    <div className="parallax">
      <motion.div animate={{opacity: showNav? 1 : 0}} initial={{opacity: 0}}>

      <div className="navigation">
        <Link to="sectionAbout" className="navItem" smooth={true} duration={1000} onClick={() => linkClicked("about")}>
          <FontAwesomeIcon
            color={props.theme.accent}
            icon={faUser}
          />
          <p className="navLink">About</p>
          {/* {about ? <div class="dot"/> : <div/>} */}
        </Link>
{/* 
        <Link className="navItem" to="sectionProjects" smooth={true} duration={1000} onClick={() => linkClicked("projects")}>
          <FontAwesomeIcon
              color={props.theme.accent}
              icon={faCode}
              size='lg'
            />
          <p className="navLink">Projects</p>
          {projects ? <div class="dot"/> : <div/>}
        </Link> */}

        <Link className="navItem" to="sectionResearch" smooth={true} duration={1000} onClick={() => linkClicked("research")}>
          <FontAwesomeIcon
              color={props.theme.accent}
              icon={faBookOpen}
            />
          <p className="navLink">Research</p>
          {/* {research ? <div class="dot"/> : <div/>} */}
        </Link>

        <Link className="navItem" to="sectionContact" smooth={true} duration={1000} onClick={() => linkClicked("contact")}>
          <FontAwesomeIcon
              color={props.theme.accent}
              icon={faPaperPlane}
            />
          <p className="navLink">Connect</p>
          {/* {contact ? <div class="dot"/> : <div/>} */}
        </Link>
      </div>
    </motion.div>

    <Parallax ref={parallax} pages={4} enabled={true} className="parallax-class">
      <ParallaxLayer offset={0} speed={1}  />
      <ParallaxLayer offset={1} speed={1}  />
      <ParallaxLayer offset={2} speed={1}  />
      <ParallaxLayer offset={3} speed={1}  />

      <ParallaxLayer
        offset={0}
        speed={.3}
        factor={5}
        style={{
          backgroundImage: url('stars', true),
          backgroundSize: 'cover',
        }}
      />

      <ParallaxLayer offset={0.1} speed={0.1} style={{ opacity: 0.3 }}>
        <img alt="" src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
        <img alt="" src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
      </ParallaxLayer>

      <ParallaxLayer offset={0.75} speed={0.5} style={{ opacity: 0.1 }}>
        <img alt="" src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
        <img alt="" src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '35%' }} />
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.3 }}>
        <img alt="" src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
        <img alt="" src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
      </ParallaxLayer>

      <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.1 }}>
        <img alt="" src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
        <img alt="" src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
        <img alt="" src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
      </ParallaxLayer>

      <ParallaxLayer offset={2.6} speed={0.1} style={{ opacity: 0.3}}>
        <img alt="" src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
        <img alt="" src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
      </ParallaxLayer>

      <ParallaxLayer offset={3} speed={0.2} style={{ opacity: 0.3 }}>
        <img alt="" src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
        <img alt="" src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
      </ParallaxLayer>

      <ParallaxLayer offset={3.6} speed={-0.1} style={{ opacity: 0.2 }}>
        <img alt="" src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
        <img alt="" src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
        <img alt="" src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
      </ParallaxLayer>

      <ParallaxLayer offset={4} speed={0.2} style={{ opacity: 0.1 }}>
        <img alt="" src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
        <img alt="" src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
      </ParallaxLayer>

      <ParallaxLayer offset={4.75} speed={-0.1} style={{ opacity: 0.3 }}>
        <img alt="" src={url('cloud')} style={{fill: 'white', display: 'block', width: '20%', marginLeft: '60%' }} />
        <img alt="" src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
        <img alt="" src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
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
          <div className="header-area">
            {/* <h1 className="logo">rg</h1> */}

            <div className="title-container">
              <div>
                <span className="title">rashi ghosh</span>
                <p className="rainbow-gradient subtitle">phD student <span className="symbol">♥</span> she/her</p>
              </div>
            </div>
          </div>

          <div className="description-area">
            <p className="rainbow-gradient descriptor">university of florida <br/> virtual experiences research group</p>
            <hr />
            <div className="nav">
              <Link to="sectionAbout" smooth={true} duration={1000} onClick={() => linkClicked("about")}>
              <Button variant="link">
                <FontAwesomeIcon
                  color={props.theme.accent}
                  icon={faUser}
                  size='lg'
                />
                <p class="button-label">about</p>
              </Button></Link>

              {/* <Link to="sectionProjects" smooth={true} duration={1000} onClick={() => linkClicked("projects")}>
              <Button variant="link">
                <FontAwesomeIcon
                  color={props.theme.accent}
                  icon={faCode}
                  size='lg'
                />
                <p class="button-label">projects</p>
              </Button></Link> */}

              <Link to="sectionResearch" smooth={true} duration={1000} onClick={() => linkClicked("research")}>
              <Button variant="link">
                <FontAwesomeIcon
                  color={props.theme.accent}
                  icon={faBookOpen}
                  size='lg'
                />
                <p class="button-label">research</p>
              </Button></Link>

              <Link to="sectionContact" smooth={true} duration={1000} onClick={() => linkClicked("contact")}>
              <Button variant="link">
                <FontAwesomeIcon
                  color={props.theme.accent}
                  icon={faPaperPlane}
                  size='lg'
                />
                <p class="button-label">connect</p>
              </Button></Link>
            </div>
          </div>
          <Spline className="spline" scene="https://prod.spline.design/ZpPY55gKszQShlDm/scene.splinecode" onLoad={onLoad} />
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
{/* 
        <ParallaxLayer
          offset={2}
          speed={0.1}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <ProjectsPage/>
        </ParallaxLayer> */}

        <ParallaxLayer
          offset={2}
          speed={0.1}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ResearchPage/>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
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
          <div className="to-top" onClick={() => parallax.current.scrollTo(0)}>top⤴</div>
      </motion.div>
    </div>
  )
}

const ParallaxPage = withTheme(ParallaxTest);
export default ParallaxPage;