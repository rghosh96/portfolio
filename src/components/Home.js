import React, {useState, useEffect, createRef} from 'react';
import '../css/home.css';
import Accordion from './Accordian.js'
import pic from './flowers.png';

export default function Home(props) {
    return (
      
      <div className="home">
        <img src={pic} alt="Flowers in Chania"/>
        <h1> rashi ghosh</h1>
        <hr></hr>
        <div className="embed">
        <div className="menu">
        
          
          <p>deep seated fear of failure, broad political understandings, airs on the side of caution, 
            a few complexes, blended Indian culture with American exceptionalist ideas</p>

          <Accordion title="story">
        <span className="accordion-text">coming soon ! :) deep seated fear of failure, broad political understandings, airs on the side of caution, 
            a few complexes, blended Indian culture with American exceptionalist ideas</span>
      </Accordion>
      <Accordion title="ingredients">
        <span className="accordion-text">coming soon! :) deep seated fear of failure, broad political understandings, airs on the side of caution, 
            a few complexes, blended Indian culture with American exceptionalist ideas</span>
      </Accordion>
      <Accordion title="nutrition facts">
        <span className="accordion-text">coming soon! :) deep seated fear of failure, broad political understandings, airs on the side of caution, 
            a few complexes, blended Indian culture with American exceptionalist ideas</span>
      </Accordion>
      <Accordion title="contact">
        <span className="accordion-text">coming soon! :) deep seated fear of failure, broad political understandings, airs on the side of caution, 
            a few complexes, blended Indian culture with American exceptionalist ideas</span>
      </Accordion>
      </div>
      </div>
        </div>
    )
  }