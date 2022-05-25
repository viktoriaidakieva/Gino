
import React, { useCallback } from "react";
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Icon from '@mui/material/Icon';

import getClickableContainers from "./../../utils/getClickableContainers.js";
import "./ClickableContainer.css";

function ClickableContainer(props) {

  const handleClick = useCallback(() => {
    alert('I clicked this section yeyyy');
  });

  return (
    <Card className="ClickableContainer" onClick={handleClick}>
    <CardContent className="a">
    <Icon
      component={props.container.iconName}
      style={{ color: '#545454', fontSize: '1.8em' }}>
    </Icon>
      <Typography variant="h5" component="h2" className="Typography">
        {props.container.display}
      </Typography>
    </CardContent>
    </Card>
  );
}

export default ClickableContainer;
