import { Avatar, Box, Typography} from '@mui/material';
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import messageIcon from "../../Sidebar/assets/message.svg"
import moreIcon from "../../Sidebar/assets/more.svg"
import editIcon from "../../Sidebar/assets/edit.svg"
import starIcon from "../../Sidebar/assets/star.svg"
import useStyles from './styles';

function CustomerInfo(props) {
  const classes = useStyles();
  return (
          <Box className={[classes.box,props.isSelected && classes.isSelected]}>
            <Avatar src={props.pic}/>
          <Box className={classes.profilebox}>
            <Typography className={classes.name}>{props.name}</Typography>
            <Typography className={classes.designation}>{props.designation}</Typography>
            
          </Box>
          {props.isSelected && (<Box className={classes.iconContainer}>
            <img src={messageIcon} />
            <img src={starIcon} />
            <img src={editIcon} />
            <p className={classes.saperator}></p>
            <img src={moreIcon} />
          </Box>)}
        
          </Box>
  );
}

export default CustomerInfo;
