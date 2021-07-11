import { Avatar, Button, Link, Paper, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./style";
import { Link as RouterLink } from "react-router-dom";

import mags from "../../../images/cs/mags.webp";
import library from "../../../images/cs/library.webp";
import price from "../../../images/cs/price.webp";
import contacts from "../../../images/cs/contacts.webp";
import community from "../../../images/cs/community.webp";

import Profile from "../../../components/profile/profile";

import csLogo from "../../../images/homePage/IEEE-CS_Logo.png";
import { cs } from "../../../data/profile";

const Cs = () => {
  const classes = useStyles();
  return (
    <div className={classes.cs}>
      <section className={classes.cs__groupPhoto}>
        <div className={classes.cs__groupPhoto__container}>
          <img
            src="https://ik.imagekit.io/ieeensakcet/tr:w-1200/csGroup"
            alt="grpPhoto"
            className={classes.cs__groupPhoto__container__image}
          />
        </div>
        <div className={classes.header}>
          <div className={classes.header__content}>
            <div className={classes.logo}>
              <img src={csLogo} alt="csLogo" className={classes.logo__image} />
            </div>
            <div className={classes.header__text}>
              <Typography variant="h6">
                IEEE Computer Society is a professional society of IEEE. Its
                purpose and scope is “to advance the theory, practice, and
                application of computer and information processing science and
                technology” and the “professional standing of its members.”
              </Typography>
              <Link
                href="https://www.computer.org/"
                rel="noopener"
                target="_blank"
              >
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  className={classes.button}
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className={classes.cs__joinus}>
        <Typography variant="h4" className={classes.cs__joinus__text}>
          "Our goal is to encourage involvement, and provide opportunities for
          students to build valuable skills."
        </Typography>
        <RouterLink to="/joinus" className={classes.link}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.Joinus__button}
          >
            Join Us
          </Button>
        </RouterLink>
      </section>
      <section className={classes.cs__benefits}>
        <Typography variant="h4" className={classes.cs__benefits__text}>
          CS MEMBERSHIP OFFERS
        </Typography>
        <div className={classes.cs__benefits__cards}>
          <Paper elevation={8} className={classes.cs__benefits__cards__paper}>
            <img src={mags} alt="mags" />
            <Typography variant="body1">
              Computer Magazine, our flagship publication (12 digital issues)
            </Typography>
          </Paper>
          <Paper elevation={8} className={classes.cs__benefits__cards__paper}>
            <img src={library} alt="library" />
            <Typography variant="body1">
              Computer Society Digital Library
            </Typography>
          </Paper>
          <Paper elevation={8} className={classes.cs__benefits__cards__paper}>
            <img src={price} alt="price" />
            <Typography variant="body1">
              Member pricing on optional magazines and transactions
            </Typography>
          </Paper>
          <Paper elevation={8} className={classes.cs__benefits__cards__paper}>
            <img src={contacts} alt="contacts" />
            <Typography variant="body1">Make professional contacts</Typography>
          </Paper>
          <Paper elevation={8} className={classes.cs__benefits__cards__paper}>
            <img src={community} alt="community" />
            <Typography variant="body1">
              Access more than 40 technical communities.
            </Typography>
          </Paper>
          <Paper elevation={8} className={classes.cs__benefits__cards__paper}>
            <img src={library} alt="library" />
            <Typography variant="body1">
              Online professional programs with certifiaction for all.
            </Typography>
          </Paper>
        </div>
      </section>
      <section className={classes.cs__website}>
        <Typography variant="h5">
          To visit IEEE Hyderabad section CS Chapter website
        </Typography>
        <Link
          href="https://ieeehyderabad.org/chapters-ag/computer-society"
          target="_blank"
          rel="noopener"
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.Joinus__button}
          >
            Click Here
          </Button>
        </Link>
      </section>
      <section className={classes.cs__team}>
        <Typography variant="h4" className={classes.cs__team__text}>Meet The Team</Typography>
        <div className={classes.cs__team__members}>
          {cs.map((person) => (
            <Profile 
              key = {person.name}
              name = {person.name}
              designation = {person.designation}
              emailURL = {person.emailURL}
              linkedInURL = {person.linkedInURL}
              image = {person.image}
            />

          ))}
        </div>
      </section>
      <section className={classes.cs__message}>
        <Typography variant="h4">ADVISOR MESSAGE</Typography>
        <div className={classes.cs__message__content}>
          <div className={classes.cs__message__content__person}>
            <Avatar className={classes.cs__message__content__person__image} src="https://ik.imagekit.io/ieeensakcet/profiles/tr:w-150/asma_mam_tbqioU5dh.png"/>
            <Typography variant="h6">Ms Asma Mehdia</Typography>
          </div>
          <Typography
            variant="subtitle1"
            className={classes.cs__message__content__text}
          >
            Joining IEEE is due to the fact that,you can have the smartest
            people in the world around you,but without collaboration the
            technology is not going to evolve. As a member of CS, I find the
            membership invaluable source of information and conduit for growth.
            I believe for lasting contribution to a discipline, you really need
            to have an organization like IEEE behind you.
          </Typography>
        </div>
      </section>
    </div>
  );
};

export default Cs;
