import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  html, body, #root {
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
    display: flex;
    flex-direction: column;
    height: 100% !important;
    margin: 0;
    padding: 1px 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }

  .logo {
    color: ${({ theme }) => theme.gold};
    font-family: ${({ theme }) => theme.cursive}!important;
    opacity: .2;
    font-size: 105px;
    letter-spacing: 3px;
    line-height: 2px;
  }

  .title {
    color: ${({ theme }) => theme.gold};
    text-transform: uppercase;
    font-size: 25px;
    letter-spacing: 5px;
    z-index: 5;
    font-weight: 900px;
  }

  .subtitle {
    color: ${({ theme }) => theme.text};
  }

  hr {
    background-color: ${({ theme }) => theme.gold}!important;
    height: 0.5px !important;
    width: 50%;
  }
  
  .btn-link {
    padding: 15px !important;
    margin: 10px !important;
    border: none !important;
    border-radius: 25px !important;
    transition: 0.3s ease-in-out !important;
    background: ${({ theme }) => theme.bg} !important;
    border-radius: 50px;
    box-shadow: 12px 12px 16px 0 ${({ theme }) => theme.darkShadow},
      -5px -3px 16px 0 ${({ theme }) => theme.lightShadow};
    height: 75px;
    width: 75px;
  }

  .btn-link:focus {
  box-shadow: 10px 10px 16px 0 ${({ theme }) => theme.darkShadow} inset,
    -5px -3px 16px 0 ${({ theme }) => theme.lightShadow} inset !important;
}
`