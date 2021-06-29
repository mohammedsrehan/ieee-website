import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  cs: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "30px",
  },
  cs__groupPhoto: {
    width: "100%",
    height: "100vh",
    backgroundColor: "#1267",
    position: "relative",
  },
  header: {
    position: "absolute",
    bottom: "0px",
    width: "100%",
    background: "rgba(255,255,255,0.6)",
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
  button: {
    backgroundColor: "#faa41a",
    marginTop: "20px",
  },
  cs__joinus: {
    textAlign: "center",
    margin: "50px auto",
    width: "60%",
    color: "#faa41a",
  },
  Joinus__button: {
    marginTop: "20px",
    backgroundColor: "#000",
    borderRadius: "25px",
  },
  cs__benefits: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "25px",
    padding: "30px 0px",
    backgroundColor: "#faa41a",
    width: "100%",
  },
  cs__benefits__text: {
    borderBottom: "3px solid #000",
  },
  cs__benefits__cards: {
    width: "80%",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "25px",
  },
  cs__benefits__cards__paper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    padding: "40px",
  },
  cs__website: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#faa41a",
    width: "100%",
    gap: "50px",
    padding: "50px",
  },
  cs__team: {
    backgroundImage:
      "radial-gradient(circle at 30% 97%, rgba(4, 4, 4,0.06) 0%, rgba(4, 4, 4,0.06) 33.333%,rgba(4, 4, 4,0.06) 33.333%, rgba(4, 4, 4,0.06) 66.666%,rgba(3, 3, 3,0.06) 66.666%, rgba(3, 3, 3,0.06) 99.999%),radial-gradient(circle at 22% 20%, rgba(154, 154, 154,0.06) 0%, rgba(154, 154, 154,0.06) 33.333%,rgba(78, 78, 78,0.06) 33.333%, rgba(78, 78, 78,0.06) 66.666%,rgba(1, 1, 1,0.06) 66.666%, rgba(1, 1, 1,0.06) 99.999%),radial-gradient(circle at 67% 32%, rgba(129, 129, 129,0.06) 0%, rgba(129, 129, 129,0.06) 33.333%,rgba(165, 165, 165,0.06) 33.333%, rgba(165, 165, 165,0.06) 66.666%,rgba(201, 201, 201,0.06) 66.666%, rgba(201, 201, 201,0.06) 99.999%),linear-gradient(45deg, rgb(236, 52, 23),rgb(250,164,26))",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "30px",
  },
  cs__team__members: {
    display: "flex",
    flexDirection: "row",
    color: "#fff",
    gap: "40px",
    height: "100%",
    flexWrap: "wrap",
    padding: "50px 80px",
  },
  cs__message: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "25px",
    backgroundImage:
      "radial-gradient(circle at 30% 97%, rgba(4, 4, 4,0.06) 0%, rgba(4, 4, 4,0.06) 33.333%,rgba(4, 4, 4,0.06) 33.333%, rgba(4, 4, 4,0.06) 66.666%,rgba(3, 3, 3,0.06) 66.666%, rgba(3, 3, 3,0.06) 99.999%),radial-gradient(circle at 22% 20%, rgba(154, 154, 154,0.06) 0%, rgba(154, 154, 154,0.06) 33.333%,rgba(78, 78, 78,0.06) 33.333%, rgba(78, 78, 78,0.06) 66.666%,rgba(1, 1, 1,0.06) 66.666%, rgba(1, 1, 1,0.06) 99.999%),radial-gradient(circle at 67% 32%, rgba(129, 129, 129,0.06) 0%, rgba(129, 129, 129,0.06) 33.333%,rgba(165, 165, 165,0.06) 33.333%, rgba(165, 165, 165,0.06) 66.666%,rgba(201, 201, 201,0.06) 66.666%, rgba(201, 201, 201,0.06) 99.999%),linear-gradient(45deg, rgb(236, 52, 23),rgb(250,164,26))",
  },
  cs__message__content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "50px",
    gap: "50px",
    width: "80%",
  },
  cs__message__content__person: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "15px",
  },
  cs__message__content__person__image: {
    width: "120px",
    height: "120px",
  },
  [theme.breakpoints.down("md")]: {
    header__content: {
      width: "100%",
    },
    cs__joinus: {
      width: "90%",
    },
  },
  [theme.breakpoints.down("sm")]: {
    cs__message__content: {
      flexDirection: "column",
      padding: "50px 20px",
      gap: "20px",
    },
  },
  [theme.breakpoints.down("xs")]: {
    cs__team__members: {
        padding: "25px",
      },
  },
}));
