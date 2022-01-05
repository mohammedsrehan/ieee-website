import React from "react";
import { Button, Typography } from "@material-ui/core";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

//profile component
import Profile from "../../components/profile/profile";
//data file of members
import {
  excom,
  programCommittee,
  socialMediaCommittee,
  membershipCommittee,
} from "../../data/profile";

import useStyles from "./style";

const OurTeam = () => {
  const classes = useStyles();
  return (
    <div className={classes.OurTeam}>
      <section className={classes.OurTeam__headers}>
        <Typography variant="h3">OUR TEAM</Typography>
        <div className={classes.OurTeam__headers__buttons}>
          <Button
            variant="contained"
            className={classes.OurTeam__headers__committee}
            href="#ecxom"
          >
            Executive Committee
          </Button>
          <Button
            variant="contained"
            className={classes.OurTeam__headers__committee}
            href="#program"
          >
            Program Committee
          </Button>
          <Button
            variant="contained"
            className={classes.OurTeam__headers__committee}
            href="#socialMedia"
          >
            Social Media Committee
          </Button>
          <Button
            variant="contained"
            className={classes.OurTeam__headers__committee}
            href="#membership"
          >
            Membership Committee
          </Button>
        </div>
      </section>
      <section className={classes.OurTeam__group} id="excom">
        <Typography variant="h4" className={classes.OurTeam__title}>
          Executive Committee
        </Typography>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          interval={5000}
        >
          <div className={classes.Ourteam__group__team}>
            {excom.slice(0, 5).map((person) => (
              <Profile
                key={person.name}
                name={person.name}
                designation={person.designation}
                linkedInURL={person.linkedInURL}
                emailURL={person.emailURL}
                image={person.image}
              />
            ))}
          </div>
          <div className={classes.Ourteam__group__team}>
            {excom.slice(5, 11).map((person) => (
              <Profile
                key={person.name}
                name={person.name}
                designation={person.designation}
                linkedInURL={person.linkedInURL}
                emailURL={person.emailURL}
                image={person.image}
              />
            ))}
          </div>
          <div className={classes.Ourteam__group__team}>
            {excom.slice(11, 17).map((person) => (
              <Profile
                key={person.name}
                name={person.name}
                designation={person.designation}
                linkedInURL={person.linkedInURL}
                emailURL={person.emailURL}
                image={person.image}
              />
            ))}
          </div>
        </Carousel>
      </section>
      <section className={classes.OurTeam__group} id="program">
        <Typography variant="h4" className={classes.OurTeam__title}>
          Program Committee
        </Typography>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          interval={5000}
        >
          <div className={classes.Ourteam__group__team}>
            {programCommittee.slice(0, 6).map((person) => (
              <Profile
                key={person.name}
                name={person.name}
                designation={person.designation}
                linkedInURL={person.linkedInURL}
                emailURL={person.emailURL}
                image={person.image}
              />
            ))}
          </div>
          <div className={classes.Ourteam__group__team}>
            {programCommittee.slice(6, 13).map((person) => (
              <Profile
                key={person.name}
                name={person.name}
                designation={person.designation}
                linkedInURL={person.linkedInURL}
                emailURL={person.emailURL}
                image={person.image}
              />
            ))}
          </div>
        </Carousel>
      </section>
      <section className={classes.OurTeam__group} id="socialMedia">
        <Typography variant="h4" className={classes.OurTeam__title}>
          Social Media Committee
        </Typography>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          interval={5000}
        >
          <div className={classes.Ourteam__group__team}>
            {socialMediaCommittee.slice(0, 6).map((person) => (
              <Profile
                key={person.name}
                name={person.name}
                designation={person.designation}
                linkedInURL={person.linkedInURL}
                emailURL={person.emailURL}
                image={person.image}
              />
            ))}
          </div>
          <div className={classes.Ourteam__group__team}>
            {socialMediaCommittee.slice(6, 13).map((person) => (
              <Profile
                key={person.name}
                name={person.name}
                designation={person.designation}
                linkedInURL={person.linkedInURL}
                emailURL={person.emailURL}
                image={person.image}
              />
            ))}
          </div>
        </Carousel>
      </section>
      <section className={classes.OurTeam__group} id="membership">
        <Typography variant="h4" className={classes.OurTeam__title}>
          Membership Committee
        </Typography>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          interval={5000}
        >
          <div className={classes.Ourteam__group__team}>
            {membershipCommittee.slice(0, 6).map((person) => (
              <Profile
                key={person.name}
                name={person.name}
                designation={person.designation}
                linkedInURL={person.linkedInURL}
                emailURL={person.emailURL}
                image={person.image}
              />
            ))}
          </div>
          <div className={classes.Ourteam__group__team}>
            {membershipCommittee.slice(6, 13).map((person) => (
              <Profile
                key={person.name}
                name={person.name}
                designation={person.designation}
                linkedInURL={person.linkedInURL}
                emailURL={person.emailURL}
                image={person.image}
              />
            ))}
          </div>
        </Carousel>
      </section>
/*
      <section className={classes.OurTeam__group} id="alumni">
        <Typography variant="h4" className={classes.OurTeam__title}>
          ALUMNI MEMBERS
        </Typography>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          interval={5000}
        >
          <div className={classes.Ourteam__group__team}>
            {membershipCommittee.slice(0, 6).map((person) => (
              <Profile
                key={person.name}
                name={person.name}
                designation={person.designation}
                linkedInURL={person.linkedInURL}
                emailURL={person.emailURL}
                image={person.image}
              />
            ))}
          </div>
        </Carousel>
      </section>
      */
    </div>
  );
};

export default OurTeam;
