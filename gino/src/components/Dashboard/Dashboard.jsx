
import React, { useCallback } from "react";
import getClickableContainers from "./../../utils/getClickableContainers.js";
import ClickableContainer from "../ClickableContainer/ClickableContainer.jsx"

const containers = getClickableContainers();

function Dashboard() {

   return containers.map((container, i) =>
     <ClickableContainer key={i} className="Dashboard" container={container}/>
  );
}

export default Dashboard;
