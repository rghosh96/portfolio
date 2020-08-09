import React, {useState, useEffect, createRef} from 'react';
import '../css/home.css';
import Accordion from './Accordian.js'
import pic from './flowers.png';
import fb from '../images/fb.png'
import ig from '../images/ig.png'
import lin from '../images/in.png'
import {Col, Row, Button, Form, InputGroup} from 'react-bootstrap'
import { Formik } from 'formik';
import * as yup from 'yup'; // for everything
 

export default function Home(props) {
  
    return (
      
      <div className="home animate__animated animate__zoomIn">
        <img className="titlePic animate__animated  animate__pulse animate__delay-1s" src={pic} alt="Flowers in Chania"/>
        <h1> rashi ghosh</h1>
        <hr></hr>
        <div className="embed">
        <div className="menu">
        
          
          <p className="subtitle">an intense blend of excitement for computer science and a passion for healthcare. strong notes of an appreciation
            for painting and graphic design, and subtle (yet obvious) hints of a love for the outdoors and a soft aesthetic. 
          </p>

          <Accordion title="info">
        <span className="accordion-text">
          <span className="info">
            <span className="label">origin</span> 
            <span className="description">queens, ny</span>
            <span className="label">region</span> 
            <span className="description">arkansas</span>
            <span className="label">age</span> 
            <span className="description">23 (oct 1, 1996)</span>
            <span className="label">story</span> 
          <p>although born in queens, ny, rashi spent most of her life in arkansas. she grew up and graduated high school from harrison,
          and pursued undergrad in fayetteville (university of arkansas). she entered as a biology pre-med student, picking up a religious studies minor
          her second year after being inspired in an honors humanities course. however, going into her senior year, she made the unanticipated switch to
          computer science. her motivation? to revolutionize medicine via a different angle, and to educate and inspire the next generation of
          the digital world</p>
          </span>
           </span>
      </Accordion>
      <Accordion title="ingredients">
        <span className="accordion-text">coming soon! :) </span>
      </Accordion>
      <Accordion title="nutrition facts">
        <span className="accordion-text">coming soon! :) </span>
      </Accordion>
      <Accordion title="contact">
        <span className="accordion-text"> 
        <span className="label"> social media </span>
        <span className="stuff">
          <a href="https://www.linkedin.com/in/rashi-ghosh-a39ab6171/">
            <img className="socialMediaIcons" src={lin} />
          </a>
          <a href="https://www.instagram.com/oh_my_ghosh_/?hl=en">
            <img className="socialMediaIcons" src={ig} />
          </a>
          <a href="https://www.facebook.com/rashi.x.gh">
            <img className="socialMediaIcons" src={fb} />
          </a>
        </span>
        <br></br>
        </span>
      </Accordion>
      </div>
      </div>
        </div>
    )
  }