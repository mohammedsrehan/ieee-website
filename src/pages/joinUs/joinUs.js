import React from "react";
import ListIcon from "@material-ui/icons/List";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Button,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import useStyles from "./style";

import image from "../../images/profiles/person.jpg";
import network from "./images/network.webp";
import thinking from "./images/thinking.webp";

const JoinUs = () => {
  const classes = useStyles();

  return (
    <div className={classes.JoinUs}>
      <section className={classes.JoinUs__form}>
        <Typography variant="h4">BECOME AN IEEE MEMBER</Typography>
        <Typography variant="h5" className={classes.JoinUs__form__text}>
          Join a community of over 420,000 technology and engineering
          professionals united by a common desire to continuously learn,
          interact, collaborate, and innovate
        </Typography>
        <Button
          startIcon={<ListIcon />}
          size="large"
          className={classes.JoinUs__form__button}
        >
          Google Form Submission
        </Button>
      </section>
      <section className={classes.JoinUs__benefits}>
        <div
          className={`${classes.JoinUs__benefits__benefit} ${classes.JoinUs__benefits__benefit__grey}`}
        >
          <img
            src={network}
            alt="skills"
            className={classes.JoinUs__benefits__benefit__image}
          />
          <Typography variant="h6">SOFT SKILLS</Typography>
          <Typography variant="body1">
            Build your professional skills including leadership, teamwork,
            communication, and prioritization
          </Typography>
        </div>
        <div
          className={`${classes.JoinUs__benefits__benefit} ${classes.JoinUs__benefits__benefit__blue}`}
        >
          <img
            src={network}
            alt="skills"
            className={classes.JoinUs__benefits__benefit__image}
          />
          <Typography variant="h6">SOFT SKILLS</Typography>
          <Typography variant="body1">
            Build your professional skills including leadership, teamwork,
            communication, and prioritization
          </Typography>
        </div>
        <div
          className={`${classes.JoinUs__benefits__benefit} ${classes.JoinUs__benefits__benefit__grey}`}
        >
          <img
            src={network}
            alt="skills"
            className={classes.JoinUs__benefits__benefit__image}
          />
          <Typography variant="h6">SOFT SKILLS</Typography>
          <Typography variant="body1">
            Build your professional skills including leadership, teamwork,
            communication, and prioritization
          </Typography>
        </div>
        <div className={classes.JoinUs__benefits__benefit}>
          <img
            src={network}
            alt="skills"
            className={classes.JoinUs__benefits__benefit__image}
          />
          <Typography variant="h6">SOFT SKILLS</Typography>
          <Typography variant="body1">
            Build your professional skills including leadership, teamwork,
            communication, and prioritization
          </Typography>
        </div>
        <div className={classes.JoinUs__benefits__benefit}>
          <img
            src={network}
            alt="skills"
            className={classes.JoinUs__benefits__benefit__image}
          />
          <Typography variant="h6">SOFT SKILLS</Typography>
          <Typography variant="body1">
            Build your professional skills including leadership, teamwork,
            communication, and prioritization
          </Typography>
        </div>
        <div
          className={`${classes.JoinUs__benefits__benefit} ${classes.JoinUs__benefits__benefit__grey}`}
        >
          <img
            src={network}
            alt="skills"
            className={classes.JoinUs__benefits__benefit__image}
          />
          <Typography variant="h6">SOFT SKILLS</Typography>
          <Typography variant="body1">
            Build your professional skills including leadership, teamwork,
            communication, and prioritization
          </Typography>
        </div>
        <div className={classes.JoinUs__benefits__benefit}>
          <img
            src={network}
            alt="skills"
            className={classes.JoinUs__benefits__benefit__image}
          />
          <Typography variant="h6">SOFT SKILLS</Typography>
          <Typography variant="body1">
            Build your professional skills including leadership, teamwork,
            communication, and prioritization
          </Typography>
        </div>
        <div
          className={`${classes.JoinUs__benefits__benefit} ${classes.JoinUs__benefits__benefit__grey}`}
        >
          <img
            src={network}
            alt="skills"
            className={classes.JoinUs__benefits__benefit__image}
          />
          <Typography variant="h6">SOFT SKILLS</Typography>
          <Typography variant="body1">
            Build your professional skills including leadership, teamwork,
            communication, and prioritization
          </Typography>
        </div>
      </section>
      <section className={classes.JoinUs__globalBenefits}>
        <div className={classes.JoinUs__globalBenefits__header}>
          <img src={thinking} alt="thinking" />
          <Typography
            variant="h4"
            className={classes.JoinUs__globalBenefits__header__text}
          >
            STILL NOT SATISFIED?
          </Typography>
        </div>
        <Typography variant="h5">
          Check out the{" "}
          <a
            href="https://www.ieee.org/membership/benefits/index.html"
            target="_blank"
            rel="noreferrer"
            className={classes.JoinUs__globalBenefits__link}
          >
            IEEE Global Benefits
          </a>{" "}
          Finder to know more...
        </Typography>
      </section>
      <section className={classes.JoinUs__testemonials}>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          interval={5000}
        >
          <div className={classes.JoinUs__testemonials__carousel}>
            <Typography variant="h4">Testemonials</Typography>
            <div className={classes.JoinUs__testemonials__carousel__content}>
              <div
                className={
                  classes.JoinUs__testemonials__carousel__content__person
                }
              >
                <Avatar
                  alt="Remy Sharp"
                  src={image}
                  className={
                    classes.JoinUs__testemonials__carousel__content__person__image
                  }
                />
                <Typography variant="subtitle1">Name of Person</Typography>
                <Typography variant="button">desig</Typography>
              </div>
              <Typography variant="body1">
                "Our IEEE Student Branch provides networking opportunities among
                various entrepreneurs and students so that the members achieve
                problem-solving and leadership skills, this will help students
                to come up with new ideas and to determine what they are willing
                to achieve. The Student Branch teaches the students about the
                professional environment of the corporate world and also
                provides technical and fun activities to keep the students
                active and engaged throughout their campus life."
              </Typography>
            </div>
          </div>
        </Carousel>
      </section>
      <section className={classes.JoinUs__accordion}>
        <Typography className={classes.JoinUs__accordion__heading} variant="h4">
          FAQ
        </Typography>
        <Accordion className={classes.JoinUs__accordion__accordion}>
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                className={classes.JoinUs__accordion__accordion__expandLogo}
              />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h6">What is IEEE</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Institute of Electrical and Electronics Engineers, IEEE is the
              world's largest technical professional organization dedicated to
              advancing technology for the benefit of humanity.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={classes.JoinUs__accordion__accordion}>
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                className={classes.JoinUs__accordion__accordion__expandLogo}
              />
            }
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="h6">
              Is IEEE only for CS and IT Engineering Students?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              No, IEEE is available to all branches of engineering.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={classes.JoinUs__accordion__accordion}>
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                className={classes.JoinUs__accordion__accordion__expandLogo}
              />
            }
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="h6">
              What are the payments options for IEEE membership?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Online payment and payment through Bank.</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={classes.JoinUs__accordion__accordion}>
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                className={classes.JoinUs__accordion__accordion__expandLogo}
              />
            }
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="h6">
              I am no longer a student, how can I change to an IEEE Professional
              Membership?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Once you finish your student membership, you can apply for
              professional membership the same way you did for student
              membership.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={classes.JoinUs__accordion__accordion}>
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                className={classes.JoinUs__accordion__accordion__expandLogo}
              />
            }
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="h6">
              What are the IEEE Membership Benefits?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>See benefits at top of the page</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={classes.JoinUs__accordion__accordion}>
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                className={classes.JoinUs__accordion__accordion__expandLogo}
              />
            }
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="h6">
              Do I need to be an IEEE member to get a GoogleApps@IEEE mail
              account?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Yes</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={classes.JoinUs__accordion__accordion}>
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                className={classes.JoinUs__accordion__accordion__expandLogo}
              />
            }
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="h6">Why do students join the IEEE?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              IEEE membership provides you a chance to improve your management
              skills, effectively manage time, develop new work processes, voice
              your opinions and networking with a relevant group of
              professionals.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </section>
    </div>
  );
};

export default JoinUs;
