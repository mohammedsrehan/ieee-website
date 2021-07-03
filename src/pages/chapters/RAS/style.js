
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  ras: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "30px",
  },
  ras__groupPhoto: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    backgroundColor: "#1267",
  },
  ras__groupPhoto__container:{
    display: "flex",
  },
  ras__groupPhoto__container__image: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    maxHeight: "100%",
    minWidth: "100%",
  },
  header: {
    width: "100%",
    background: "rgba(255,255,255,0.8)",
  },
  header__content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    padding: "20px",
    gap: "50px",
    width: "80%",
  },
  logo__image: {
    height: "100px",
  },
  header__text: {
    textAlign: "center",
  },
  link: {
    textDecoration: 'none',
  },
  button: {
    backgroundColor: "#88201f",
    marginTop: "20px",
  },
  ras__joinus: {
    textAlign: "center",
    margin: "50px auto",
    width: "60%",
    color: "#88201f",
  },
  ras__joinus__text: {
    marginBottom: '20px',
  },
  Joinus__button: {
    // marginTop: "20px",
    backgroundColor: "#000",
    borderRadius: "25px",
  },
  ras__benefits: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "25px",
    padding: "30px 0px",
    backgroundColor: "#88201f",
    width: "100%",
  },
  ras__benefits__text: {
    color: '#fff',
    borderBottom: "3px solid #fff",
  },
  ras__benefits__cards: {
    width: "80%",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "25px",
  },
  ras__benefits__cards__paper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    padding: "40px",
  },
  ras__team: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "30px",
  },
  ras__team__text:{
    color: '#88201f',
    borderBottom: '3px solid #88201f',
  },
  ras__team__members: {
    display: "flex",
    flexDirection: "row",
    gap: "40px",
    height: "100%",
    flexWrap: "wrap",
    padding: "50px 80px",
    textAlign: "center",
  },
  ras__message: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "25px",
    color: '#fff',
    backgroundImage: 'radial-gradient(circle at center center, rgba(49, 52, 53,0.1) 0%, rgba(49, 52, 53,0.1) 3%,transparent 3%, transparent 28%,rgba(228, 25, 216,0.1) 28%, rgba(228, 25, 216,0.1) 100%),linear-gradient(22.5deg, rgb(136,32,31) 0%,rgb(136,32,31) 31%); background-size: 27px 27px',
  },
  ras__message__content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "50px",
    gap: "50px",
    width: "80%",
    textAlign: "center",
  },
  ras__message__content__person: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "15px",
  },
  ras__message__content__person__image: {
    width: "120px",
    height: "120px",
  },
  [theme.breakpoints.down("md")]: {
    header__content: {
      width: "100%",
    },
    ras__joinus: {
      width: "90%",
    },
    ras__groupPhoto__container__image: {
      backgroundSize: "contain",
    },
  },
  [theme.breakpoints.down("sm")]: {
    ras__message__content: {
      flexDirection: "column",
      padding: "50px 20px",
      gap: "20px",
    },
    header__content: {
      flexDirection: "column",
      gap: "20px",
    },
    logo__image: {
      height: "60px",
    },
  },
  [theme.breakpoints.down("xs")]: {
    ras__team__members: {
      padding: "25px",
    },
  },
}));
