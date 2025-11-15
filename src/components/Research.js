import React from 'react'
import '../css/about.css';
import '../css/master.css';
import { withTheme } from 'styled-components'
import uf from '../assets/research.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'

const Research = (props) => {
    return (
        <div className="home-section" >
            <div className="section-heading">
            <FontAwesomeIcon
                color={props.theme.accent}
                icon={faBookOpen}
                size='lg'
                />
            <h2>research</h2>
            </div>
            <br/>
            <div className="research-section">
                <div>
                    <p>my research involves designing <span className="rainbow-gradient">web-based conversational health interventions</span> 
                        using <span className="rainbow-gradient">virtual humans/embodied conversational agents</span> to connect people 
                        to <span className="rainbow-gradient">healthcare resources</span>.
                    </p>
                    <h3>Research Interests:</h3>
                    <p>
                    virtual humans, embodied conversational agents, conversational AI systems, healthcare interventions, equitable health outcomes
                    </p>
                    {/* <h3>Project(s):</h3>
                    <p><span className="symbol">♥</span>  [Past] Colorectal Cancer Project to promote CRC screening among racial/ethnic minority & rural patients - 
                    <a className="links" href="https://jou.ufl.edu/alex" target="_blank" rel="noopener noreferrer" style={{ color: props.theme.accent }}> Meet ALEX</a>
                    </p>
                    <p><span className="symbol">♥</span> Clinical Trials Project to educate on clinical trials & provide relevant, tailored clinical trial information to underrepresented populations</p>
                    <br/> */}
                    <h3>Publications:</h3>
                    <p>Check out my Google Scholar page
                    <a className="links" href="https://scholar.google.com/citations?user=w2AnUOcAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" style={{ color: props.theme.accent }}> here</a>!
                    </p>
                </div>
                <div className="image-container">
                    <img className="research-image" src={uf} alt="loading..." />
                </div>
            </div>
        </div>
    )
}

const ResearchPage = withTheme(Research);
export default ResearchPage;
