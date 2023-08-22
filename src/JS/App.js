import '../index.css'
import '../CSS/App.css';
import ThemeToggle from './ThemeToggle';
import { ReactComponent as Name } from '../assets/name.svg'

function App() {
  return (
    <div className="App">
      <ThemeToggle/>

      <div class="navigation">
        <h3>about</h3>
        <h3>research</h3>
        <Name className="logo"/>
        <h3>projects</h3>
        <h3>connect</h3>
      </div>

      <span className="title">
        <h1>rashi ghosh</h1>
        <h2>| <em>RAAHH ∙ shee</em> |</h2>
      </span>
      
      
      <div className="subtitle">
          <span>
            she/her <span style={{fontSize: 15}}>♡</span> phD student, human-centered computing <span style={{fontSize: 15}}>♡</span> software developer
          </span>
      </div>
     
    </div>
  );
}

export default App;
