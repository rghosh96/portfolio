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

  .section-container {
    border: 1px solid ${({ theme }) => theme.accent};
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    width: 100%;
    position: absolute;
    margin-top: 21px;
    padding: 15px;
  }

  .to-top {
    position: fixed;
    bottom: 0;
    right: 0;
    margin: 5px;
    padding-bottom: 3px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
  }

  h1 {
    font-family: ${({ theme }) => theme.sansSerif};
  }

  h2 {
    font-family: ${({ theme }) => theme.cursive};
    color: ${({ theme }) => theme.accent};
    text-align: center;
    margin-bottom: 0px !important;
  }

  h3 {
    font-family: ${({ theme }) => theme.cursive};
    color: ${({ theme }) => theme.accent};
    font-size: 17px;
    margin-bottom: 0px !important;
  }

  h4 {
    font-family: ${({ theme }) => theme.sansSerif};
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 0px !important;
    margin-top: 7px;
  }

  h5 {
    font-family: ${({ theme }) => theme.sansSerif};
    font-size: 13px;
    color: ${({ theme }) => theme.accent};
  }
  
  p {
    font-family: ${({ theme }) => theme.sansSerif};
    font-size: 13px;
  }

  li {
    font-family: ${({ theme }) => theme.sansSerif};
    font-size: 13px;
  }

  .logo {
    color: ${({ theme }) => theme.accent};
    font-family: ${({ theme }) => theme.cursive}!important;
    opacity: .2;
    font-size: 125px;
    letter-spacing: 3px;
    line-height: 2px;
  }

  .center {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .title {
    font-family: ${({ theme }) => theme.sansSerif};
    color: ${({ theme }) => theme.accent};
    text-transform: uppercase;
    font-size: 27px;
    z-index: 5;
    font-weight: 900px;
    margin-right: 5px;
    margin-left: 5px;
  }

  .subtitle {
    color: ${({ theme }) => theme.text};
    text-align: center;
  }

  hr {
    background-color: ${({ theme }) => theme.accent}!important;
    width: 0%;
  }
  
  .btn-link {
    padding: 15px !important;
    margin: 20px !important;
    border: none !important;
    border-radius: 25px !important;
    transition: 0.3s ease-in-out !important;
    background: ${({ theme }) => theme.bg} !important;
    border-radius: 50px;
    box-shadow: 12px 12px 16px 0 ${({ theme }) => theme.darkShadow},
      -5px -3px 16px 0 ${({ theme }) => theme.lightShadow};
    height: 65px;
    width: 65px;
    &:focus {
      box-shadow: 12px 12px 16px 0 ${({ theme }) => theme.darkShadow},
      -5px -3px 16px 0 ${({ theme }) => theme.lightShadow};
    }
  }

  .profile-image {
    height: 200px;
    width: 150px;
    border-radius: 30px;
    margin-bottom: 35px;
    box-shadow: 12px 12px 16px 0 ${({ theme }) => theme.darkShadow},
      -5px -3px 16px 0 ${({ theme }) => theme.lightShadow};
  }

  .btn-primary {
    padding: 15px !important;
    margin: 20px !important;
    border: none !important;
    border-radius: 25px !important;
    transition: 0.3s ease-in-out !important;
    background: ${({ theme }) => theme.bg} !important;
    border-radius: 50px;
    box-shadow: 10px 10px 16px 0 ${({ theme }) => theme.darkShadow} inset,
    -5px -3px 16px 0 ${({ theme }) => theme.lightShadow} inset !important;
    height: 65px;
    width: 65px;
  }

.diamond-top {
  transform: rotateX(180deg);
}

.diamond-top path {
  fill: ${({ theme }) => theme.accent} !important;
  stroke: none !important;
}

.diamond-top-text {
  color: ${({ theme }) => theme.bg} !important;
  position: absolute;
  text-align: center;
  transform: translateY(15px);
  font-family: ${({ theme }) => theme.sansSerif};
  font-size: 9px;
}

.diamond {
  margin-bottom: 13px;
  width: 23px !important;
}

.diamond:nth-child(2) {
  margin-left: -23px;
  transform: rotateY(45deg);
}

.diamond:nth-child(3) {
  margin-left: -23px;
  transform: rotateY(65deg);
}

.diamond path {
stroke: ${({ theme }) => theme.accent} !important;
stroke-width: 21 !important;
}

.diamond2 {
  margin-top: 13px;
  width: 35px !important;
}

.diamond2:nth-child(2) {
  margin-left: -35px;
  transform: rotateY(45deg);
}

.diamond2:nth-child(3) {
  margin-left: -35px;
  transform: rotateY(65deg);
}

.diamond2 path {
  stroke: ${({ theme }) => theme.accent} !important;
  stroke-width: 23 !important;
  }

`