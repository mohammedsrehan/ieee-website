import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  home: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    alignItems: "center",
    margin: "auto",
    marginBottom: "20px",
  },
  container: {
    width: "100%",
    backgroundColor: "#00b0ff",
    height: "100vh",
    position: "relative",
    zIndex: "-1",
  },
  mainSection: {
    width: '70%',
  },
  header: {
    position: "absolute",
    bottom: "0",
    backgroundColor: "#12679b",
    width: "100%",
    opacity: "0.5",
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
  events: {
    display: "grid",
    gridTemplateColumns: '1fr 1fr',
    placeItems: 'center',
    gap: "20px",
  },
  events_cards: {
    position: "relative",
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
    padding: "5px"
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
      height: '230px',
  },
  ourChapters: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  chapter_cards: {
      display: "flex",
      gap: "20px",
  },
  chapters: {
    padding: '20px',
    borderRadius: '15px',
  },
  chapter_logo: {
      height: "150px",
  },
  cards: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: "20px",
      margin: "50px"
  },
  card: {
      width: '120px',
      height: '100px',
      padding: '20px',
      textAlign: 'center',
  }
}));
