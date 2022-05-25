import logo from './icons/ginologo.jpg';
import './App.css';
import NavBar from './components/Nav/nav.js'

function App() {
  return (
    
    <div className="App">
      <NavBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, I am Gino!
        </p>
      </header>
    </div>
  );
}

export default App;
