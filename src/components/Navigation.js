import React from 'react'
import '../css/about.css';
import '../css/master.css';
import { withTheme } from 'styled-components'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faFileAlt, faCode, faEnvelope, faBookOpen, faHome } from '@fortawesome/free-solid-svg-icons'


const Nav = (props) => {
  console.log("LOOKING AT MATCH URL")
  console.log(props.match)
  return (
    <div className="navigation">

      <Link to="/about" className="navItem">
        <FontAwesomeIcon
          color={props.theme.accent}
          icon={faUserCircle}
          size='1x'
        />
        <p className="navLink">About</p>

      </Link>

      <Link className="navItem" to="/projects">
      <FontAwesomeIcon
          color={props.theme.accent}
          icon={faCode}
          size='1x'
        />
      <p className="navLink">Projects</p>

      </Link>

      <Link className="navItem" to="/research">
      <FontAwesomeIcon
          color={props.theme.accent}
          icon={faBookOpen}
          size='1x'
        />
      <p className="navLink">Research</p>

      </Link>

      <Link className="navItem" to="/contact">
      <FontAwesomeIcon
          color={props.theme.accent}
          icon={faEnvelope}
          size='1x'
        />
      <p className="navLink">Contact</p>

      </Link>
    </div>
  )
}

const Navigation = withTheme(Nav);
export default Navigation;