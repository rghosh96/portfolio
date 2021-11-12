import React from 'react'
import '../css/about.css';
import '../css/master.css';
import { animateScroll as scroll } from 'react-scroll'
import { withTheme } from 'styled-components'
import { ReactComponent as Diamond } from '../css/diamond.svg'
import uf from '../assets/uf.jpg'


const Research = (props) => {
    return (
        <div className="home-section" >
            <div className="diamond-header">
                <Diamond className="diamond2"></Diamond>
                <Diamond className="diamond2"></Diamond>
                <Diamond className="diamond2"></Diamond>
            </div>
            <h2>research</h2>
            <br/>
            <div className="research-section">
            <div className="image-container">
        <img className="profile-image" src={uf} alt="loading..." />
      </div>
                <div>
                <p>i'm a 1st year 
                <a class="links" href="https://en.wikipedia.org/wiki/Human-centered_computing" target="_blank" rel="noopener noreferrer" style={{ color: props.theme.accent }}> human-centered-computing</a> phD student at the 
                university of florida in the
                <a class="links" href="https://www.cise.ufl.edu/" target="_blank" rel="noopener noreferrer" style={{ color: props.theme.accent }}> computer & information science & engineering </a> 
                department. i'm part of the 
                <a class="links" href="https://verg.cise.ufl.edu" target="_blank" rel="noopener noreferrer" style={{ color: props.theme.accent }}> Virtual Experiences Research Group (VERG)</a> lab.
                </p>

<br/>
            <h3>research interests:</h3>
            <p>my primary motivations are mental health and preventative healthcare initiatives & how we can leverage virtual human 
                technology to address gaps & barriers
            </p>
            
            <h3>current project(s):</h3>
            <a class="links" href="https://jou.ufl.edu/alex" target="_blank" rel="noopener noreferrer" style={{ color: props.theme.accent }}> Meet ALEX</a>
            <p>(colorectal cancer project, or CRC)</p>
        
            <h3>publications:</h3>
            <p>stay tuned! someday... (,:</p>
                </div>
                </div>
        </div>
    )
}

const ResearchPage = withTheme(Research);
export default ResearchPage;
