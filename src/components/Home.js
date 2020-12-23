import React from 'react'
import '../css/home.scss';
import '../css/master.scss';
import Button from 'react-bootstrap/Button'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faFileAlt, faCode, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
    return (
      <div className="container dark">
        <div className="home">
          <h1 className="title">rashi ghosh</h1>
          <p className="subtitle">computer science BA | UI/UX fanatic | graphic design hobbiest</p>
          <hr />
          <div className="nav">
            <Button  >
              <FontAwesomeIcon
                color={"white"}
                icon={faUserCircle} 
                size='2x'
              />
            </Button>
            <Button >
            <FontAwesomeIcon
                color={"white"}
                icon={faFileAlt} 
                size='2x'
              />
            </Button>
            <Button >
            <FontAwesomeIcon
                color={"white"}
                icon={faCode} 
                size='2x'
              />
            </Button>
            <Button >
            <FontAwesomeIcon
                color={"white"}
                icon={faEnvelope} 
                size='2x'
              />
            </Button>
          </div>
        </div>
      </div>
    )
  }
