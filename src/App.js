import logo from './logo.svg';
import './App.css';
import Spline from '@splinetool/react-spline';

function App() {
  return (
    <div className="App">
          <Spline class="spline" scene="https://prod.spline.design/lYEviCEWrds0Js92/scene.splinecode" />
    <div className="content">
       <div className="title">
          <h1>rashi ghosh</h1>
          <h3>phd student | university of florida</h3>
          <div className="menu">
            <button>research</button>
            <button>projects</button>
            <button>contact</button>
            <button>cv</button>
          </div> 
        </div>
      </div>    
    </div>
  );
}

export default App;
