
import React from "react";
import Button from '@mui/material/Button';
import Add from '@mui/icons-material/Add';
import CloudUpload from '@mui/icons-material/CloudUpload';
import AccountCircle from '@mui/icons-material/AccountCircle';
import "./Sidebar.css";

const userTitles = ['User 1', 'User 2', 'User 3', 'User 4', 'User 5', 'User 6'];

function Sidebar() {
  return (
    <div className="SidebarContainer">
      <Button
        title="Press the button to create a new file"
        variant="contained"
        style={{
          background: "#ff655a",
          color: "#000000",
          borderRadius: "50px",
          flexDirection: "row"
        }}
        startIcon={<Add />}>
        New File
      </Button>
      <Button
        title="Drag and drop a file or click the button to upload"
        variant="contained"
        style={{
          background: "#FFF6F6",
          flexDirection: "row",
          color: "#000000",
          border: "1px #000000 dashed",
          borderRadius: "10px",
          marginTop: "10%",
          padding: "25% 15%"}}
        startIcon={<CloudUpload />}>
        Upload Files
      </Button>
      <div className="SharedTitle">Shared with me</div>
      <div className="UserButtons">
       {userTitles.map((title, i) =>
         <span title={title} className="UserButton">
           <AccountCircle
             key={i}
             style={{
               color: "#000000",
               width: "60px",
               height: "60px",
               flexDirection: "row",
               lineHeight: "80px",
            }} />
          </span>
       )
       }
      </div>
    </div>
  )
}

export default Sidebar;
