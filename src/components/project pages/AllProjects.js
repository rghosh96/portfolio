import React, { useEffect, useState } from 'react'
import '../../css/about.css';
import '../../css/master.css';
import '../../css/resume.css';
import { withTheme } from 'styled-components'
import { ReactComponent as Diamond } from '../../css/diamond.svg'
import { animateScroll as scroll } from 'react-scroll'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import projectsJson from './projectsJson'
import { Card, Row, Col } from 'react-bootstrap'


const AllProjects = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [showNav, setShowNav] = useState(false);

  console.log(projectsJson)

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
    <div className="resume">  
      <br/>
      <br/>
      <Link to="/portfolio">
      <h8> -rg-</h8></Link>
    <div className="section-container" >
    <motion.div 
    initial={{opacity: 0, scaleX: 0}} 
    animate={{opacity: 1, scaleX: 1}} 
    exit={{opacity: 0, scaleX: 0}} 
    transition={{duration: 1}}>
      <div className="diamond-header">
        <Diamond className="diamond2"></Diamond>
        <Diamond className="diamond2"></Diamond>
        <Diamond className="diamond2"></Diamond>
      </div>
      <h2>all projects</h2>
      <div className="center">
        <h4>Currently a work in progress!</h4>
      </div>
      <hr />

    <Row xs={1} md={2} className="g-4">
      {projectsJson.map((project)=> (
        <Col>
          <Card>
            <Card.Img variant="top" src={project.image}  />
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text>
                {project.description}
              </Card.Text>
            </Card.Body>
            
              <Card.Footer className="text-muted">
              {project.tags.map((tag)=> (
                <p>♡ {tag}</p>
              ))}
              </Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
   


      <motion.div animate={{opacity: showNav? 1 : 0}} initial={{opacity: 0}}>
    <div className="to-top" onClick={() => scroll.scrollToTop()}><Diamond className="diamond-top"/>
        <div className="diamond-top-text">top</div></div>
      </motion.div>
        </motion.div>
    </div>
    
    </div>
  )
}

const AllProjectsPage = withTheme(AllProjects);
export default AllProjectsPage;
