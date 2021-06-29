import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import React from "react";

import useStyles from "./style";

const CompetitionCard = ({
  title,
  subTitle,
  Details1,
  Details2,
  Details3,
  date,
  image,
}) => {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.card} raised={true}>
        <div className={classes.image__div}>
          <CardMedia className={classes.image} image={image} title="competition" />
        </div>
        <CardContent className={classes.content}>
          <div className={classes.date}>
            <Typography variant="caption" className={classes.dateContent}>
              {date}
            </Typography>
          </div>
          <div>
            <Typography variant="h6" className={classes.title}>
              {title}
            </Typography>
          </div>
          <div className={classes.Details}>
            <Typography variant="subtitle1" className={classes.prizes}>
              {subTitle}
            </Typography>
            <Typography variant="body2">{Details1}</Typography>
            <Typography variant="body2">{Details2}</Typography>
            <Typography variant="body2">{Details3}</Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default CompetitionCard;
