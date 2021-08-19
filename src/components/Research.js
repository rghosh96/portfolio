import React from 'react'
import '../css/about.css';
import '../css/master.css';
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
            <p>coming soon!</p>
        </div>
    )
}

const ResearchPage = withTheme(Research);
export default ResearchPage;
