// import { Box, Typography } from '@mui/material';
// import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
// import SemiCircleProgressBar from "react-progressbar-semicircle";
// import useStyles from './styles';

// function UpperConatiner(props) {
//   const classes = useStyles();
// return (
//         <Box className={classes.contentRevenue}>
//           <Typography className={classes.myTitle}>{props.title}</Typography>
//           {!props.chart ?(<> <Typography className={classes.subtitle}>{props.subtitle}</Typography>
//           <Typography className={classes.subtitle1}>{props.subtext}</Typography>
//           <Box className={classes.space}></Box> </>)
//           :<Box className={classes.chart}><SemiCircleProgressBar percentage={84} showPercentValue stroke={'#FFCD71'} strokeWidth={16} diameter={225}/></Box>}
//           <Box className={classes.linkBox}>
//             <Typography className={classes.linktext}>{props.linktext} </Typography>
//             <ArrowForwardOutlinedIcon fontSize='12px'/>
//           </Box>
//         </Box>
// );
// }
// export default UpperConatiner;

import React from 'react';
import { Box, Typography } from '@mui/material';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import SemiCircleProgressBar from "react-progressbar-semicircle";
import useStyles from './styles';

function UpperConatiner(props) {
  const classes = useStyles();

  const titleStyles = {
    display: 'flex',
    paddingBottom: '16px',
    alignItems: 'flex-start',
    gap: '8px',
    alignSelf: 'stretch',
    color: 'var(--Black, #131313)',
    fontFamily: 'Inter',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 'normal',
    letterSpacing: '-0.2px',
    ...(props.title === "Quarter goal" && {
      justifyContent: 'center',
    }),
  };
  const chartStyles = {
    position : 'relative',
  };
  
  const percentageStyles = {
    color: 'var(--Black, #131313)',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: '32px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 'normal',
    letterSpacing: '-1.592px',
    position:"absolute",
    bottom: "14px",
    right: "37%"
  };

  const subtitleStyles = {
    color: 'var(--Black, #131313)',
    fontFamily: 'Inter',
    fontSize: '48px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 'normal',
    letterSpacing: '-2px',
  };

  const subtitle1Styles = {
    color: '#454545',
    fontFamily: 'Inter',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
    letterSpacing: '-0.3px',
  };

  return (
    <Box className={props.title === "Quarter goal" ? classes.contentRevenueQuater : classes.contentRevenue }>
      <Typography style={titleStyles}>{props.title}</Typography>
      {!props.chart ? (
        <>
          <Typography style={subtitleStyles}>{props.subtitle}</Typography>
          <Typography style={subtitle1Styles}>{props.subtext}</Typography>
          <Box className={classes.space}></Box>
        </>
      ) : (
        <Box className={classes.chart}>
          <div style={chartStyles}>
            <SemiCircleProgressBar percentage={84} showPercentValue = {false} stroke={'#FFCD71'} strokeWidth={16} diameter={225} />
            <Typography style={percentageStyles}>84%</Typography>
          </div>
        </Box>
      )}
      <Box className={classes.linkBox}>
        <Typography className={classes.linktext}>{props.linktext} </Typography>
        <ArrowForwardOutlinedIcon fontSize='12px' />
      </Box>
    </Box>
  );
}

export default UpperConatiner;
