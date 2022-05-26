
import React from "react";
import Button from '@mui/material/Button';
import Add from '@mui/icons-material/Add';
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="SidebarContainer">
      <Button
        variant="contained"
        style={{background: "#ff655a", color: "#000000", "border-radius": "50px"}}
        startIcon={<Add />}>
        New File
      </Button>
    </div>
  )
}

export default Sidebar;
