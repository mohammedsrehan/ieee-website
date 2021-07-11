import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  home: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    alignItems: "center",
    margin: "auto",
  },
  container: {
    width: "100%",
    backgroundColor: "#00b0ff",
    position: "relative",
    display: "flex",
    flexDirection: "column",
  },
  container__image: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    maxHeight: "100%",
    minWidth: "100%",
  },
  mainSection: {
    width: "70%",
  },
  header: {
    position: "absolute",
    bottom: "0",
    backgroundColor: "rgba(18,103,155,0.6)",
    width: "100%",
    display: "flex",
    padding: "25px 15%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header__text: {
    color: "#ffffff",
  },
  header__button: {
    padding: "10px 50px",
    height: "max-content",
    borderRadius: "25px",
    color: "#12679b",
    backgroundColor: "#ffffff",
    "&:hover": {
      backgroundColor: "#c21531",
      color: "#ffffff",
    },
  },
  paper: {
    padding: "30px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  mission: {
    display: "flex",
    gap: "20px",
    flexDirection: "column",
    alignItems: "center",
  },
  headers: {
    margin: "15px 20px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  image: {
    width: "150px",
    height: "auto",
  },
  // event: {
  //   margin: "25px 0px",
  // },
  // event__text: {
  //   textAlign: "center",
  //   textShadow:
  //     "1px 0px 1px #ccc, 0px 1px 1px #eee, 2px 1px 1px #ccc, 1px 2px 1px #eee, 3px 2px 1px #ccc, 2px 3px 1px #eee, 4px 3px 1px #ccc, 3px 4px 1px #eee, 5px 4px 1px #ccc, 4px 5px 1px #eee, 6px 5px 1px #ccc, 5px 6px 1px #eee, 7px 6px 1px #ccc",
  //   marginBottom: "20px",
  // },
  // event__paper:{
  //   display: "flex",
  //   flexDirection: "row",
  //   padding: '10px',
  // },
  // paper__content:{
  //   margin: '20px',
  //   display: 'flex',
  //   flexDirection: 'column',
  //   gap: '15px',
  // },
  events__header:{
    margin: '20px auto',
    textAlign: "center",
    textShadow:
      "1px 0px 1px #ccc, 0px 1px 1px #eee, 2px 1px 1px #ccc, 1px 2px 1px #eee, 3px 2px 1px #ccc, 2px 3px 1px #eee, 4px 3px 1px #ccc, 3px 4px 1px #eee, 5px 4px 1px #ccc, 4px 5px 1px #eee, 6px 5px 1px #ccc, 5px 6px 1px #eee, 7px 6px 1px #ccc",
  },
  events: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    gap: "25px",
    margin: "20px 0px",
  },
  events_cards: {
    position: "relative",
    width: "48%",
  },
  events_cards_image: {
    display: "flex",
    flexDirection: "row",
  },
  events_cards_header: {
    backgroundColor: "rgba(20,26,43,0.8)",
    position: "absolute",
    bottom: "0",
    width: "100%",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  font: {
    color: "#ffffff",
    padding: "5px",
  },
  font_viewAll: {
    color: "#ffffff",
    position: "absolute",
    right: "15px",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
  quizzes: {
    gridColumn: "1/3",
  },
  img: {
    maxHeight: "100%",
    minWidth: "50%",
  },
  ourChapters: {
    display: "flex",
    gap: "30px",
    flexDirection: "column",
    alignItems: "center",
    margin: "30px 0",
  },
  ourChapters__header: {
    textShadow:
      "1px 0px 1px #ccc, 0px 1px 1px #eee, 2px 1px 1px #ccc, 1px 2px 1px #eee, 3px 2px 1px #ccc, 2px 3px 1px #eee, 4px 3px 1px #ccc, 3px 4px 1px #eee, 5px 4px 1px #ccc, 4px 5px 1px #eee, 6px 5px 1px #ccc, 5px 6px 1px #eee, 7px 6px 1px #ccc",
  },
  chapter_cards: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    justifyContent: "space-around",
    width: "100%",
  },
  chapters: {
    display: "flex",
    padding: "20px",
    borderRadius: "15px",
    height: "120px",
  },
  chapter_logo: {
    maxHeight: "100%",
    minWidth: "100%",
    objectFit: "contain",
  },
  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
    gap: "40px",
    margin: "50px",
    width: "70%",
  },
  card: {
    height: "140px",
    padding: "25px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px",
  },
  red: {
    color: "#ff4040",
  },
  bottomContainer: {
    width: "100%",
    backgroundColor: "#12679b",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "25px",
    paddingBottom: "40px",
    borderBottom: "2px solid #ffffff",
  },
  text: {
    textAlign: "center",
    width: "70%",
    color: "#ffffff",
  },
  button: {
    padding: "10px 40px",
    color: "#12679b",
    backgroundColor: "#ffffff",
    "&:hover": {
      backgroundColor: "#c21531",
      color: "#ffffff",
    },
  },
  [theme.breakpoints.down("md")]: {
    container__image: {
      backgroundSize: "contain",
    },
  },
  [theme.breakpoints.down("sm")]: {
    button: {
      padding: "10px 20px",
      minWidth: "max-content",
    },
    header: {
      padding: "5%",
      position: 'static',
    },
    mainSection: {
      width: "90%",
    },
    events_cards: {
      width: "80%",
    },
    cards: {
      width: "90%",
      gap: "25px",
    },
  },
  [theme.breakpoints.down("xs")]: {
    image: {
      width: "100px",
    },
    paper: {
      padding: "15px",
    },
    events_cards: {
      width: "100%",
    },
    header:{
      flexDirection: 'column',
      textAlign: "center",
      gap: '10px',
    },
    header__text: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
    },
  },
}));
