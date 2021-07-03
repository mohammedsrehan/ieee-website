import { Avatar, Button, Link, Paper, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./style";
import { Link as RouterLink } from "react-router-dom";

import award from "../../../images/ras/award.png";
import discount from "../../../images/ras/discount.png";
import research from "../../../images/ras/research.png";
import resource from "../../../images/ras/resource.png";
import speak from "../../../images/ras/speak.png";
import volunteer from "../../../images/ras/volunteer.png";
import groupPhoto from "../../../images/ras/rasGroup.webp";

import Profile from "../../../components/profile/profile";

import rasLogo from "../../../images/homePage/ieee-ras-logo.png";
import { ras } from "../../../data/profile";

const Ras = () => {
  const classes = useStyles();
  return (
    <div className={classes.ras}>
      <section className={classes.ras__groupPhoto}>
        <div className={classes.ras__groupPhoto__container}>
          <img
            src={groupPhoto}
            alt="grpPhoto"
            className={classes.ras__groupPhoto__container__image}
          />
        </div>
        <div className={classes.header}>
          <div className={classes.header__content}>
            <div className={classes.logo}>
              <img src={rasLogo} alt="csLogo" className={classes.logo__image} />
            </div>
            <div className={classes.header__text}>
              <Typography variant="h6">
                The IEEE Robotics and Automation Society (IEEE RAS) is a
                professional society of the IEEE that supports the development
                and the exchange of scientific knowledge in the fields of
                robotics and automation, including applied and theoretical
                issues.
              </Typography>
              <Link
                href="https://www.ieee-ras.org/"
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
      <section className={classes.ras__joinus}>
        <Typography variant="h4" className={classes.ras__joinus__text}>
          We strive to promote the fields of robotics and automation as a career
          and bring awareness and growth among the members of our society
          through curated events and activities.
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
      <section className={classes.ras__benefits}>
        <Typography variant="h4" className={classes.ras__benefits__text}>
          RAS MEMBERSHIP OFFERS
        </Typography>
        <div className={classes.ras__benefits__cards}>
          <Paper elevation={8} className={classes.ras__benefits__cards__paper}>
            <img src={speak} alt="speak" />
            <Typography variant="body1">
              Access to exclusive magazines, transactions and journals
            </Typography>
          </Paper>
          <Paper elevation={8} className={classes.ras__benefits__cards__paper}>
            <img src={research} alt="research" />
            <Typography variant="body1">
              Get involved with 44 technical co​mittees to work on similar goals
            </Typography>
          </Paper>
          <Paper elevation={8} className={classes.ras__benefits__cards__paper}>
            <img src={discount} alt="discount" />
            <Typography variant="body1">
              Get discounts on RAS events and publications
            </Typography>
          </Paper>
          <Paper elevation={8} className={classes.ras__benefits__cards__paper}>
            <img src={award} alt="award" />
            <Typography variant="body1">
              Get recognized for your outstanding work and efforts{" "}
            </Typography>
          </Paper>
          <Paper elevation={8} className={classes.ras__benefits__cards__paper}>
            <img src={resource} alt="resource" />
            <Typography variant="body1">
              Access to highly valued technical resource
            </Typography>
          </Paper>
          <Paper elevation={8} className={classes.ras__benefits__cards__paper}>
            <img src={volunteer} alt="volunteer" />
            <Typography variant="body1">
              Participate in organising events and activities
            </Typography>
          </Paper>
        </div>
      </section>
      <section className={classes.ras__team}>
        <Typography variant="h4" className={classes.ras__team__text}>
          Meet The Team
        </Typography>
        <div className={classes.ras__team__members}>
          {ras.map((person) => (
            <Profile
              key={person.name}
              name={person.name}
              designation={person.designation}
              emailURL={person.emailURL}
              linkedInURL={person.linkedInURL}
              image={person.image}
            />
          ))}
        </div>
      </section>
      <section className={classes.ras__message}>
        <Typography variant="h4">ADVISOR MESSAGE</Typography>
        <div className={classes.ras__message__content}>
          <div className={classes.ras__message__content__person}>
            <Avatar className={classes.ras__message__content__person__image} />
            <Typography variant="h6">Ms Shanila Mahreen</Typography>
          </div>
          <Typography
            variant="subtitle1"
            className={classes.ras__message__content__text}
          >
            We are in an era where the extent of development relies on machines.
            Today, organizations with the help of robotics and automation can
            fulfil their targets in less time with greater output. Indeed this
            has been made possible with the innovations in the fields of
            robotics and automation. IEEE RAS is a community that is striving to
            the needs of the hour and is creating a major impact in the fields
            of robotics and automation to cater for the needs of humanity. As an
            advisor to the IEEE RAS chapter in our college, I wish to extend the
            opportunities and benefits to the students and faculty members of
            our institution.
          </Typography>
        </div>
      </section>
    </div>
  );
};

export default Ras;
