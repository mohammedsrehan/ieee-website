import React from "react";
import { Button, Container, Paper, Typography } from "@material-ui/core";
import useStyles from "./styles";

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.home}>
      <Container
        maxWidth={false}
        className={classes.container}
        disableGutters={true}
      >
        <div className={classes.header}>
          <Typography variant="h5">IEEE STUDENT BRANCH</Typography>
          <Typography variant="body1">
            Nawab Shah Alam Khan College of Engineering and Technology
          </Typography>
          <Button variant="contained" color="primary">
            Primary
          </Button>
        </div>
      </Container>
      <Paper elevation={3} className={classes.paper}>
        <Typography variant="h6">Mission</Typography>
        <Typography variant="body2">To promote students empowerment, develop professional skills , organise diverse events and work towards IEEE's mission.</Typography>
      </Paper>
      <Paper elevation={3} className={classes.paper}>
        <Typography variant="h6">Vision</Typography>
        <Typography variant="body2">We envision offering a relevant platform to learn and seek industrial experience, personal development, social welfare and help explore various engineering fields.</Typography>
      </Paper>
    </div>
  );
}

export default Home;
