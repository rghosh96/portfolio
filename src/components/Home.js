import React from 'react'
import '../css/home.css';
import '../css/master.css';
import Button from 'react-bootstrap/Button'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faFileAlt, faCode, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { withTheme } from 'styled-components'
import {ReactComponent as Diamond } from '../css/diamond.svg'

const Home = (props) => {
    return (
      <div className="home-container">
        <div className="home">
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
          <p className="subtitle">computer scientist | software engineer | developer</p>
          <hr />
          <div className="nav">
            <Button variant="link" >
              <FontAwesomeIcon
                color={props.theme.accent}
                icon={faUserCircle} 
                size='2x'
              />
            </Button>
            <Button variant="link"  >
            <FontAwesomeIcon
                color={props.theme.accent}
                icon={faFileAlt} 
                size='2x'
              />
            </Button>
            <Button variant="link"  >
            <FontAwesomeIcon
                color={props.theme.accent}
                icon={faCode} 
                size='2x'
              />
            </Button>
            <Button variant="link"  >
            <FontAwesomeIcon
                color={props.theme.accent}
                icon={faEnvelope} 
                size='2x'
              />
            </Button>
          </div>
        </div>
      </div>
    )
  }

  const HomePage = withTheme(Home);
  export default HomePage;
