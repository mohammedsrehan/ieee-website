import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    webinars: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
    },
    carousel:{
        width: "100%",
    },
    cards: {
        display: 'grid',
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        width: '90%',
        gap: '20px',
        margin: '50px auto',
        justifyContent: 'space-evenly',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 'auto',
        backgroundColor: '#1f79ac',
        boxSizing: 'border-box',
    },
    orators:{
        width: '90%',
        display: 'grid',
        gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '50px',
        margin: '40px auto',
        color: '#fff',
    },
    orators__box:{
        border: '1px solid #fff',
        padding: '20px',
        height: '100%',
    },
    header: {
        padding: '15px 25px',
        width: 'max-content',
        backgroundColor: '#12679b',
        color: '#ffffff',
        borderRadius: '50px',
    },
  [theme.breakpoints.down("md")]: {
    orators:{
        gap: '20px',
        margin: '40px auto',
    },
  }
}));

