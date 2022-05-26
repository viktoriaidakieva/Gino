import React from 'react';
import { AppBar,  Badge, IconButton, Toolbar, Tooltip } from '@mui/material';

//icons ---
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import Divider from '@mui/material/Divider';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

//Formatting and structure
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

//Search Input Field
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';

//Logo
import Image from './gino.png';



export function DashboardNavbar (){
  return (
    <>

    {/*header start*/}
  <AppBar position="fixed" style={{background: "#FFF6F6"}}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters sx={{minHeight: 64, px: 3}}>

{/*start of row*/}
<div style={{ width: '100%' }}>
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>

    {/*first column*/}
      {/*Logo */}
        <Box component="img"  src={Image}>
          </Box>

  {/*Second  column*/}
  <Box sx={{p:1, m:1}}>
        {/*Search bar */}
        <Paper component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 800 }}>
                <IconButton sx={{ p: '10px' }}
                aria-label="menu">
                <SearchIcon />
                </IconButton>

              <InputBase sx={{ ml: 1, flex: 1 }}
                placeholder="Search... "
                inputProps={{ 'aria-label': 'search google maps' }}/>

                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

              <IconButton>
                <FilterAltOutlinedIcon />
              </IconButton>

        </Paper>
    </Box>



    {/*Third  column*/}
  <Box sx={{p:1, m:1}}>
        <Stack  style={{flexDirection: 'row', justifyContent: 'flex-end'}} direction="row" >
        {/* notification button */}
                   <Tooltip title="Notifications">
                    <IconButton sx={{ ml: 1 }}>
                      <Badge
                        badgeContent={4}
                        color="warning"
                        variant="dot">
                        <NotificationsNoneIcon style={{ fontSize: 40 }}/>
                      </Badge>
                    </IconButton>
                  </Tooltip>

          {/* Avatar button */}
          <Tooltip title="Profile">
            <IconButton sx={{ ml: 1 }}>
              <AccountCircleIcon style={{ fontSize: 40 }}/>
            </IconButton>
        </Tooltip>
      </Stack>
  </Box>

  {/*End of row*/}
</Box>
  </div>

        </Toolbar>
          </Container>
              </AppBar>

    </>
  );
}
