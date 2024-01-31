import { Box, Collapse, Input, InputAdornment, List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import MySvgImage from './assets/Logomark.svg';
import report from './assets/report.svg';
import report2 from './assets/report2.svg';
import conversation from './assets/chat.svg';
import conversation2 from './assets/chat2.svg';
import customer from './assets/customer.svg';
import dashboard from './assets/dashboard.svg';
import dashboard2 from './assets/dashboard2.svg';
import geo from './assets/geo.svg';
import geo2 from './assets/geo2.svg';
import exp from './assets/export.svg';
import exp2 from './assets/export2.svg';
import deals from './assets/deals.svg';
import deals2 from './assets/deals2.svg';
import set from './assets/setting.svg';
import textLogo from './assets/icon.svg';
import pict from './assets/profilePic.png';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import title from './assets/title.svg';
import Link from '@mui/material/Link';
import useStyles from './styles';
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

const listItemButtonStyle = {
  '&:hover': {
    backgroundColor: 'transparent', // Set the background color to transparent on hover
  },
};


function Sidebar() {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleNavigate = (page) => {
    navigate(`/${page}`);
  };


  return (
    <Box className={classes.navbarWhole}>
      <Box className={classes.navbarQ1}>
        <Box className={classes.navbarTitle}>
          <img src={MySvgImage} alt="My SVG Image" />
          <img src={title} alt ="title" />
        </Box>
      </Box>
      <Box className={classes.navbarQ2}>
        <Box className={classes.navbarSearch}>
          <Input className={classes.navbarInsideSearch}
            placeholder='Search'
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }>
          </Input>
        </Box>
        <Box className={classes.navbarContent} onClick={() => handleNavigate("")}>
          <img img src={location.pathname === "/" ? dashboard2 : dashboard} alt="dashboard" />
          <Typography>
            Dashboard
          </Typography>
        </Box>
        <Box className={classes.navbarContentCustomer} onClick={() => handleNavigate("customer")}>
          <ListItemButton onClick={handleClick} className={classes.navbarContentCustomerItem}>
            <ListItemIcon className={classes.customerIcon}>
              <img src={customer} alt="Customer" />
            </ListItemIcon>
            <ListItemText primary="Customers" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={classes.listItemButtonStyle}>
                <ListItemIcon>
                  {/* Add content for the nested ListItemIcon if needed */}
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItemButton>
            </List>
          </Collapse>
        </Box>
        <Box className={classes.navbarContent} onClick={() => handleNavigate("reports")}>
          <img img src={location.pathname === "/reports" ? report2 : report} alt="Reports" />
          <Typography>
            All Reports
          </Typography>
        </Box>
        <Box className={classes.navbarContent} onClick={() => handleNavigate("geography")}>
          <img img src={location.pathname === "/geography" ? geo2 : geo} alt="Geography" />
          <Typography>
            Geography
          </Typography>
        </Box>
        <Box className={classes.navbarContent} onClick={() => handleNavigate("chat")}>
          <img img src={location.pathname === "/chat" ? conversation2 : conversation} alt="chat" />
          <Typography>
            Conversation
          </Typography>
        </Box>
        <Box className={classes.navbarContent} onClick={() => handleNavigate("deals")}>
          <img img src={location.pathname === "/deals" ? deals2 : deals} alt="deals" />
          <Typography>
            Deals
          </Typography>

        </Box>
        <Box className={classes.navbarContent} onClick={() => handleNavigate("export")}>
          <img src={location.pathname === "/export" ? exp2 : exp} alt="Export" />
          <Typography>
            Export
          </Typography>

        </Box>

      </Box>
      <Box className={classes.navbarQ3}>
        <Box className={classes.navbarProfile}>
          {/* <Box className = {classes.profilePhoto}>
              <img src={pict} alt="Profile picture" />
            </Box> */}
          <Avatar alt="Profile picture" src={pict} />
          <Box className={classes.ProfileDesc}>
            <Typography className={classes.profileName}>Gustavo Xavier</Typography>
            <Typography className={classes.profileStatus}>Admin</Typography>
          </Box>
        </Box>
        <Box className={classes.navbarSetting}>
          <Box className={classes.navbarContent}>
            <img src={set} alt="Setting" />
            <Typography>
              Settings
            </Typography>
          </Box>
          <Box className={classes.navbarContent}>
            <img src={textLogo} alt="Log Out" />
            <Typography>
              Log Out
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>

  );
}

export default Sidebar;
