import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";

import college from "./images/college.webp";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import useStyles from "./style";

function About() {
  const classes = useStyles();

  return (
    <div className={classes.About}>
      <Paper elevation={10} className={classes.About__about}>
        <img src={college} alt="college" />
        <div className={classes.About__about__text}>
          <Typography variant="h5">
            IEEE Student Branch of Nawab Shah Alam Khan College of Engineering
            and Technology
          </Typography>
          <Typography variant="body1">
            is a student community that strives to inform, learn, entertain, and
            inspire action through the events and experiences we create. We
            promote student empowerment, develop professional skills, and foster
            technological innovations and build networks. ​ Our community
            consists of amateurs to experts, who understand the potential of
            volunteering and how priceless volunteers are!
          </Typography>
        </div>
      </Paper>
      <Paper elevation={12} className={classes.About__ourCommunity}>
        <Typography variant="h4">OUR COMMUNITY</Typography>
        <img src={college} alt="pyramid" />
        <div className={classes.About__ourCommunity__text}>
          <Typography variant="h6">
            IEEE has its community around the globe, with more than 420,000 IEEE
            members. The world map has been divided into 10 regions and we come
            under Region 10 (Asia and Pacific), we are located in India and
            belong to the IEEE India Council which acts as a consortium of 12
            IEEE Sections located in different states of the country. IEEE
            Hyderabad Section foresees the activities in Telangana and Andhra
            Pradesh, different IEEE organizational units come under the section
            which includes IEEE Student Branches of colleges and universities.
          </Typography>
        </div>
      </Paper>
      <section className={classes.About__WhatWeDo}></section>
      <Paper elevation={10} className={classes.About__Work}>
        <Typography variant="h4">HOW WE WORK</Typography>
        <img src={college} alt="work" />
        <div>
          <Accordion className={classes.About__accordion}>
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon className={classes.accordion__expandLogo} />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6">Executive Committee (ExCOM)</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Comprises of faculty advisors and core student members who hold
                officer positions and maintain the workflow.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className={classes.About__accordion}>
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon className={classes.accordion__expandLogo} />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6">Program Committee</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Responsible for planning and execution of activities and events.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className={classes.About__accordion}>
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon className={classes.accordion__expandLogo} />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6">Membership Committee</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Responsible for recruiting new members, maintaining their data,
                funds management and coordinating with existing members.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className={classes.About__accordion}>
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon className={classes.accordion__expandLogo} />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6">Social Media Committee</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                This committee consists of 3 teams: <br />
                1. Content Team - Responsible for generating content and
                deciding what goes up on our social media accounts and posters.{" "}
                <br />
                2. Design Team - Responsible for desiging the posters, flyers
                and social media posts. <br />
                3. Website Team - Manages Website and keep it updated
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </Paper>
    </div>
  );
}

export default About;
