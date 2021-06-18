import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    JoinUs: {
        color: '#fff',
        backgroundColor: '#e6e9eb'
    },
    JoinUs__form: {
        backgroundColor: '#3470a4',
        width: '100%',
        margin: 'auto',
        padding: '25px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '50px',
        textAlign: 'center',
    },
    JoinUs__form__text:{
        lineHeight: '45px',
        width: '50%'
    },
    JoinUs__form__button:{
        backgroundColor: '#fff',
        borderRadius: '20px',
        padding: '10px 20px',
        fontWeight: '600',
    },
    JoinUs__benefits:{
        backgroundColor: '#3470a4',
        display: 'grid',
        // gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gridTemplateColumns: 'repeat(4, 1fr)',
        
    },
    JoinUs__benefits__benefit__grey:{
        backgroundColor: '#e6e9eb',
        color: '#000'
    },
    JoinUs__benefits__benefit__blue:{
        backgroundColor: '#3470a4',
        color: '#fff',
    },
    JoinUs__benefits__benefit:{
        display: 'grid',
        gap: '15px',
        placeItems: 'center',
        padding: '80px 40px',
        textAlign: 'center',
    },
    JoinUs__globalBenefits:{
        color: '#000',
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        textAlign: 'center',
    },
    JoinUs__globalBenefits__header:{
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
    },
    JoinUs__globalBenefits__header__text:{
        fontWeight: '600',
    },
    JoinUs__globalBenefits__link:{
        color: '#12679b',
    },
    JoinUs__accordion:{
        width: '70%',
        margin: 'auto',
        paddingBottom: '50px',
    },
    JoinUs__accordion__accordion:{
        backgroundColor: '#12679b',
        color: '#fff',
        padding: '15px',
    },
    JoinUs__accordion__heading:{
        color: '#000',
        textAlign: 'center',
        marginBottom: '30px',
    },
    JoinUs__accordion__accordion__expandLogo:{
        color: "#fff",
    },
    [theme.breakpoints.down('md')]: {
        JoinUs__accordion:{
            width: '80%',
        },
        JoinUs__form__text:{
            lineHeight: '35px',
            width: '90%',
        },
        
    },
    [theme.breakpoints.down('sm')]: {
        JoinUs__benefits__benefit__image:{
            width: '120px',
        },
        JoinUs__accordion:{
            width: '90%',
        },
        JoinUs__benefits:{
            gridTemplateColumns: 'repeat(2, 1fr)',
        },
    },
    [theme.breakpoints.down('xs')]: {
        JoinUs__benefits:{
            gridTemplateColumns: 'repeat(1, 1fr)',
        },
    }

}));
