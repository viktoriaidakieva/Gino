import logo from './icons/ginologo.jpg';
import './App.css';
import NavBar from './components/Nav/nav.js'
import Dashboard from './components/Dashboard/Dashboard';
import Sidebar from './components/Sidebar/Sidebar';

import Button from '@mui/material/Button';
import FormatListBulleted from '@mui/icons-material/FormatListBulleted';

function App() {
  return (
    
    <div className="App">
      <NavBar />
      <header className="App-header">
      </header>
      <div className="Button-container">
      <Button
        variant="contained"
        style={{background: "#FDE8E8", color: "#000000", margin: "0px", padding: "2px"}}
        startIcon={<FormatListBulleted />}></Button>
      </div>
      <div className="App-content">
      <Dashboard/>
      <Sidebar/>
      </div>
    </div>
  );
}

export default App;
