import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    About: {
        width: '90%',
        margin: '20px auto',
    },
    About__about: {
        display: 'flex',
        flexDirection: 'row',
        padding: '20px',
        gap: '20px',
        marginBottom: '30px',
    },
    About__ourCommunity: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        marginBottom: '20px',
    },
    About__ourCommunity__text:{
        border: '2px solid #c21430',
        padding: '25px 50px',
        margin: '10px 100px 30px'
    },
    About__WhatWeDo:{
        backgroundColor: '#0567a0',
        height: '50vh',
        marginBottom: '20px',
    },
    About__Work: {
        display: 'flex',
        flexDirection: 'column',
        padding: '25px',
        alignItems: 'center',
        gap: '20px',
    },
    About__accordion:{
        backgroundColor: '#12679b',
        color: '#fff',
        padding: '15px',
        margin: 'auto',
    },
    accordion__expandLogo:{
        color: "#fff",
    },
}));
