import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    Competitions: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
    },
    Competitions__cards: {
        display: 'grid',
        gridTemplateColumns: "repeat(auto-fit, minmax(350px, 0fr))",
        // gridTemplateColumns: "repeat(2, 1fr)",
        width: '90%',
        gap: '30px',
        // placeContent: 'center',
        margin: '50px auto',
    },
}));

