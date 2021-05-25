import { Container, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./style";

import WebinarCard from "../../../components/webinarCard/webinarCard";

import "./style.js";
import { webinars } from "../../../data/webinars";

const Webinars = () => {
  const classes = useStyles();

  return (
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
  );
};

export default Webinars;
