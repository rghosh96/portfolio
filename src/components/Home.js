import React, {useState, useEffect, createRef} from 'react';
import '../css/home.css';
import Accordion from './Accordian.js'
import pic from './pictur.png';

export default function Home(props) {
    return (
      <div className="home">
        <img src={pic} alt="Flowers in Chania"/>
        <div className="menu">
          <h1> rashi ghosh</h1>
          <p>deep seated fear of failure, broad political understandings, airs on the side of caution, 
            a few complexes, blended Indian culture with American exceptionalist ideas</p>

          <Accordion title="story">
        <span className="accordion-text">coming soon ! :)</span>
      </Accordion>
      <Accordion title="ingredients">
        <span className="accordion-text">coming soon! :)</span>
      </Accordion>
      <Accordion title="nutrition facts">
        <span className="accordion-text">coming soon! :)</span>
      </Accordion>
      <Accordion title="contact">
        <span className="accordion-text">coming soon! :)</span>
      </Accordion>


        </div>
      </div>
    )
  }