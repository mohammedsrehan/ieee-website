import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    home: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        alignItems: 'center',
        margin: 'auto',
        marginBottom: '20px',
    },
    container: {
        width: '100%',
        backgroundColor: "#00b0ff",
        height: "100vh",
        position: 'relative'
    },
    header: {
        position: 'absolute',
        bottom: '0',
        backgroundColor: '#12679b',
        width: '100%',
        opacity: '0.5'
    },
    paper: {
        width: '80%',
        padding: '30px'
    }
}));
