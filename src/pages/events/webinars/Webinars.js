import { Container, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./style";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import WebinarCard from "../../../components/webinarCard/webinarCard";
import Profile from "../../../components/profile/profile";

import "./style.js";
import CreateWebinar from "../../../components/webinarCard/CreateWebinar";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../../config/firebaseConfig";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/userSlice";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const Webinars = () => {
  const classes = useStyles();

  const [events, loading, error] = useCollection(
    db.collection("events").orderBy("date", "asc")
  );
  const user = useSelector(selectUser);

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.webinars}>
        <Container
          className={classes.container}
          maxWidth={false}
          disableGutters={true}
        >
          <div className={classes.header}>
            <Typography variant="h4">OUR ORATORS</Typography>
          </div>
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showThumbs={false}
            interval={5000}
            className={classes.carousel}
          >
            <div className={classes.orators}>
              <div className={classes.orators__box}>
                <Profile
                  image="https://ik.imagekit.io/ieeensakcet/profiles/tr:w-150/Mr._Marc_Einstien.png"
                  name="Mr Marc Einstien"
                  designation="Tele communicatiions and Digital Devices"
                />
              </div>
              <div className={classes.orators__box}>
                <Profile
                  image="https://ik.imagekit.io/ieeensakcet/profiles/tr:w-150/Mr.BN_Suresh.png"
                  name="Dr B N Suresh"
                  designation="Chancellor Indian Institute Space and Science Tech"
                />
              </div>
              <div className={classes.orators__box}>
                <Profile
                  image="https://ik.imagekit.io/ieeensakcet/profiles/tr:w-150/Ms_Fatima_Bilgrami.png"
                  name="Ms Fatima Bilgrami"
                  designation="Financial Services | Professional HR Recruiter"
                />
              </div>
              <div className={classes.orators__box}>
                <Profile
                  image="https://ik.imagekit.io/ieeensakcet/profiles/tr:w-150/ms.Kathy_Giori.png"
                  name="Ms Kathy Giori"
                  designation="EdTech Entrepreneur and Strategic Industry Advisor"
                />
              </div>
            </div>
            <div className={classes.orators}>
              <div className={classes.orators__box}>
                <Profile
                  image="https://ik.imagekit.io/ieeensakcet/profiles/tr:w-150/Mr.aravind_Voruganti.png"
                  name="Mr Aravind Voruganti"
                  designation="Vice President Blockchain Practice and Products | IDS inc"
                />
              </div>
              <div className={classes.orators__box}>
                <Profile
                  image="https://ik.imagekit.io/ieeensakcet/profiles/tr:w-150/Mr.Vijay_Pravin_Maharajan.png"
                  name="Mr.Vijay Pravin Maharajan"
                  designation="Data Scientist | TedX Speaker Data Analytics Expert | Seimens"
                />
              </div>
              <div className={classes.orators__box}>
                <Profile
                  image="https://ik.imagekit.io/ieeensakcet/profiles/tr:w-150/ms.Maleeha_Masih.png"
                  name="Ms Maleeha Masih"
                  designation="President | AIESEC Hyderabad Human Resources Consultant | SYKES"
                />
              </div>
              <div className={classes.orators__box}>
                <Profile
                  image="https://ik.imagekit.io/ieeensakcet/profiles/tr:w-150/MR.Nikeelu_Gunda.png"
                  name="Mr Nikeelu Gunda"
                  designation="Entrepreneur | Founder of Digital Connect Marketing at TWorks"
                />
              </div>
            </div>
            <div className={classes.orators}>
              <div className={classes.orators__box}>
                <Profile
                  image="https://ik.imagekit.io/ieeensakcet/profiles/tr:w-150/Mr.Santosh_Chaluvadi.png"
                  name="Mr.Santosh Chaluvadi"
                  designation="Founder & CEO  | Supraja Technologies"
                />
              </div>
              <div className={classes.orators__box}>
                <Profile
                  image="https://ik.imagekit.io/ieeensakcet/profiles/tr:w-150/Dr.Salman_Abdul_Moiz_rP5Xas2I9.png"
                  name="Dr.Salman Abdul Moiz"
                  designation="Professor(SCIS) | University of Hyderabad"
                />
              </div>
              <div className={classes.orators__box}>
                <Profile
                  image="https://ik.imagekit.io/ieeensakcet/profiles/tr:w-150/Mr.Viiveck_verma.png"
                  name="Mr.Viiveck Verma"
                  designation="Founder | Upsurge Global Senior Advisor"
                />
              </div>
              <div className={classes.orators__box}>
                <Profile
                  image="https://ik.imagekit.io/ieeensakcet/profiles/tr:w-150/Mrs.Syeda_Zainab_Fatima.png"
                  name="Mrs.Syeda Zainab Fatima"
                  designation="Founder Goal Achieverz"
                />
              </div>
            </div>
          </Carousel>
        </Container>
        {user ? <CreateWebinar /> : ""}
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <span>Collection: Loading...</span>}
        <div className={classes.cards}>
          {events?.docs.map((info) => (
            <WebinarCard
              key={info.id}
              title={info.data().title}
              speakerName={info.data().speakerName}
              speakerDetails={info.data().speakerDetails}
              eventDescription={info.data().eventDescription}
              date={info.data().date}
              image={info.data().image}
            />
          ))}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Webinars;
