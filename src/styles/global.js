import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    align-items: center;
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }

  .subtitle {
    color: ${({ theme }) => theme.text};
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