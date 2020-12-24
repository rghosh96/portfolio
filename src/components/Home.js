import React from 'react'
import '../css/home.css';
import '../css/master.css';
import Button from 'react-bootstrap/Button'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faFileAlt, faCode, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { withTheme } from 'styled-components'

const Home = (props) => {
    return (
      <div className="home-container">
        <div className="home">
          <h1 className="logo">rg</h1>
          <h1 className="title">rashi ghosh</h1>
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
