import React, { useRef, useEffect, useState } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import '../css/about.css';
import '../css/master.css';
import { withTheme } from 'styled-components'
import { faUserCircle, faCode, faEnvelope, faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

import MainPage from './Main';
import AboutSection from './About';
import ResearchPage from './Research';
import ProjectsPage from './Projects';
import ContactPage from './Contact';

const ParallaxTest = (props) => {
  const parallax = useRef()
  const [showNav, setShowNav] = useState(false);
  const url = (name: string, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`
  console.log(url('stars', true))

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

  return (
    <div class="parallax">
        <motion.div animate={{opacity: showNav? 1 : 0}} initial={{opacity: 0}}>
      <div className="navigation">

<Link to="sectionAbout" className="navItem" smooth={true} duration={1000} >
  <FontAwesomeIcon
    color={props.theme.accent}
    icon={faUserCircle}
    size='1x'
  />
  <p className="navLink">About</p>


</Link>

<Link className="navItem" to="sectionProjects" smooth={true} duration={1000} >
<FontAwesomeIcon
    color={props.theme.accent}
    icon={faCode}
    size='1x'
  />
<p className="navLink">Projects</p>


</Link>

<Link className="navItem" to="sectionResearch" smooth={true} duration={1000} >
<FontAwesomeIcon
    color={props.theme.accent}
    icon={faBookOpen}
    size='1x'
  />
<p className="navLink">Research</p>


</Link>

<Link className="navItem" to="sectionContact" smooth={true} duration={1000} >
<FontAwesomeIcon
    color={props.theme.accent}
    icon={faEnvelope}
    size='1x'
  />
<p className="navLink">Contact</p>


</Link>

</div>
        </motion.div>
      <Parallax ref={parallax} pages={5}>
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

        <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
          <img src={url('satellite4')} style={{ width: '15%', marginLeft: '70%' }} />
        </ParallaxLayer>

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

        <ParallaxLayer
          offset={2.5}
          speed={-0.4}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}>
          <img src={url('earth')} style={{ width: '60%' }} />
        </ParallaxLayer>

        {/* <ParallaxLayer
          offset={2}
          speed={-0.3}
          style={{
            backgroundSize: '80%',
            backgroundPosition: 'center',
            backgroundImage: url('clients', true),
          }}
        /> */}

        <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <MainPage/>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(2)}
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
          }}
          onClick={() => parallax.current.scrollTo(3)}>
          <ResearchPage/>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={0.1}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={() => parallax.current.scrollTo(4)}>
          <ProjectsPage/>
        </ParallaxLayer>

        <ParallaxLayer
          offset={4}
          speed={-0}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={() => parallax.current.scrollTo(0)}>
          <ContactPage/>
        </ParallaxLayer>
      </Parallax>
      </div>
  )
}

const ParallaxPage = withTheme(ParallaxTest);
export default ParallaxPage;