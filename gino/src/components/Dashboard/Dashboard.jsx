
import React, { useCallback } from "react";
import ClickableContainer from "../ClickableContainer/ClickableContainer.jsx";
import getClickableContainers from "./../../utils/getClickableContainers.js";
import "./Dashboard.css";

const containers = getClickableContainers();

function Dashboard() {
  return (
    <div className="DashboardContainer">
      {containers.map((container, i) =>
        <ClickableContainer
          key={i}
          className="Dashboard"
          container={container}
        />
      )}
    </div>
  )
}

export default Dashboard;
