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
import { webinars } from "../../../data/webinars";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const Webinars = () => {
  const classes = useStyles();

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
        <div className={classes.cards}>
          {webinars.map((info) => (
            <WebinarCard
              title={info.title}
              speakerName={info.speakerName}
              speakerDetails={info.speakerDetails}
              eventDescription={info.eventDescription}
              date={info.date}
              image={info.image}
            />
          ))}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Webinars;
