import React from 'react'
import '../css/home.scss';
import '../css/master.scss';
import Button from 'react-bootstrap/Button'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faFileAlt, faCode, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { withTheme } from 'styled-components'

const Home = (props) => {
  console.log(props)
    return (
      <div className="home-container">
        <div className="home">
          <h1 className="title">rashi ghosh</h1>
          <p className="subtitle">computer science BA | UI/UX fanatic | graphic design hobbiest</p>
          <hr />
          <div className="nav">
            <Button variant="link" >
              <FontAwesomeIcon
                color={props.theme.gold}
                icon={faUserCircle} 
                size='2x'
              />
            </Button>
            <Button variant="link"  >
            <FontAwesomeIcon
                color={props.theme.gold}
                icon={faFileAlt} 
                size='2x'
              />
            </Button>
            <Button variant="link"  >
            <FontAwesomeIcon
                color={props.theme.gold}
                icon={faCode} 
                size='2x'
              />
            </Button>
            <Button variant="link"  >
            <FontAwesomeIcon
                color={props.theme.gold}
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
