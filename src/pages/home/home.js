import React from "react";
import { Button, Container, Paper, Typography } from "@material-ui/core";
import useStyles from "./styles";
import dartImage from "../../images/homePage/dart.webp";
import telescopeImage from "../../images/homePage/telescope.webp";
import poster1 from "../../images/homePage/webinar1.webp";
import webinar from "../../images/homePage/webinar.webp";
import competition from "../../images/homePage/competition.webp";
import competition1 from "../../images/homePage/competition1.webp";
import quiz from "../../images/homePage/quiz.webp";
import quiz1 from "../../images/homePage/quiz1.webp";
import workshop1 from "../../images/homePage/workshop1.webp";
import workshop2 from "../../images/homePage/workshop2.webp";
import csLogo from "../../images/homePage/IEEE-CS_Logo.png";
import rasLogo from "../../images/homePage/ieee-ras-logo.png";
import wieLogo from "../../images/homePage/ieee-wie-logo.png";
import IEEE_SB from "../../images/homePage/IEEE_SB.webp";
import { Link } from "react-router-dom";

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.home}>
      <Container
        maxWidth={false}
        className={classes.container}
        disableGutters={true}
      >
        <img src={IEEE_SB} alt="ieee_sb" className={classes.container__image} />
        <div className={classes.header}>
          <div className={classes.header__text}>
            <Typography variant="h4">IEEE STUDENT BRANCH</Typography>
            <Typography variant="body1">
              Nawab Shah Alam Khan College of Engineering and Technology
            </Typography>
          </div>
          <Link to="/joinus" className={classes.link}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={classes.button}
            >
              Join Us
            </Button>
          </Link>
        </div>
      </Container>
      <section className={classes.mainSection}>
        <section className={classes.mission}>
          <Paper elevation={8} className={classes.paper}>
            <header className={classes.headers}>
              <Typography variant="h4">Mission</Typography>
              <Typography variant="subtitle1">
                To promote students empowerment, develop professional skills ,
                organise diverse events and work towards IEEE's mission.
              </Typography>
            </header>
            <div>
              <img
                src={dartImage}
                alt="dart_image"
                title="mission"
                className={classes.image}
              />
            </div>
          </Paper>
          <Paper elevation={8} className={classes.paper}>
            <div>
              <img
                src={telescopeImage}
                alt="telescope_image"
                title="vision"
                className={classes.image}
              />
            </div>
            <header className={classes.headers}>
              <Typography variant="h4">Vision</Typography>
              <Typography variant="subtitle1">
                We envision offering a relevant platform to learn and seek
                industrial experience, personal development, social welfare and
                help explore various engineering fields.
              </Typography>
            </header>
          </Paper>
        </section>
        {/* <section className={classes.event}>
          <Typography variant="h4" className={classes.event__text}>LATEST EVENTS</Typography>
          <Paper elevation={8} className={classes.event__paper}>
            <img src={poster1} alt="poster1" title="event" className={classes.event__paper__image}/>
            <div className={classes.paper__content}>
              <Typography variant="subtitle2">Workshop On</Typography>
              <Typography variant="h6">NodeMCU</Typography>
              <div className={classes.paper__content__highlightedText}>
                <Typography
                  variant="body1"
                  className={classes.paper__content__highlightedText__header}
                >
                  Project
                </Typography>
                <Typography variant="body1">
                  Smart Home System with Google Assistant and Blynk app
                </Typography>
              </div>
              <Typography variant="body2">3rd July 2021</Typography>
              <Typography variant="body2">2PM IST</Typography>
              <Typography variant="body2">On Zoom</Typography>
              <Button
                variant="contained"
                color="primary"
              >
                Closed
              </Button>
            </div>
          </Paper>
        </section> */}
        <section className={classes.events__section}>
          <Typography variant="h4" className={classes.events__header}>
            EVENTS
          </Typography>
          <div className={classes.events}>
            <Paper elevation={12} className={classes.events_cards}>
              <div className={classes.events_cards_image}>
                <img
                  src={poster1}
                  alt="webinar_image"
                  title="webinar"
                  className={classes.img}
                />
                <img
                  src={webinar}
                  alt="webinar_image"
                  title="webinar"
                  className={classes.img}
                />
              </div>
              <header className={classes.events_cards_header}>
                <Typography variant="h5" className={classes.font}>
                  Webinars
                </Typography>
                <Typography variant="body2" className={classes.font_viewAll}>
                  <Link to="/webinars" className={classes.link}>
                    View All
                  </Link>
                </Typography>
              </header>
            </Paper>
            <Paper elevation={12} className={classes.events_cards}>
              <div className={classes.events_cards_image}>
                <img
                  src={competition}
                  alt="competition_image"
                  title="competition"
                  className={classes.img}
                />
                <img
                  src={competition1}
                  alt="competition_image"
                  title="competition"
                  className={classes.img}
                />
              </div>
              <header className={classes.events_cards_header}>
                <Typography variant="h5" className={classes.font}>
                  Competitions
                </Typography>
                <Typography variant="body2" className={classes.font_viewAll}>
                  <Link to="/competitions" className={classes.link}>
                    View All
                  </Link>
                </Typography>
              </header>
            </Paper>
            <Paper
              elevation={12}
              className={`${classes.events_cards} ${classes.quizzes}`}
            >
              <div className={classes.events_cards_image}>
                <img
                  src={quiz}
                  alt="quiz_image"
                  title="quiz"
                  className={classes.img}
                />
                <img
                  src={quiz1}
                  alt="quiz_image"
                  title="quiz"
                  className={classes.img}
                />
              </div>
              <header className={classes.events_cards_header}>
                <Typography variant="h5" className={classes.font}>
                  Quizzes
                </Typography>
                <Typography variant="body2" className={classes.font_viewAll}>
                  <Link to="/quizzes" className={classes.link}>
                    View All
                  </Link>
                </Typography>
              </header>
            </Paper>
            <Paper
              elevation={12}
              className={`${classes.events_cards} ${classes.quizzes}`}
            >
              <div className={classes.events_cards_image}>
                <img
                  src={workshop1}
                  alt="workshop_image"
                  title="workshop"
                  className={classes.img}
                />
                <img
                  src={workshop2}
                  alt="workshop_image"
                  title="workshop"
                  className={classes.img}
                />
              </div>
              <header className={classes.events_cards_header}>
                <Typography variant="h5" className={classes.font}>
                  Workshops
                </Typography>
                <Typography variant="body2" className={classes.font_viewAll}>
                  <Link to="/quizzes" className={classes.link}>
                    View All
                  </Link>
                </Typography>
              </header>
            </Paper>
          </div>
        </section>
        <section className={classes.ourChapters}>
          <Typography variant="h4" className={classes.ourChapters__header}>
            OUR CHAPTERS
          </Typography>
          <div className={classes.chapter_cards}>
            <Paper elevation={12} className={classes.chapters}>
              <img
                src={csLogo}
                alt="chapter_image"
                className={classes.chapter_logo}
              />
            </Paper>
            <Paper elevation={12} className={classes.chapters}>
              <img
                src={wieLogo}
                alt="chapter_image"
                className={classes.chapter_logo}
              />
            </Paper>
            <Paper elevation={12} className={classes.chapters}>
              <img
                src={rasLogo}
                alt="chapter_image"
                className={classes.chapter_logo}
              />
            </Paper>
          </div>
        </section>
      </section>
      <Container
        maxWidth={false}
        className={classes.bottomContainer}
        disableGutters={true}
      >
        <div className={classes.cards}>
          <Paper elevation={12} className={classes.card}>
            <Typography variant="h3" className={classes.red}>
              40+
            </Typography>
            <Typography variant="body1">Student Members</Typography>
          </Paper>
          <Paper elevation={12} className={classes.card}>
            <Typography variant="h3" className={classes.red}>
              20+
            </Typography>
            <Typography variant="body1">Events</Typography>
          </Paper>
          <Paper elevation={12} className={classes.card}>
            <Typography variant="h3" className={classes.red}>
              5
            </Typography>
            <Typography variant="body1">Professional Members</Typography>
          </Paper>
          <Paper elevation={12} className={classes.card}>
            <Typography variant="h3" className={classes.red}>
              3
            </Typography>
            <Typography variant="body1">Chapters</Typography>
          </Paper>
        </div>
        <Typography variant="h2" className={classes.text}>
          Ready to get started?
        </Typography>
        <Typography variant="h6" className={classes.text}>
          Become an IEEE Member to join the first student community of Nawab
          Shah Alam Khan college of Engineering and Technology.
        </Typography>
        <Link to="/joinus" className={classes.link}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
          >
            Join Us
          </Button>
        </Link>
      </Container>
    </div>
  );
}

export default Home;
