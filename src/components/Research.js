import React from 'react'
import '../css/about.css';
import '../css/master.css';
import { animateScroll as scroll } from 'react-scroll'
import { withTheme } from 'styled-components'
import { ReactComponent as Diamond } from '../css/diamond.svg'

const Research = (props) => {
    return (
        <div className="section-container" >
            <div className="diamond-header">
                <Diamond className="diamond2"></Diamond>
                <Diamond className="diamond2"></Diamond>
                <Diamond className="diamond2"></Diamond>
            </div>
            <h2>research</h2>
            <hr />
            <div style={{ textAlign: 'center' }}>
                <p>i am currently a 1st year 
                <a class="links" href="https://en.wikipedia.org/wiki/Human-centered_computing" target="_blank" rel="noopener noreferrer" style={{ color: props.theme.accent }}> human-centered-computing</a> phD student at the 
                university of florida in the
                <a class="links" href="https://www.cise.ufl.edu/" target="_blank" rel="noopener noreferrer" style={{ color: props.theme.accent }}> computer & information science & engineering </a> 
                department. i'm a member of the 
                <a class="links" href="https://verg.cise.ufl.edu" target="_blank" rel="noopener noreferrer" style={{ color: props.theme.accent }}> Virtual Experiences Research Group (VERG)</a> lab.
                </p>
            </div> 

            <h3>research interests:</h3>
            <p>my primary motivations are mental health and preventative healthcare initiatives. 
                i am interested in exploring the ways virtual humans can be used to advance preventative practices, mental health, healthcare accessibility, 
                and social health & wellbeing</p>
            
            <h3>current project(s):</h3>
            <p>currently, i am working on the 
            <a class="links" href="https://jou.ufl.edu/alex" target="_blank" rel="noopener noreferrer" style={{ color: props.theme.accent }}> Colorectal Cancer (CRC) Project</a>.</p>
        
            <hr />
            <h6>publications</h6>
            <hr />
            <p>stay tuned! someday... (,:</p>
            <div className="to-top" onClick={() => scroll.scrollToTop()}><Diamond className="diamond-top" />
                <div className="diamond-top-text">top</div>
            </div>
        </div>
    )
}

const ResearchPage = withTheme(Research);
export default ResearchPage;
