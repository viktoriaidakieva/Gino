
import React, { useState } from "react";
import ClickableContainer from "../ClickableContainer/ClickableContainer.jsx";
import getClickableContainers from "./../../utils/getClickableContainers.js";
import "./Dashboard.css";

const containers = getClickableContainers();

function Dashboard() {
  const [isActive, setIsActive] = useState(true);

  return (
    <div className="DashboardContainer">
      {isActive &&
        <>
        {containers.map((container, i) =>
          <ClickableContainer
            key={i}
            className="Dashboard"
            container={container}
          />
        )}
        </>
      }
      {!isActive && 
        <>
        {containers.map((container, i) =>
          <ClickableContainer
            key={i}
            className="Dashboard"
            container={container}
          />
        )}
        </>
      }
    </div>
  )
}

export default Dashboard;
