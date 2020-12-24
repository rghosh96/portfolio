import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'


const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.bg};
  border: none;
  box-shadow: 8px 8px 12px 0 ${({ theme }) => theme.darkShadow},
      -5px -3px 16px 0 ${({ theme }) => theme.lightShadow};
  border-radius: 30px;
  cursor: pointer;
  position: absolute;
  right: 20px;
  padding: 13px;
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
  console.log(theme)
  return (
    <ToggleContainer onClick={toggleTheme} >
       <FontAwesomeIcon className="light"
                color={theme.accent}
                icon={faSun} 
                size='2x'
              />
       <FontAwesomeIcon className="dark"
                color={theme.accent}
                icon={faMoon} 
                size='2x'
              />
    </ToggleContainer>
  );
};


export default Toggle;