import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
    navbarWhole: {
    display: "flex",
    minWidth: "280px",
    maxWidth: "320px",
    flexDirection: "column",
    alignItems: "flex-start",
    alignSelf: "stretch",
    borderRadius: "16px",
    background: "#FFF"
  },
  navbarQ1: {
    display: 'flex',
    padding: '16px 24px 12px 24px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '8px',
    alignSelf: 'stretch',
    width: '100%',
    height: 'auto'
  },
  navbarTitle: {
    display: 'flex',
    height: '40px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '6.4px'
  },
  navbarQ2: {
    display: 'flex',
    padding: '8px',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '8px',
    flex: '1 0 0',
    alignSelf: 'stretch',
  },
  navbarSearch: {
    display: 'flex',
    padding: '0px 12px 12px 12px',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '8px',
    alignSelf: 'stretch'
  },
  navbarInsideSearch: {
    display: 'flex',
    padding: '12px 16px',
    alignItems: 'center',
    gap: '8px',
    alignSelf: 'stretch',
    borderRadius: '20px',
    border: '1px solid var(--Light-Gray, #F1F1F1)',
    background: 'var(--White, #FFF)',
    borderRadius: "20px",
    height: "40px"
  },
  navbarContent: {
    display: 'flex',
    minWidth: '264px',
    maxWidth: '320px',
    padding: '12px 20px',
    alignItems: 'center',
    gap: '12px',
    alignSelf: 'stretch',
    borderRadius: '24px',
    cursor:"pointer"
  },
  navbarContentCustomer:{
    position:"relative",
    minWidth: '264px',
    maxWidth: '320px',
    padding: '12px 20px',
    alignItems: 'center',
    gap: '20px',
    alignSelf: 'stretch',
    borderRadius: '24px',
    cursor:"pointer"
  },

  navbarContentCustomerItem :{
    // position:"absolute",
    top: "0px",
    padding: "0px !important",
    
    
  },
  navbarQ3: {
    display: 'flex',
    height: '180px',
    padding: '16px 8px 24px 8px',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: '12px',
    alignSelf: 'stretch',
  },
  navbarProfile: {
    display: 'flex',
    height: '40px',
    padding: '0 20px',
    alignItems: 'center',
    gap: '12px',
    flexShrink: 0,
    alignSelf: 'stretch',
  },
  profilePhoto: {
    display: 'flex',
    width: '32px',
    height: '32px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ProfileDesc: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '4px',
  },
  profileName: {
    color: 'var(--Black, #131313)',
    fontFamily: 'Inter',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 'normal',
    letterSpacing: '-0.25px',
  },
  profileStatus: {
    display: 'flex',
    padding: '0 6px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '8px',
    borderRadius: '24px',
    background: 'var(--Mid-Orange, #FFCD71)'
  },
  navbarSetting: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '2px',
    alignSelf: 'stretch',
  },
  customerIcon: {
    minWidth: '28px !important',
  },


}),
{index: 1}
);

export default useStyles;
