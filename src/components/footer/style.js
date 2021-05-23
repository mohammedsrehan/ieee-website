import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    width: '100%',
    padding: '50px 200px',
    backgroundColor: "#12679b",
    height: "auto",
    position: "absolute",
    bottom: "0",
    display: 'flex',
    justifyContent: 'center',
  },
  mainContainer: {
    display: 'grid',
    gridTemplateColumns: '1.5fr 1fr',
    columnGap: '180px',
    rowGap: '20px',
    color: '#ffffff',
    
  },
  contactus:{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  contactUs__item: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px'
  },
  reachUs: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  title: {
    fontWeight: '600',
    letterSpacing: '1px',
  },
  icons: {
    display: 'flex',
    flexDirection: 'row',
    gap: '25px',
  },
  copyright: {
    gridColumn: '1/3',
    display: 'flex',
    gap: '50px',
    justifyContent: 'center',
  }
}));
