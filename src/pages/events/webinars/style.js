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
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 0fr))",
        // gridTemplateColumns: "repeat(2, 1fr)",
        width: '90%',
        gap: '20px',
        // placeContent: 'center',
        margin: '50px auto',
        justifyContent: 'space-evenly',
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

