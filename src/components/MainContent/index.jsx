import { Avatar, Box, Button, Typography} from '@mui/material';
import useStyles from './styles';
import UpperConatiner from './UpperConatiner';
import CustomerInfo from './CustomerInfo';
import avatar1 from '../MainContent/CustomerInfo/Avatar (1).svg'
import avatar from '../MainContent/CustomerInfo/Avatar.svg'
import avatar3 from '../MainContent/CustomerInfo/Rectangle 1 (1).svg'
import avatar4 from '../MainContent/CustomerInfo/Rectangle 1 (2).svg'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import MyChartComponent from '../MyChartComponent';
import offline2 from '../MainContent/CustomerInfo/offfline2.png'
import offline1 from '../MainContent/CustomerInfo/offline1.png'
import online2 from '../MainContent/CustomerInfo/online2.png'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useEffect , useState} from 'react';
function MainContent() {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/');
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <Box className={classes.contentWhole}>
      <Box className={classes.contentQ1}>
        <UpperConatiner chart={false} title={"Revenues"} subtitle={'15%'} subtext={"Increase compared to last week"} linktext={"Revenues report"} />
        <UpperConatiner chart={false} title={"Lost deals"} subtitle={'4%'} subtext={"You closed 96 out of 100 deals"} linktext={"All deals"} />
        <UpperConatiner chart={true} title={"Quarter goal"} subtitle={'84%'} subtext={"You closed 96 out of 100 deals"} linktext={"All goals"} />
      </Box>
      <Box className={classes.contentQ2}>
        <Box className={classes.contentCustomers}>
          <Box className={classes.customerTitleBox}>
            <Typography className={classes.customerTitle}>Customers</Typography>
            <Box className={classes.linkBox}>
              <Typography className={classes.titleRight}>Sort by newest </Typography>
              <KeyboardArrowDownOutlinedIcon fontSize='12px' />̉
            </Box>
          </Box>
          <CustomerInfo name={'Chris Friedkly'} isSelected={false} designation={'Supermarket Villanova'} pic={avatar} />
          <CustomerInfo name={'Maggie Johnson'} isSelected={true} designation={'Oasis Organic Inc'} pic={avatar1} />
          <CustomerInfo name={'Gael Harry'} isSelected={false} designation={'New York Finest Fruits'} pic={avatar3} />
          <CustomerInfo name={'Jenna Sullivan'} isSelected={false} designation={'Walmart'} pic={avatar4} />
          <Typography className={classes.linktext}>All customers <ArrowForwardOutlinedIcon fontSize='12px' /> </Typography>
        </Box>
      
        <Box className={classes.contentGrowth}>
          <Box className={classes.growthGraph}> 
          <MyChartComponent dataset={data}/>
        </Box>
            <Box className={classes.growthData}>
              <Box className={classes.growthTop}>
                <Typography className={classes.growthTitle}>Top month</Typography>
                <div>
                <Typography className={classes.growthMonth}>November</Typography>
                <Typography className={classes.growthYear}>2019</Typography>
                </div>
              </Box>
              <Box className={classes.growthTop}>
                <Typography className={classes.growthTitle}>Top year</Typography>
                <div>
                <Typography className={classes.growthMonth}>2023</Typography>
                <Typography className={classes.titleRight}>90K sold so far</Typography>
                </div>
              </Box>
              <Box className={classes.growthTop}>
                <Typography className={classes.growthTitle}>Top buyer</Typography>
                <div>
                <Avatar alt="Remy Sharp" src={avatar1} className={classes.profilePicture} />
                <Typography className={classes.growthName}>Maggie Johnson</Typography>
                <Typography className={classes.growthContent}>Oasis Organic Inc.</Typography>
                </div>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className={classes.contentQ3}>
          <Box className={classes.contentChat}>

            <Typography className={classes.customerTitle}>Chats</Typography>
            <Typography className={classes.titleRight}>2 unread messages</Typography>

            <Box className={classes.profileWindow}>
              <Avatar alt="Remy Sharp" src={avatar1} className={classes.profileAvatar} />
              <Avatar alt="Remy Sharp" src={online2} className={classes.profileAvatar} />
              <Avatar alt="Travis Howard" src={offline1} className={classes.profileAvatar} />
              <Avatar alt="Cindy Baker" src={offline2} className={classes.profileAvatar} />
            </Box>
          </Box>
          <Box className={classes.contentChat}>
            <Typography className={classes.customerTitle}>Top states</Typography>
            <Box className={classes.customerCity}>
              <Typography className={classes.cityName}>NY</Typography>
              <Typography className={classes.cityProfit}>120K</Typography>
            </Box>
            <Box className={classes.customerCity2}>
              <Typography className={classes.cityName}>MA</Typography>
              <Typography className={classes.cityProfit}>80K</Typography>
            </Box>
            <Box className={classes.customerCity3}>
              <Typography className={classes.cityName}>NH</Typography>
              <Typography className={classes.cityProfit}>70K</Typography>
            </Box>
            <Box className={classes.customerCity4}>
              <Typography className={classes.cityName}>OR</Typography>
              <Typography className={classes.cityProfit}>50K</Typography>
            </Box>
          </Box>
          <Box className={classes.contentNewdeals}>
            <Typography className={classes.customerTitle}>New deals</Typography>
            {/* <Box className={classes.dealsContainer}>
            <AddCircleOutlineIcon style={{ fontSize: '16px' }}></AddCircleOutlineIcon>
            <Typography>
                Fruit2Go
            </Typography> 
          </Box> */}
            <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '10px', marginTop: '13px', }}>
              <Button variant="outlined" className={classes.customButton} startIcon={<AddCircleOutlineIcon />}>
                Fruit2Go
              </Button>
              <Button variant="outlined" className={classes.customButton} startIcon={<AddCircleOutlineIcon />}>
                Marshall's MKT
              </Button>
              <Button variant="outlined" className={classes.customButton} startIcon={<AddCircleOutlineIcon />}>
                CCNT
              </Button>
              <Button variant="outlined" className={classes.customButton} startIcon={<AddCircleOutlineIcon />}>
                Joana Mini-market
              </Button>
              <Button variant="outlined" className={classes.customButton} startIcon={<AddCircleOutlineIcon />}>
                Little Brazil Vegan
              </Button>
              <Button variant="outlined" className={classes.customButton} startIcon={<AddCircleOutlineIcon />}>
                Target
              </Button>
              <Button variant="outlined" className={classes.customButton} startIcon={<AddCircleOutlineIcon />}>
                Organic Place
              </Button>
              <Button variant="outlined" className={classes.customButton} startIcon={<AddCircleOutlineIcon />}>
                Morello's
              </Button>
            </Box>

          </Box>
        </Box>
      </Box>

      );
}

export default MainContent;
