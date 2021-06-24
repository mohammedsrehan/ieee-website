import {
  Collapse,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  SwipeableDrawer,
} from "@material-ui/core";
import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import logo from "../../images/homePage/ieee-min.png";
import useStyles from "./style";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { ExpandLess, ExpandMore } from "@material-ui/icons";

const NavBar = () => {
  const classes = useStyles();
  const [mobile, setMobile] = useState(false);
  const [open, setOpen] = useState(false);
  const [opens, setOpens] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setMobile(open);
  };
  const handleClick = () => {
    setOpen(!open);
  };
  const handleClicks = () => {
    setOpens(!opens);
  };

  const mobileNav = (
    <div className={classes.mobile}>
      <IconButton
        onClick={toggleDrawer(false)}
        area-label="menu"
        className={classes.buttonR}
      >
        <ChevronRightIcon />
      </IconButton>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItem button>
          <Link to="/" className={classes.text}>
            <ListItemText primary="HOME" />
          </Link>
        </ListItem>
        <Divider />
        <ListItem button to="/aboutus">
          <Link to="/about" className={classes.text}>
            <ListItemText primary="ABOUT US" />
          </Link>
        </ListItem>
        <ListItem button onClick={handleClicks}>
          <ListItemText primary="OUR EVENTS" className={classes.text} />
          {opens ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={opens} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <Link to="/webinars" className={classes.text}>
                <ListItemText primary="WEBINARS" />
              </Link>
            </ListItem>
            <ListItem button className={classes.nested}>
              <Link to="/quizzes" className={classes.text}>
                <ListItemText primary="QUIZES" />
              </Link>
            </ListItem>
            <ListItem button className={classes.nested}>
              <Link to="/competitions" className={classes.text}>
                <ListItemText primary="COMPETITIONS" />
              </Link>
            </ListItem>
            <ListItem button className={classes.nested}>
              <Link to="/workshops" className={classes.text}>
                <ListItemText primary="WORKSHOPS" />
              </Link>
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={handleClick}>
          <ListItemText primary="OUR CHAPTERS" className={classes.text} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <Link to="/cs" className={classes.text}>
                <ListItemText primary="CS" />
              </Link>
            </ListItem>
            <ListItem button className={classes.nested}>
              <Link to="/wie" className={classes.text}>
                <ListItemText primary="WIE" />
              </Link>
            </ListItem>
            <ListItem button className={classes.nested}>
              <Link to="/ras" className={classes.text}>
                <ListItemText primary="RAS" />
              </Link>
            </ListItem>
          </List>
        </Collapse>
        <ListItem button>
          <Link to="/ourteam" className={classes.text}>
            <ListItemText primary="OUR TEAM" />
          </Link>
        </ListItem>
        <ListItem button>
          <Link to="/joinus" className={classes.text}>
            <ListItemText primary="JOIN US" />
          </Link>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>

      <nav className={classes.navbar}>
        <Link to="/">
          <img src={logo} className={classes.navbar__logo} alt="logo" />
        </Link>
        <ul className={classes.navbar__list}>
          <li className={classes.navbar__list__listItem}>
            <Link to="/" className={classes.navbar__list__listItem__link}>
              HOME
            </Link>
          </li>
          <li className={classes.navbar__list__listItem}>
            <Link to="/about" className={classes.navbar__list__listItem__link}>
              ABOUT US
            </Link>
          </li>
          <li className={`${classes.navbar__list__listItem} ${classes.hover}`}>
            <Link to='/#events' className={classes.navbar__list__listItem__link}>EVENTS</Link>
            <Paper
              elevation={3}
              className={`${classes.subListItem} subListItem`}
            >
              <ul className={classes.subItem}>
                <li className={classes.navbar__list__listItem}>
                  <Link
                    to="/webinars"
                    className={classes.navbar__list__listItem__link}
                  >
                    WEBINARS
                  </Link>
                </li>
                <li className={classes.navbar__list__listItem}>
                  <Link
                    to="/quizzes"
                    className={classes.navbar__list__listItem__link}
                  >
                    QUIZZES
                  </Link>
                </li>
                <li className={classes.navbar__list__listItem}>
                  <Link
                    to="/competitions"
                    className={classes.navbar__list__listItem__link}
                  >
                    COMPETITIONS
                  </Link>
                </li>
                <li className={classes.navbar__list__listItem}>
                  <Link
                    to="/workshops"
                    className={classes.navbar__list__listItem__link}
                  >
                    WORKSHOPS
                  </Link>
                </li>
              </ul>
            </Paper>
          </li>
          <li className={`${classes.navbar__list__listItem} ${classes.hover}`}>
            <Link to='/cs' className={classes.navbar__list__listItem__link}>
              OUR CHAPTERS
            </Link>
            <Paper
              elevation={3}
              className={`${classes.subListItem} subListItem`}
            >
              <ul className={classes.subItem}>
                <li className={classes.navbar__list__listItem}>
                  <Link
                    to="/cs"
                    className={classes.navbar__list__listItem__link}
                  >
                    COMPUTER SOCIETY
                  </Link>
                </li>
                <li className={classes.navbar__list__listItem}>
                  <Link
                    to="/ras"
                    className={classes.navbar__list__listItem__link}
                  >
                    RAS
                  </Link>
                </li>
                <li className={classes.navbar__list__listItem}>
                  <Link
                    to="/wie"
                    className={classes.navbar__list__listItem__link}
                  >
                    WIE
                  </Link>
                </li>
              </ul>
            </Paper>
          </li>
          <li className={classes.navbar__list__listItem}>
            <Link
              to="/ourteam"
              className={classes.navbar__list__listItem__link}
            >
              OUR TEAM
            </Link>
          </li>
          <li className={classes.navbar__list__listItem}>
            <Link to="/joinus" className={classes.navbar__list__listItem__link}>
              JOIN US
            </Link>
          </li>
        </ul>
        {mobile ? (
          <SwipeableDrawer
            anchor="right"
            open={mobile}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(false)}
          >
            {mobileNav}
          </SwipeableDrawer>
        ) : (
          ""
        )}
        <IconButton
          aria-label="menu"
          className={classes.button}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
      </nav>

    </div>
  );
};

export default NavBar;
