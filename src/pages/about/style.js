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
    About__about__text:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    About__about__text__header:{
        color: '#12679b',
        fontSize: '1.8rem',
    },
    About__about__image:{
        minWidth: '50%',
        maxHeight: '100%',
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
    About__ourCommunity__header:{
        color: '#c21531',
        borderBottom: '2px solid #000',
    },
    About__ourCommunity__pyramid:{
        width: '100%',
        padding: '0px 150px'
    },
    About__ourCommunity__text:{
        border: '3px solid #12679b',
        padding: '25px 50px',
        margin: '10px 100px 30px'
    },
    About__WhatWeDo:{
        backgroundColor: '#0567a0',
        marginBottom: '20px',
        padding: '20px 50px',
        textAlign: 'center',
    },
    About__WhatWeDo__header:{
        color: '#fff'
    },
    About__WhatWeDo__timeline:{
        width: '100%',
        alignItems: 'center',
    },
    About__WhatWeDo__paper:{
        width: '250px',
        padding: '10px',
    },
    About__Work: {
        display: 'flex',
        flexDirection: 'column',
        padding: '25px',
        alignItems: 'center',
        gap: '20px',
    },
    About__Work__header:{
        color: '#c21531',
        borderBottom: '2px solid #000',
    },
    About__Work__image:{
        width: '900px',
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
    [theme.breakpoints.down('md')]: {
        About__about:{
            flexDirection: 'column',
        }
    },
    [theme.breakpoints.down('sm')]: {
        About__ourCommunity__pyramid:{
            padding: '0px 50px'
        },
        About__ourCommunity__text:{
            padding: '25px',
            margin: '10px 50px'
        },
        About__WhatWeDo:{
            padding: '20px 0px',
        },
        About__Work__image:{
            maxWidth: '100%',
            minHeight: '100%',
        },
    },
    [theme.breakpoints.down('xs')]: {
        About__ourCommunity__pyramid:{
            padding: '0px 10px'
        },
        About__ourCommunity__text:{
            padding: '15px',
            margin: '10px 10px'
        },
        About__about__text__header:{
            fontSize: '1.5rem',
        },
    },
}));
