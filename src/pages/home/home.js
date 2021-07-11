import React from "react";
import { Button, Container, Paper, Typography } from "@material-ui/core";
import useStyles from "./styles";
import dartImage from "../../images/homePage/dart.webp";
import telescopeImage from "../../images/homePage/telescope.webp";
import csLogo from "../../images/homePage/IEEE-CS_Logo.png";
import rasLogo from "../../images/homePage/ieee-ras-logo.png";
import wieLogo from "../../images/homePage/ieee-wie-logo.png";
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
        <img src="https://ik.imagekit.io/ieeensakcet/tr:w-1200/IEEE_SB_grsC7EGvB.webp" alt="ieee_sb" className={classes.container__image} />
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
                  src="https://ik.imagekit.io/ieeensakcet/tr:w-300/webinar1_5vNp-eFY2.jpg"
                  alt="webinar_image"
                  loading="lazy"
                  title="webinar"
                  className={classes.img}
                />
                <img
                  src="https://ik.imagekit.io/ieeensakcet/tr:w-300/webinar2_fJIQSopo9f.jpg"
                  alt="webinar_image"
                  loading="lazy"
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
                  src="https://ik.imagekit.io/ieeensakcet/tr:w-300/contest_qE08g9fZe.jpeg"
                  alt="competition_image"
                  loading="lazy"
                  title="competition"
                  className={classes.img}
                />
                <img
                  src="https://ik.imagekit.io/ieeensakcet/tr:w-300/competition_YJJ38JHNLt.webp"
                  alt="competition_image"
                  loading="lazy"
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
                  src="https://ik.imagekit.io/ieeensakcet/tr:w-300/quiz2_JTrlpOgug.jpg"
                  alt="quiz_image"
                  loading="lazy"
                  title="quiz"
                  className={classes.img}
                />
                <img
                  src="https://ik.imagekit.io/ieeensakcet/tr:w-300/quiz1_s8sl-97c-i.jpg"
                  alt="quiz_image"
                  loading="lazy"
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
                  src="https://ik.imagekit.io/ieeensakcet/tr:w-300/workshop1_rNGAqLYNa.webp"
                  alt="workshop_image"
                  loading="lazy"
                  title="workshop"
                  className={classes.img}
                />
                <img
                  src="https://ik.imagekit.io/ieeensakcet/tr:w-300/workshop2_2bm7BAior.webp"
                  alt="workshop_image"
                  loading="lazy"
                  title="workshop"
                  className={classes.img}
                />
              </div>
              <header className={classes.events_cards_header}>
                <Typography variant="h5" className={classes.font}>
                  Workshops
                </Typography>
                <Typography variant="body2" className={classes.font_viewAll}>
                  <Link to="/workshops" className={classes.link}>
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
                loading="lazy"
                alt="chapter_image"
                className={classes.chapter_logo}
              />
            </Paper>
            <Paper elevation={12} className={classes.chapters}>
              <img
                src={wieLogo}
                loading="lazy"
                alt="chapter_image"
                className={classes.chapter_logo}
              />
            </Paper>
            <Paper elevation={12} className={classes.chapters}>
              <img
                src={rasLogo}
                loading="lazy"
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
