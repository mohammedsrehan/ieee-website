import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  navbar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "95px",
    padding: "0 50px",
    backgroundColor: "#ffffff",
  },
  navbar__logo: {
    // height: "70px",
    // imageRendering: "pixelated",
  },
  navbar__list: {
    display: "flex",
    flex: "70%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  navbar__list__listItem: {
    listStyleType: "none",
    fontSize: "20px",
    padding: "3px 0",
    borderTop: "4px solid transparent",
    "&:hover": {
      borderTop: "4px solid #12679b",
    },
  },
  navbar__list__listItem__link: {
    textDecoration: "none",
    color: "#12679b",
    fontWeight: "500",
  },

  subItem: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  subListItem: {
    position: "absolute",
    display: "none",
    width: "max-content",
    textAlign: "center",
    padding: "20px",
    top: "30px",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: '10',
  },
  hover: {
    position: "relative",
    "&:hover > .subListItem": {
      display: "block",
    },
  },
  button: {
    display: "none",
  },
  nested: {
    paddingLeft: "50px",
  },
  text: {
    textDecoration: "none",
    color: "#ffffff",
  },
  mobile: {
    width: '250px',
    backgroundColor: '#12679b',
    height: "100vh",
  },
  [theme.breakpoints.down("sm")]: {
    navbar: {
      height: "75px",
      justifyContent: "space-between",
      position: "relative",
    },
    navbar__logo: {
      height: "50px",
    },
    button: {
      display: "inline-block",
    },
    navbar__list: {
      display: "none",
    },
    navbar__list__listItem: {
      padding: "10px",
    },
    navbar__list__listItem__link: {
      color: "#ffffff",
    },
    buttonR: {
      color: '#ffffff',
    },
  },
}));
