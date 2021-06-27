import { Avatar, Link, Typography } from "@material-ui/core";
import React from "react";

import image from "../../images/profiles/person.jpg";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import useStyles from "./style";

function Profile() {
  const classes = useStyles();
  return (
    <div className={classes.profile}>
      <Avatar alt="Remy Sharp" src={image} className={classes.profile__image} />
      <Typography variant="h6">Name of Person</Typography>
      <Typography variant="button">desig</Typography>
      <div className={classes.profile__socialIcons}>
        <Link
          href="https://www.linkedin.com/company/42773344/admin/"
          target="_blank"
          rel="noopener"
          color="inherit"
        >
          <LinkedInIcon fontSize="large"/>
        </Link>
        <Link
          href="mailto:mohammedrehan2426@gmail.com"
          target="_blank"
          rel="noopener"
          color="inherit"
        >
          <EmailIcon fontSize="large"/>
        </Link>
      </div>
    </div>
  );
}

export default Profile;
