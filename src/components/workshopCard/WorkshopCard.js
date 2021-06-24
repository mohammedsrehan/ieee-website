import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";

import useStyles from "./style";

const WorkshopCard = ({
  title,
  Project1,
  Project2,
  description,
  date,
  image,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.WorkshopCard}>
      <Card className={classes.card} raised={true}>
        <div className={classes.image__div}>
          <CardMedia className={classes.image} image={image} title="webinar" />
        </div>
        <CardContent className={classes.content}>
          <div className={classes.date}>
            <Typography variant="caption" className={classes.dateContent}>
              {date}
            </Typography>
          </div>
          <div>
            <Typography variant="subtitle1">Workshop On</Typography>
            <Typography variant="h6" className={classes.title}>
              {title}
            </Typography>
          </div>
          <div className={classes.speakerDetails}>
            <Typography variant="subtitle1" className={classes.name}>
              What's in the workshop
            </Typography>
            <Typography variant="body2">
              {Project1}
            </Typography>
            <Typography variant="body2">{Project2}</Typography>
          </div>
          <Typography variant="body2">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default WorkshopCard;
