import React from "react";
import { Button, Container, Paper, Typography } from "@material-ui/core";
import useStyles from "./styles";
import dartImage from "../../images/homePage/dart.png";
import poster1 from "../../images/webinars/Poster.webp";
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
        <div className={classes.header}>
          <div className={classes.header__text}>
            <Typography variant="h4">IEEE STUDENT BRANCH</Typography>
            <Typography variant="body1">
              Nawab Shah Alam Khan College of Engineering and Technology
            </Typography>
          </div>
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
          >
            Join Us
          </Button>
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
              <img src={dartImage} alt="dart_image" className={classes.image} />
            </div>
          </Paper>
          <Paper elevation={8} className={classes.paper}>
            <div>
              <img src={dartImage} alt="dart_image" className={classes.image} />
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
        <section className={classes.event}>
          <Typography variant="h4">LATEST EVENTS</Typography>
          <Paper elevation={8} className={classes.paper}></Paper>
        </section>
        <section className={classes.events}>
          <Paper elevation={12} className={classes.events_cards}>
            <div className={classes.events_cards_image}>
              <img src={poster1} alt="webinar_image" className={classes.img} />
              <img src={poster1} alt="webinar_image" className={classes.img} />
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
              <img src={poster1} alt="webinar_image" className={classes.img} />
              <img src={poster1} alt="webinar_image" className={classes.img} />
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
              <img src={poster1} alt="webinar_image" className={classes.img} />
              <img src={poster1} alt="webinar_image" className={classes.img} />
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
              <img src={poster1} alt="webinar_image" className={classes.img} />
              <img src={poster1} alt="webinar_image" className={classes.img} />
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
        </section>
        <section className={classes.ourChapters}>
          <Typography variant="h3">OUR CHAPTERS</Typography>
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
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
        >
          Join Us
        </Button>
      </Container>
    </div>
  );
}

export default Home;
