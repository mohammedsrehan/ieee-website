import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    webinars: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
    },
    
    cards: {
        display: 'grid',
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        width: '90%',
        gap: '20px',
        placeContent: 'center',
        margin: '50px auto',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 'auto',
        height: '70vh',
        backgroundColor: '#1f79ac',
    },
    header: {
        padding: '15px 25px',
        width: 'max-content',
        backgroundColor: '#12679b',
        color: '#ffffff',
        borderRadius: '50px',
    },
}));

