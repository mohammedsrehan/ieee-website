import { Container, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./style";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";

import WebinarCard from "../../../components/webinarCard/webinarCard";

import "./style.js";
import CreateWebinar from "../../../components/webinarCard/CreateWebinar";
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from "../../../config/firebaseConfig";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/userSlice";


let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const Webinars = () => {
  const classes = useStyles();

  const [events, loading, error] = useCollection(db.collection('events'))
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
        </Container>
        { user ?
          <CreateWebinar /> : ''
        }
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
