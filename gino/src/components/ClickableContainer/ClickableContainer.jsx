
import React, { useCallback } from "react";
import getClickableContainers from "./../../utils/getClickableContainers.js";
import "./ClickableContainer.css"

function ClickableContainer(props) {

  const handleClick = useCallback(() => {
    console.log('a');
  });
  return (
    <div className="ClickableContainer" onClick={handleClick}>
    <img alt={props.container.iconAlt} src={props.container.iconPath} />
    {props.container.display}
    </div>
  );
}

export default ClickableContainer;
