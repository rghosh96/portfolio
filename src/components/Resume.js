import React from 'react'
import '../css/about.css';
import '../css/master.css';
import '../css/resume.css';
import { withTheme } from 'styled-components'
import {ReactComponent as Diamond } from '../css/diamond.svg'
import ResumePDF from '../assets/Resume_Dec2020.pdf';
import { animateScroll as scroll } from 'react-scroll'
import { Col, Container, Row } from 'react-bootstrap';

const Resume = (props) => {
    return (
      <div className="section-container" >
        <div className="diamond-header">
          <Diamond className="diamond2"></Diamond>
          <Diamond className="diamond2"></Diamond>
          <Diamond className="diamond2"></Diamond>
        </div>
        <h2>resume</h2>
        <div className="center">
        <h4>view my "official" resume <span> <a href={ResumePDF} target="_blank" rel="noopener noreferrer" style={{color: props.theme.accent}}>here</a></span></h4>
        </div>
        <hr />
        <div className="info"><h3>undergrad: &nbsp; </h3> <p>university of arkansas, fayetteville, ar</p></div>
        <div className="info"><h3>major: &nbsp; </h3> <p>computer science, bachelor of science</p></div>
        <div className="info"><h3>minor: &nbsp; </h3> <p>mathematics</p></div>
        <div className="info"><h3>gpa: &nbsp; </h3> <p>3.804 (4.0 scale)</p></div>
        <div className="info"><h3>years: &nbsp; </h3> <p>may 2015 - dec 2020</p></div>
        <hr/>
        <h6>programming background</h6>
        <hr />
        <Container>
        <Row>
        <Col xs={6}>
          <h3>programming languages:</h3>
            <ul>
              <li>C++</li>
              <li>JavaScript</li>
              <li>Java</li>
              <li>Python</li>
              <li>SQL</li>
              <li>MIPS Assembly Language</li>
              <li>VHDL</li>
            </ul>
          </Col>

          <Col xs={6}>
          <h3>experience with..</h3>
          <ul>
            <li>React/React Native</li>
            <li>Android Studio</li>
            <li>Google Firebase, Firestore</li>
            <li>Python Flask</li>
            <li>Latex</li>
            <li>Eclipse</li>
            <li>Heroku</li>
            <li>R</li>
          </ul>
          </Col>
        </Row>

        <Row>
        <Col xs={6}>
        <h3>web development:</h3>
        <ul>
          <li>HTML</li>
          <li>CSS/SCSS</li>
          <li>Bootstrap</li>
          <li>Responsive Web Design</li>
        </ul>
        </Col>

        <Col xs={6}>
        <h3>software engineering:</h3>
        <ul>
          <li>Agile SCRUM</li>
          <li>Jira</li>
          <li>Git/Github</li>
        </ul>
        </Col>
        </Row>
        </Container>

        <hr/>
        <h6>relevant courses</h6>
        <hr />

        <Container>
          <Row>
            <Col xs={6} md={4}>
            <h3>programming:</h3>
              <ul>
                <li>programming foundations I & II</li>
                <li>programming paradigms</li>
                <li>database management systems</li>
                <li>mobile programming</li>
                <li>artifical intelligence</li>
              </ul>
            </Col>

            <Col xs={6} md={4}>
            <h3>computer theory:</h3>
              <ul>
                <li>formal languages, automata theory</li>
                <li>algorithms</li>
                <li>(natural) models of computation</li>
              </ul>
            </Col>

            <Col xs={6} md={4}>
            <h3>math:</h3>
              <ul>
                <li>discrete mathematics</li>
                <li>combinatorics</li>
                <li>linear algebra</li>
              </ul>
            </Col>
          </Row>
        
          <Row>
            <Col>
            <h3>software engineering:</h3>
              <ul>
                <li>software engineering</li>
                <li>capstone I & II (senior project)</li>
              </ul>
            </Col>

            <Col>
            <h3>computer engineering:</h3>
              <ul>
                <li>digital design</li>
                <li>operating systems</li>
                <li>computer organization</li>
                <li>computer architecture</li>
              </ul>
            </Col>
          </Row>
        </Container>
        

        <div className="center">
          <hr />
        <h6>work experience</h6>
        <hr />
        <h4>software engineer intern</h4>
        <h5>cerner corporation, kcmo</h5>
        <p>Population Health Division | Care Management</p>
        <ul>
        <li>Develop a holistic, preventative healthcare solution for 
          healthcare managers who keep track of patient wellness and post-care routines</li>
        <li>Heavy utilization of React/JavaScript & in-house Cerner Command Language (SQL-based scripting language)</li>
        </ul>


        <h4>teaching assistant</h4>
        <h5>university of arkansas, fayetteville, ar</h5>
        <p>Programming Foundations I & II</p>
        <ul>
        <li>Teach a supplementary programming lab in C++ and grade labs, quizzes, and homework assignments</li>
        <li>Topics include: object oriented programming, data structures, arrays, pointers, linked lists, binary trees, stacks/queues, 
          recursion, and sorting algorithm time complexities</li>
        <li>Serve as a resource and tutor for students in gaining a deeper understanding of C++</li>
        </ul>

        <hr />
        <h6>leadership</h6>
        <hr />
        <h4>resident assistant</h4>
        <h5>university of arkansas, fayetteville, ar</h5>
        <p>holcombe hall | northwest quad</p>
        <ul>
        <li>Communicate and collaborate with the housing department, dormitory staff, and residents to build a 
          functioning, efficient working group and a warm, positive atmosphere in the building</li>
        <li>Plan programs for audiences ranging between 30 to over 500 people; formulate itemized budgets 
          (ranging from $300 to $2000)</li>
        <li>As head RA, manage other resident assistants, organize meetings, plan their duties, and mediate internal conflicts</li>
        </ul>

        <hr />
        <h6>volunteer</h6>
        <hr />
        <h4>northwest arkansas givecamp</h4>
        <h5>fayetteville, ar</h5>
        <ul>
        <li>Non profit for non profits around Northwest AR, grouping software engineers and project managers to help 
          redesign and develop websites for local non profits </li>
        <li>Worked closely with a small team for the Essentials Outreach nonprofit (who provides free hygiene products low 
          income people) to redesign their website for improved user experience</li>
        </ul>


        </div>
        
        <div className="to-top" onClick={() => scroll.scrollToTop()}><Diamond className="diamond-top"/>
        <div className="diamond-top-text">top</div></div>
      </div>
    )
  }

  const ResumePage = withTheme(Resume);
  export default ResumePage;
