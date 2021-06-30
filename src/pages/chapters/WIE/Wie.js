import { Avatar, Button, Link, Paper, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./style";
import { Link as RouterLink } from "react-router-dom";

import mags from "../../../images/cs/mags.webp";
import library from "../../../images/cs/library.webp";
import price from "../../../images/cs/price.webp";
import contacts from "../../../images/cs/contacts.webp";
import community from "../../../images/cs/community.webp";
import groupPhoto from "../../../images/wie/wieGroup.webp";

import Profile from "../../../components/profile/profile";

import wieLogo from "../../../images/homePage/ieee-wie-logo.png";
import { ras } from "../../../data/profile";

const Wie = () => {
  const classes = useStyles();
  return (
    <div className={classes.cs}>
      <section className={classes.cs__groupPhoto}>
        <div className={classes.cs__groupPhoto__container}>
          <img
            src={groupPhoto}
            alt="grpPhoto"
            className={classes.cs__groupPhoto__container__image}
          />
        </div>
        <div className={classes.header}>
          <div className={classes.header__content}>
            <div className={classes.logo}>
              <img src={wieLogo} alt="csLogo" className={classes.logo__image} />
            </div>
            <div className={classes.header__text}>
              <Typography variant="h6">
                IEEE Women in Engineering (WIE) is a global network of IEEE
                members and volunteers dedicated to promoting women engineers
                and scientists, and inspiring girls around the world to follow
                their academic interests in a career in engineering and science.
              </Typography>
              <Link href="https://wie.ieee.org/" rel="noopener" target="_blank">
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
          On a mission to encourage women engineers to lead and prosper in
          technical fields and nurture their diverse talents through
          distinguished events and activities
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
          RAS MEMBERSHIP OFFERS
        </Typography>
        <div className={classes.cs__benefits__cards}>
          <Paper elevation={8} className={classes.cs__benefits__cards__paper}>
            <img src={mags} alt="mags" />
            <Typography variant="body1">
              FEATURES OPPORTUNITIES TO NETWORK, VOLUNTEER, PARTICIPATE IN LOCAL
              AND GLOBAL WIE ACTIVITIES
            </Typography>
          </Paper>
          <Paper elevation={8} className={classes.cs__benefits__cards__paper}>
            <img src={library} alt="library" />
            <Typography variant="body1">
              EEE PROGRAM RECOGNISES WIE MEMBERS AND GROUPS WHO HAVE MADE AN
              OUTSTANDING CONTRIBUTION
            </Typography>
          </Paper>
          <Paper elevation={8} className={classes.cs__benefits__cards__paper}>
            <img src={price} alt="price" />
            <Typography variant="body1">
              DISCOUNTED REGISTRATIONS TO THE ANNUAL IEEE-WIE INTERNATIONAL
              LEADERSHIP CONFERENCES AND OTHER EVENTS.
            </Typography>
          </Paper>
          <Paper elevation={8} className={classes.cs__benefits__cards__paper}>
            <img src={contacts} alt="contacts" />
            <Typography variant="body1">
              IEEE PROVIDES GRANTS FOR IEEE-WIE MEMBERS TO ATTEND AND PRESENT AT
              SPONSORED CONFERENCES AND EVENTS
            </Typography>
          </Paper>
          <Paper elevation={8} className={classes.cs__benefits__cards__paper}>
            <img src={community} alt="community" />
            <Typography variant="body1">
              GET INVOLVED LOCALLY WITH AN IEEE-WIE AFFINITY GROUP DISCOVER AND
              CONNECT WITH YOUR PEERS Volunteer
            </Typography>
          </Paper>
          <Paper elevation={8} className={classes.cs__benefits__cards__paper}>
            <img src={library} alt="library" />
            <Typography variant="body1">
              IEEE IS PLEASED TO OFFER PRE-UNIVERSITY, UNDERGRADUATE AND
              GRADUATE STUDENTS SCHOLARSHIPS.
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
        <Typography variant="h4" className={classes.cs__team__text}>
          Meet The Team
        </Typography>
        <div className={classes.cs__team__members}>
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
      <section className={classes.cs__message}>
        <Typography variant="h4">ADVISOR MESSAGE</Typography>
        <div className={classes.cs__message__content}>
          <div className={classes.cs__message__content__person}>
            <Avatar className={classes.cs__message__content__person__image} />
            <Typography variant="h6">Ms Firdous Rehana</Typography>
          </div>
          <Typography
            variant="subtitle1"
            className={classes.cs__message__content__text}
          >
            In the context of Engineering, women play an essential role. When
            women are empowered with access to equal rights and opportunities,
            it results in the improvement of prospects for present and future
            generations. I believe that IEEE WIE is a community that greatly
            understands and promotes women's empowerment in the fields of STEM
            and all women should be part of it.
          </Typography>
        </div>
      </section>
    </div>
  );
};

export default Wie;
