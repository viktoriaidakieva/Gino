import logo from './icons/ginologo.jpg';
import './App.css';
import NavBar from './components/Nav/nav.js';
import Dashboard from './components/Dashboard/Dashboard';
import Sidebar from './components/Sidebar/Sidebar';
import DashboardNavbar from './components/dashboard-navbar';

import Button from '@mui/material/Button';
import FormatListBulleted from '@mui/icons-material/FormatListBulleted';

function App() {
  return (

    <div className="App">
    <header className="App-header">
    <DashboardNavbar/>
    </header>
      <NavBar />
      <div className="Button">
      <span className="Button-container" title="Filters">
      <Button
        variant="contained"
        style={{background: "#FDE8E8", color: "#000000", margin: "0px", padding: "2px"}}
        startIcon={<FormatListBulleted />}></Button>
      </span>
      </div>
      <div className="App-content">
      <Dashboard/>
      <Sidebar/>
      </div>
    </div>
  );
}

export default App;
