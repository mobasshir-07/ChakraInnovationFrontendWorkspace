import { Box, Typography } from '@mui/material';
import MySvgImage from './Logomark.svg';
import report from './report.svg';
import conversation from './chat.svg';
import customer from './customer.svg';
import dashboard from './dashboard.svg';
import geo from './geo.svg';
import exp from './export.svg';
import deals from './deals.svg';
import set from './setting.svg';
import textLogo from './icon.svg';
import pict from './profilePic.png';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import useStyles from './styles';
function Sidebar() {
  const classes = useStyles();
  return (
   <Box className= {classes.navbarWhole}>
        <Box className= {classes.navbarQ1}>
          <Box className={classes.navbarTitle}>
            <img src={MySvgImage} alt="My SVG Image" />
            <Typography>
              OrangeFarm
            </Typography>
          </Box>
        </Box>
        <Box className = {classes.navbarQ2}>
          <Box className={classes.navbarSearch}>
            <Box className={classes.navbarInsideSearch}>
              <SearchIcon/>
              <Typography>
                Search
              </Typography>
            </Box>
          </Box>
          <Box className={classes.navbarContent}>
            <img src={dashboard} alt="My dashboard Image" />
            <Link href="https://example.com" target="_blank" rel="noopener">
              Dashboard
            </Link>
            <Typography>
              Dashboard
            </Typography>
          </Box>
          <Box className={classes.navbarContent}>
            <img src={customer} alt="My dashboard Image" />
              <Typography>
                Customers
              </Typography>
          </Box>
          <Box className={classes.navbarContent}>
          <img src={report} alt="My dashboard Image" />
            <Typography>
              All Reports
            </Typography>
          </Box>
          <Box className={classes.navbarContent}>
          <img src={geo} alt="My dashboard Image" />
            <Typography>
              Geography
            </Typography>
            </Box>
          <Box className={classes.navbarContent}>
          <img src={conversation} alt="My dashboard Image" />
            <Typography>
              Conversation
            </Typography>
           
          </Box>
          <Box className={classes.navbarContent}>
              <img src={deals} alt="My dashboard Image" />
              <Typography>
                Deals
              </Typography>
            
          </Box>
          <Box className={classes.navbarContent}>
              <img src={exp} alt="My dashboard Image" />
              <Typography>
                Export
              </Typography>
            
          </Box>

        </Box>
        <Box className = {classes.navbarQ3}>
          <Box className = {classes.navbarProfile}>
            {/* <Box className = {classes.profilePhoto}>
              <img src={pict} alt="Profile picture" />
            </Box> */}
            <Avatar alt="Profile picture" src={pict} />
            <Box className = {classes.ProfileDesc}>
              <Typography className={classes.profileName}>Gustavo Xavier</Typography>
              <Typography className={classes.profileStatus}>Admin</Typography>
            </Box>
          </Box>
          <Box className = {classes.navbarSetting}>
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
