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

  .parallax {
    width: 100%;
  }

  a:hover {
    text-decoration: none !important;
  }
  .navigation {
    position: fixed;
    width: 100%;
    padding-top: 20px;
    height: 60px;
    border-bottom: 1px solid ${({ theme }) => theme.accent};
    margin: auto; 
    left: 0;
    right: 0;
    top: 0;
    display: flex;
    justify-content: center;
    background-color: ${({ theme }) => theme.bg} !important;
    z-index: 99999;
  }

  .navLine {
    width:35%;
  }

  .navItem {
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: .2s ease-in-out;
    margin-right: 15px;
    margin-left: 15px;
    cursor: pointer;
  }
  
  .navItem:hover {
    transform: scale(1.1);
  }
  .navItem .navLink {
    text-decoration: none !important; 
    text-transform: uppercase;
    font-size: 11px;
    transition: .2s ease-in-out;
    color: ${({ theme }) => theme.text} !important;
    opacity: 0;
    height: 0;
    margin: 0;
  }
  .navItem:hover .navLink {
    text-decoration: none !important;
    color: ${({ theme }) => theme.accent} !important;
    opacity: 1;
    height: 100%;
    margin: 0;
  }
  .dot {
    height: 5px;
    width: 5px;
    background-color: ${({ theme }) => theme.accent} !important;
    border-radius: 50%;
  }

  .navItem:hover .dot {
    opacity: 0;
  }

  .section-container {
    border: 1px solid ${({ theme }) => theme.accent};
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    padding: 21px;
    width: 55%;
  }

  .to-top {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    margin: 5px;
    padding-bottom: 3px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    transform: scale(1.1);
    transition: .2s ease-in-out
  }

  .to-top:hover {
    transform: scale(1.3);
  }

  h1 {
    font-family: ${({ theme }) => theme.sansSerif};
  }

  h2 {
    font-family: ${({ theme }) => theme.cursive};
    color: ${({ theme }) => theme.accent};
    text-align: center;
    margin-bottom: 0px !important;
    font-size: 43px;
  }

  h3 {
    font-family: ${({ theme }) => theme.bold};
    color: ${({ theme }) => theme.accent};
    font-size: 11px;
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

  h6 {
    font-family: ${({ theme }) => theme.cursive};
    font-size: 17px;
    text-align: center;
    color: ${({ theme }) => theme.accent};
    margin: 0;
  }

  h7 {
    font-family: ${({ theme }) => theme.bold};
    color: ${({ theme }) => theme.accent};
    font-size: 27px;
    margin-bottom: 0px !important;
  }

  h8 {
    font-family: ${({ theme }) => theme.cursive};
    font-size: 70px;
    opacity: .5;
    line-height: 1;
    text-align: center;
    color: ${({ theme }) => theme.accent};
    margin: 0;
    transition: .2s ease-in-out;
  }

  h8:hover {
    opacity: .8;
    font-size: 75px;
  }
  
  p {
    font-family: ${({ theme }) => theme.sansSerif};
    font-size: 17px;
    margin-bottom: 5px !important;
  }

  li {
    font-family: ${({ theme }) => theme.sansSerif};
    font-size: 15px;
  }

  .logo {
    color: ${({ theme }) => theme.accent};
    font-family: ${({ theme }) => theme.cursive}!important;
    opacity: .2;
    font-size: 125px;
    letter-spacing: 3px;
    line-height: 2px;
    text-align: center;
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
    width: 75px !important;
    height: 75px !important;
    text-decoration: none !important;
    padding: 15px !important;
    margin: 20px !important;
    border: none !important;
    border-radius: 25px !important;
    transition: 0.3s ease-in-out !important;
    background: ${({ theme }) => theme.bg} !important;
    box-shadow: 12px 12px 16px 0 ${({ theme }) => theme.darkShadow},
      -5px -3px 16px 0 ${({ theme }) => theme.lightShadow};
    height: 65px;
    width: 65px;
    &:focus {
      box-shadow: 12px 12px 16px 0 ${({ theme }) => theme.darkShadow},
      -5px -3px 16px 0 ${({ theme }) => theme.lightShadow};
    }
  }

  .button-label {
    font-family: ${({ theme }) => theme.bold};
    color: ${({ theme }) => theme.accent};
    font-size: 9px;
    opacity: 0;
    transition: .3s ease-in;
    text-align: center;
    max-height: 0px !important;
    margin: 0 !important;
  }

  .profile-image {
    width: 250px; 
    height: 250px; 
    object-fit: cover;
    border-radius: 50%;
    margin-right: 55px;
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
    box-shadow: 10px 10px 16px 0 ${({ theme }) => theme.darkShadow} inset,
      -5px -3px 16px 0 ${({ theme }) => theme.lightShadow} inset !important;
    height: 65px;
    width: 65px;
  }

  .btn-generic {
    background-color: ${({ theme }) => theme.accent} !important;
    box-shadow: 12px 12px 16px 0 ${({ theme }) => theme.darkShadow},
      -5px -3px 16px 0 ${({ theme }) => theme.lightShadow};
    margin: 15px;
    font-family: ${({ theme }) => theme.bold};
    font-size: 11px;
    padding: 11px;
    border-radius: 11px;
    transition: .2s ease-in-out;
    color: ${({ theme }) => theme.bg} !important;
  }

  .btn-generic:hover {
    transform: scale(1.1);
  }

  form input,
  form textarea {
    -webkit-appearance: none;
    font-family: ${({ theme }) => theme.sansSerif};
    color: ${({ theme }) => theme.text};
    font-size: 11px;
    padding: 7px;
    margin-top: 10px;
    width: 50%;
    border: none !important;
    background: ${({ theme }) => theme.bg} !important;
    box-shadow: 5px 5px 8px 0 ${({ theme }) => theme.darkShadow} inset,
      -5px -3px 16px 0 ${({ theme }) => theme.lightShadow} inset !important;
  }

  form label {
    font-size: 11px;
    font-family: ${({ theme }) => theme.bold};
    color: ${({ theme }) => theme.accent};
    margin: 0 !important;
  }

  form input {
    border-radius: 10px;
  }

  form textarea {
    border-radius: 15px;
  }

  form .btn-primary {
    padding: 15px !important;
    height: auto;
    width: auto;
    font-size: 11px;
    border-radius: 15px !important;
    font-family: ${({ theme }) => theme.bold};
    color: ${({ theme }) => theme.bg};
    background-color: ${({ theme }) => theme.accent} !important;
    box-shadow: 12px 12px 16px 0 ${({ theme }) => theme.darkShadow},
      -5px -3px 16px 0 ${({ theme }) => theme.lightShadow} !important;
  }

  form .btn-primary:hover {
    transform: scale(1.1);
  }

  .error {
    font-family: ${({ theme }) => theme.sansSerif};
    color: ${({ theme }) => theme.text};
    font-size: 11px;
  }

  .modalContainer, .modal-content {
    background-color: ${({ theme }) => theme.bg} !important;
    border-radius: 30px;
    border: none;
  }

  .modalContainer .modal-title {
    color: ${({ theme }) => theme.accent} !important;
    font-family: ${({ theme }) => theme.cursive};
    font-size: 21px;
  }

  .modalContainer .modal-header {
    border-color: ${({ theme }) => theme.accent} !important;
  }

  .social-media {
    transition: .3s ease-in-out;
    margin: 5px;
  }

  .social-media:hover {
    transform: scale(1.1);
  }

  .social-media-area {
    display: flex;
    flex-direction: row;
    justify-content: center;
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
  font-family: ${({ theme }) => theme.bold};
  font-size: 11px;
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

.links {
  text-decoration: none !important;
  transition: 0.2s ease-in;
}

.links:hover {
  color: ${({ theme }) => theme.accentDark}  !important;
  transition: 0.2s ease-in;
}

  @media only screen and (max-width: 655px) {
    .btn-link, .btn-primary {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .button-label {
      opacity: 1 ;
    }

    h7 {
      font-size: 19px;
    }

    p {
      font-size: 15px;
    }

    h2 {
      font-size: 33px;
    }

    .section-container {
      width: 90%;
    }

    .profile-image {
      width: 100px;
      height: 100px;
      margin-right: 0;
      margin-bottom: 17px !important;
    }
  }

`