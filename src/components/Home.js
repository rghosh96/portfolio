import React, {useState, useEffect, createRef} from 'react';
import '../css/home.css';
import Accordion from './Accordian.js'

export default function Home(props) {
    return (
      <div className="home">
        <div className="menu">
          <h1> rashi ghosh</h1>

          <Accordion title="story">
        <span className="accordion-text">aaaaaa</span>
      </Accordion>
      <Accordion title="ingredients">
        <span className="accordion-text">bbbbbb</span>
      </Accordion>
      <Accordion title="nutrition facts">
        <span className="accordion-text">cccccc</span>
      </Accordion>
      <Accordion title="contact">
        <span className="accordion-text">cccccc</span>
      </Accordion>


        </div>
      </div>
    )
  }