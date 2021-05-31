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
    height: "100vh",
    position: "relative",
    zIndex: "-1",
  },
  mainSection: {
    width: "70%",
  },
  header: {
    position: "absolute",
    bottom: "0",
    backgroundColor: "rgba(18,103,155,0.6)",
    width: "70%",
    display: 'flex',
    padding: '25px 15%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header__text: {
    color: '#ffffff',
  },
  header__button: {
    padding: '10px 50px',
    height: 'max-content',
    borderRadius: '25px',
    color: '#12679b',
    backgroundColor: "#ffffff",
    "&:hover": {
      backgroundColor: "#c21531",
      color: '#ffffff',
    }
  },
  paper: {
    padding: "30px",
    display: "flex",
    flexDirection: "row",
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
  event : {
    margin: '25px 0px'
  },
  events: {
    display: "flex",
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    gap: "25px",
    margin: "20px 0px",
  },
  events_cards: {
    position: "relative",
    width: "48%",
    // flex: '1 0 auto',
    // width: "max-width",
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
  quizzes: {
    gridColumn: "1/3",
  },
  img: {
    maxHeight: "100%",
    minWidth: '50%'
  },
  ourChapters: {
    display: "flex",
    gap: '30px',
    flexDirection: "column",
    alignItems: "center",
    margin: '30px 0',
  },
  chapter_cards: {
    display: "flex",
    width: "100%",
    justifyContent: 'space-between',
  },
  chapters: {
    padding: "20px",
    borderRadius: "15px",
  },
  chapter_logo: {
    height: "150px",
    width: '250px',
    objectFit: 'scale-down'
  },
  cards: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "40px",
    margin: "50px",
  },
  card: {
    width: "120px",
    height: "100px",
    padding: "25px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px",
  },
  red:{
    color: '#ff4040'
  },
  bottomContainer: {
    width: "100%",
    backgroundColor: "#12679b",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "25px",
    paddingBottom: '40px',
    borderBottom: '2px solid #ffffff'
  },
  text: {
    textAlign: 'center',
    width: '70%',
    color: '#ffffff',
  },
  button: {
    padding: '10px 40px',
    color: '#12679b',
    backgroundColor: "#ffffff",
    "&:hover": {
      backgroundColor: "#c21531",
      color: '#ffffff',
    }
  },

}));
