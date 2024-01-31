import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  contentRevenue: {
    display: 'flex',
    minWidth: '33%',
    minHeight: '200px',
    padding: '24px',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '8px',
    flex: '1 0 0',
    alignSelf: 'stretch',
    borderRadius: '16px',
    background: 'var(--White, #FFF)',
  },
  contentRevenueQuater:{
    display: 'flex',
    minWidth: '20%',
    minHeight: '200px',
    padding: '24px',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '8px',
    flex: '1 0 0',
    alignSelf: 'stretch',
    borderRadius: '16px',
    background: 'var(--White, #FFF)',
  },
  chart:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'stretch',
    marginBottom:'20px',
  },
  space1:{
    height:'20px'
  },
  myTitle: {
    display: 'flex',
    paddingBottom: '16px',
    alignItems:'flex-start',
    gap: '8px',
    alignSelf:'stretch',
    color: 'var(--Black, #131313)',
    fontFamily: 'Inter',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 'normal',
    letterSpacing: '-0.2px',
  },
  subtitle: {
    color: 'var(--Black, #131313)',
    fontFamily: 'Inter',
    fontSize: '48px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 'normal',
    letterSpacing: '-2px',
  },
  subtitle1: {
    color: '#454545',
    fontFamily: 'Inter',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
    letterSpacing: '-0.3px',
  },
  linktext: {
    fontFamily: 'Inter',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
    letterSpacing: '-0.3px',
    marginBottom:'0px',
    display:'flex',
    marginLeft:'12px',
  },
  linkBox:{
    display:'flex',
    flexDirection:'row',
    gap:'4px',
    color: '#734A00',
    alignItems:"center",
    cursor:"pointer"
  },
  space:{
    height:'48px'
  }
}),{index:1});

export default useStyles;
