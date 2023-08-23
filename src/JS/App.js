import '../index.css'
import '../CSS/App.css';
import ThemeToggle from './ThemeToggle';
import { ReactComponent as Logo } from '../assets/Logo.svg'

function App() {
  return (
    <div className="App">
      <ThemeToggle/>

      <div className="navigation">
        <p className="nav-item">about</p>
        <p className="nav-item">research</p>
        <Logo className="logo"/>
        <p className="nav-item">projects</p>
        <p className="nav-item">connect</p>
      </div>

      <span className="title-area">
        <Logo className="logo-title"/>
        <h1 className="title">a</h1>
        <h1 className="title">s</h1>
        <h1 className="title">h</h1>
        <h1 className="title">i &nbsp;</h1>

        <h1 className="title">g</h1>
        <h1 className="title">h</h1>
        <h1 className="title">o</h1>
        <h1 className="title">s</h1>
        <h1 className="title">h</h1>
      </span>
      
      <hr/>
      
      <div className="subtitle">
          <h2>| <em>RAAHH∙shee &nbsp; g-OH-sh</em> |</h2>
          <h3>
            she/her <span style={{fontSize: 15}}>♡</span> phD student, human-centered computing <span style={{fontSize: 15}}>♡</span> software developer
          </h3>
      </div>
     
    </div>
  );
}

export default App;
