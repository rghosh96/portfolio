import React from 'react'
import { func, string } from 'prop-types';
import styled from 'styled-components';
// Import a couple of SVG files we'll use in the design: https://www.flaticon.com
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'


const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.bg};
  border: 2px solid ${({ theme }) => theme.gold};
  border-radius: 30px;
  cursor: pointer;
  position: absolute;
  right: 20px;
  padding: 9px;
  top: 20px;
  font-size: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  width: 80px;
  height: 40px;
    
    // sun icon
    .light {
      transform: ${({ theme }) => theme.mode === 'light' ? 'translateY(0)' : 'translateY(100px)'};
    }
    
    // moon icon
    .dark {
      transform: ${({ theme }) => theme.mode === 'light' ? 'translateY(-100px)' : 'translateY(0)'};
    }
  }
`;

const Toggle = ({ theme, toggleTheme }) => {
  return (
    <ToggleContainer onClick={toggleTheme} >
       <FontAwesomeIcon className="light"
                color={"#e3a813"}
                icon={faSun} 
                size='2x'
              />
       <FontAwesomeIcon className="dark"
                color={"#e3a813"}
                icon={faMoon} 
                size='2x'
              />
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle;