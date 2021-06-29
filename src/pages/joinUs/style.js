import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  JoinUs: {
    color: "#fff",
    backgroundColor: "#e6e9eb",
  },
  JoinUs__form: {
    backgroundColor: "#3470a4",
    width: "100%",
    margin: "auto",
    padding: "25px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "50px",
    textAlign: "center",
  },
  JoinUs__form__text: {
    lineHeight: "45px",
    width: "50%",
  },
  JoinUs__form__button: {
    backgroundColor: "#fff",
    borderRadius: "20px",
    padding: "10px 20px",
    fontWeight: "600",
  },
  JoinUs__benefits: {
    backgroundColor: "#3470a4",
    display: "grid",
    // gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gridTemplateColumns: "repeat(4, 1fr)",
    "&>div:nth-child(n+1):nth-child(odd):nth-child(-n+4)": {
      backgroundColor: "#e6e9eb",
      color: "#000",
    },
    "&>div:nth-child(n+5):nth-child(even):nth-child(-n+8)": {
      backgroundColor: "#e6e9eb",
      color: "#000",
    },
  },
  JoinUs__benefits__benefit: {
    display: "grid",
    gap: "15px",
    placeItems: "center",
    padding: "80px 40px",
    textAlign: "center",
  },
  JoinUs__globalBenefits: {
    color: "#000",
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    textAlign: "center",
  },
  JoinUs__globalBenefits__header: {
    display: "flex",
    textAlign: "center",
    alignItems: "center",
  },
  JoinUs__globalBenefits__header__text: {
    fontWeight: "600",
  },
  JoinUs__globalBenefits__link: {
    color: "#12679b",
  },
  JoinUs__testemonials: {
    width: "70%",
    margin: "auto",
    marginBottom: "25px",
  },
  JoinUs__testemonials__carousel: {
    height: "100%",
    padding: "20px",
    backgroundImage:
      "radial-gradient(circle at 99% 33%, rgba(255,255,255, 0.05) 0%, rgba(255,255,255, 0.05) 37%,transparent 37%, transparent 100%),radial-gradient(circle at 46% 16%, rgba(255,255,255, 0.05) 0%, rgba(255,255,255, 0.05) 43%,transparent 43%, transparent 100%),radial-gradient(circle at 99% 25%, rgba(255,255,255, 0.05) 0%, rgba(255,255,255, 0.05) 22%,transparent 22%, transparent 100%),radial-gradient(circle at 57% 88%, rgba(255,255,255, 0.05) 0%, rgba(255,255,255, 0.05) 86%,transparent 86%, transparent 100%),radial-gradient(circle at 82% 78%, rgba(255,255,255, 0.05) 0%, rgba(255,255,255, 0.05) 22%,transparent 22%, transparent 100%),linear-gradient(90deg, rgb(18,103,155),rgb(18,103,155))",
  },
  JoinUs__testemonials__carousel__content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px 80px",
    gap: "30px",
  },
  JoinUs__testemonials__carousel__content__person: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flex: "0.3",
  },
  JoinUs__testemonials__carousel__content__person__image: {
    height: "150px",
    width: "150px",
  },
  JoinUs__accordion: {
    width: "70%",
    margin: "auto",
    paddingBottom: "50px",
  },
  JoinUs__accordion__accordion: {
    backgroundColor: "#12679b",
    color: "#fff",
    padding: "15px",
  },
  JoinUs__accordion__heading: {
    color: "#000",
    textAlign: "center",
    marginBottom: "30px",
  },
  JoinUs__accordion__accordion__expandLogo: {
    color: "#fff",
  },
  [theme.breakpoints.down("md")]: {
    JoinUs__accordion: {
      width: "80%",
    },
    JoinUs__form__text: {
      lineHeight: "35px",
      width: "90%",
    },
    JoinUs__testemonials: {
      width: "80%",
    },
  },
  [theme.breakpoints.down("sm")]: {
    JoinUs__benefits__benefit__image: {
      width: "120px",
    },
    JoinUs__accordion: {
      width: "90%",
    },
    JoinUs__benefits: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    JoinUs__testemonials: {
      width: "90%",
    },
    JoinUs__testemonials__carousel__content: {
      flexDirection: "column",
      gap: "10px",
    },
    JoinUs__testemonials__carousel__content__person__image: {
      height: "100px",
      width: "100px",
    },
  },
  [theme.breakpoints.down("xs")]: {
    JoinUs__benefits: {
      gridTemplateColumns: "repeat(1, 1fr)",
    },
    JoinUs__testemonials__carousel__content: {
      padding: "20px",
    },
  },
}));
