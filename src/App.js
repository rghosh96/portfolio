import logo from './logo.svg';
import './App.css';
import Spline from '@splinetool/react-spline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faEnvelope, faScroll, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

function App() {
  const openItem = (url, target="_blank") => {
    window.open(url, target, "noreferrer");
  };
  return (
    <div className="App">
      <Spline className="spline" scene="https://prod.spline.design/xhMT9v4M1EpCgfKP/scene.splinecode" />
    <div className="content">
       <div className="title">
          <h1>rashi ghosh</h1>
          <div className="description">
            <p>hello! i am a <span className="colorful-gradient">phd student</span> in <span className="colorful-gradient">human-centered computing at the university of florida <FontAwesomeIcon className="link-icon" icon={faUpRightFromSquare} onClick={() => openItem("https://faculty.eng.ufl.edu/human-centered-computing/")} /></span> in the <span className="colorful-gradient">virtual experiences research group <FontAwesomeIcon className="link-icon" icon={faUpRightFromSquare} onClick={() => openItem("https://verg.cise.ufl.edu/")}/> </span>.</p>
          </div>
          <hr/>
          <div className="keywords-area">
            <span><span class="keywords-title">keywords ↦ </span><span className="colorful-gradient">virtual humans <span class="heart">♥</span> embodied conversational agents <span class="heart">♥</span> healthcare interventions <span class="heart">♥</span> equitable health outcomes</span></span>
          </div>
          <div className="menu">
            <button className="external-link" onClick={() => openItem("https://scholar.google.com/citations?user=w2AnUOcAAAAJ&hl=en")}><FontAwesomeIcon icon={faGraduationCap} /> google scholar</button>
            <button className="external-link" onClick={() => openItem("https://docs.google.com/document/d/1slNW9CStbBQoJ1W5X51Wb60-7X84J8rLh6gPEpR48WI/edit?usp=sharing")}><FontAwesomeIcon icon={faScroll} /> cv</button>
            <button className="external-link" onClick={() => openItem("https://www.linkedin.com/in/rashi-ghosh-a39ab6171/")}><FontAwesomeIcon icon={faLinkedin} /> linkedin</button>
            <button className="modal-link" onClick={() => openItem("mailto:rashighosh@ufl.edu", "_self")}><FontAwesomeIcon icon={faEnvelope} /> email</button>
          </div> 
        </div>
      </div>    
    </div>
  );
}

export default App;
