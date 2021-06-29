import React from "react";

import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";

import useStyles from "./style";

function QuizCard({ title, description, date, image }) {
  const classes = useStyles();
  return (
    <div className={classes.QuizCard}>
      <Card className={classes.card} raised={true}>
        <div className={classes.image__div}>
          <CardMedia
            className={classes.image}
            image={image}
            title="quiz"
          />
        </div>
        <CardContent className={classes.content}>
          <div>
              <Typography variant="subtitle2">
                  E-Quiz on
              </Typography>
            <Typography variant="h6" className={classes.title}>
              {title}
            </Typography>
            <Typography variant="caption">
              {date}
            </Typography>
          </div>
          <div className={classes.Details}>
            <Typography variant="body2">{description}</Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default QuizCard;
