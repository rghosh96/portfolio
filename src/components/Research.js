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
                <p>I'm a 2nd year 
                <a class="links" href="https://en.wikipedia.org/wiki/Human-centered_computing" target="_blank" rel="noopener noreferrer" style={{ color: props.theme.accent }}> Human-Centered Computing</a> phD student at the 
                University of Florida in the
                <a class="links" href="https://www.cise.ufl.edu/" target="_blank" rel="noopener noreferrer" style={{ color: props.theme.accent }}> Computer & Information Science & Engineering </a> 
                Department. I'm part of the 
                <a class="links" href="https://verg.cise.ufl.edu" target="_blank" rel="noopener noreferrer" style={{ color: props.theme.accent }}> Virtual Experiences Research Group (VERG)</a> Lab.
                </p>

<br/>
            <h3>research interests:</h3>
            <p>Healthcare, Addressing barriers/gaps with tech, Empowering marginalized communities with tech, Gender in virtual humans
            </p>
            <br/>
            <h3>current project(s):</h3>
            <p>♡ Colorectal Cancer Project to promote CRC screening among racial/ethnic minority & rural patients - 
            <a class="links" href="https://jou.ufl.edu/alex" target="_blank" rel="noopener noreferrer" style={{ color: props.theme.accent }}> Meet ALEX</a>
            </p>
            <p>♡ Clinical Trials Project to educate on clinical trials & provide relevant, tailored clinical trial information</p>
            <br/>
            <h3>publications:</h3>
            <p>I'm still early in the journey, but you can visit my Google Scholar page
            <a class="links" href="https://scholar.google.com/citations?user=w2AnUOcAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" style={{ color: props.theme.accent }}> here </a>
                 :)
            </p>
                </div>
                </div>
        </div>
    )
}

const ResearchPage = withTheme(Research);
export default ResearchPage;
