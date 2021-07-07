import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    profile:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: "center",
        flex: '1 1 30%'
    },
    profile__image: {
        height: "150px",
        width: "150px",
    },
    [theme.breakpoints.down('sm')]: {
        profile__image: {
            height: "100px",
            width: "100px",
        },
    },
}));
