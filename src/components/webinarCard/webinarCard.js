import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./style";

const WebinarCard = ({
  title,
  speakerName,
  speakerDetails,
  eventDescription,
  date,
  image,
}) => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.card} raised={true}>
        <div className={classes.image__div}>
          <CardMedia className={classes.image} image={image} title="webinar" />
        </div>
        <CardContent className={classes.content}>
          <div className={classes.date}>
            <Typography variant="body2" className={classes.dateContent}>
              {date}
            </Typography>
          </div>
          <div>
            <Typography variant="subtitle1">Webinar On</Typography>
            <Typography variant="h6" className={classes.title}>
              {title}
            </Typography>
          </div>
          <div className={classes.speakerDetails}>
            <Typography variant="subtitle1" className={classes.name}>
              {speakerName}
            </Typography>
            <Typography variant="body2">{speakerDetails}</Typography>
          </div>
          <Typography variant="body2">{eventDescription}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default WebinarCard;
