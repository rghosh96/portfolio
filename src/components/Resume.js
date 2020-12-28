import React from 'react'
import '../css/about.css';
import '../css/master.css';
import { withTheme } from 'styled-components'
import {ReactComponent as Diamond } from '../css/diamond.svg'
import ResumePDF from '../assets/Resume_Dec2020.pdf';


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
        <div className="info"><h3>education: &nbsp; </h3> <p>university of arkansas, fayetteville, ar</p></div>
        <div className="info"><h3>major: &nbsp; </h3> <p>computer science, bachelor of science</p></div>
        <div className="info"><h3>minor: &nbsp; </h3> <p>mathematics</p></div>
        <div className="info"><h3>gpa: &nbsp; </h3> <p>3.805 (4.0 scale)</p></div>
        <div className="info"><h3>years: &nbsp; </h3> <p>may 2015 - dec 2020</p></div>
        <h3>programming languages:</h3>
        <ul>
          <li>C++</li>
          <li>JavaScript</li>
          <li>Java</li>
          <li>Python</li>
          <li>SQL</li>
        </ul>

        <h3>experience with..</h3>
        <ul>
          <li>React/React Native</li>
          <li>Android Studio</li>
          <li>Google Firebase/Firestore</li>
          <li>Heroku</li>
          <li>R</li>
        </ul>

        <h3>web development...</h3>
        <ul>
          <li>HTML</li>
          <li>CSS/SCSS</li>
          <li>Bootstrap</li>
          <li>Responsive Web Design</li>
        </ul>

        <hr />

        <div className="center">
        <h3>work experience:</h3>
        <h4>software engineer intern</h4>
        <h5>cerner corporation, kcmo</h5>
        <p>Population Health Division | Care Management</p>

        <h4>teaching assistant</h4>
        <h5>university of arkansas, fayetteville, ar</h5>
        <p>Programming Foundations I & II</p>
        </div>
        
      </div>
    )
  }

  const ResumePage = withTheme(Resume);
  export default ResumePage;
