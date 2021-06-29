import { Avatar, Link, Typography } from "@material-ui/core";
import React from "react";

// import image from "../../images/profiles/person.jpg";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import useStyles from "./style";

function Profile({
  name,
  designation,
  linkedInURL,
  emailURL,
  image,
}) {
  const classes = useStyles();
  return (
    <div className={classes.profile}>
      <Avatar alt="Remy Sharp" src={image} className={classes.profile__image} />
      <Typography variant="h6">{name}</Typography>
      <Typography variant="button">{designation}</Typography>
      <div className={classes.profile__socialIcons}>
        <Link
          href={linkedInURL}
          target="_blank"
          rel="noopener"
          color="inherit"
        >
          <LinkedInIcon fontSize="large"/>
        </Link>
        <Link
          href={emailURL}
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
