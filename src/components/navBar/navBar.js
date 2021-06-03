import {
  Collapse,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@material-ui/core";
import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";
import logo from "../../images/homePage/ieee-min.png";
import "./style.css";
import { ExpandLess, ExpandMore } from "@material-ui/icons";

const NavBar = () => {
  const [mobile, setMobile] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [opens, setOpens] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClicks = () => {
    setOpens(!opens);
  };

  const mobileNav = (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className="root"
    >
      <ListItem button >
        <Link to="/" className="text">
          <ListItemText primary="HOME" />
        </Link>
      </ListItem>
      <Divider />
      <ListItem button to="/aboutus">
        <Link to="/about" className="text">
          <ListItemText primary="ABOUT US" />
        </Link>
      </ListItem>
      <ListItem button onClick={handleClicks}>
        <ListItemText primary="OUR EVENTS" className="text" />
        {opens ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={opens} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className="nested">
            <Link to="/webinars" className="text">
              <ListItemText primary="WEBINARS" />
            </Link>
          </ListItem>
          <ListItem button className="nested">
            <Link to="/quizzes" className="text">
              <ListItemText primary="QUIZES" />
            </Link>
          </ListItem>
          <ListItem button className="nested">
            <Link to="/competitions" className="text">
              <ListItemText primary="COMPETITIONS" />
            </Link>
          </ListItem>
        </List>
      </Collapse>
      <ListItem button onClick={handleClick}>
        <ListItemText primary="OUR CHAPTERS" className="text"/>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className="nested">
            <Link to="/cs" className="text">
              <ListItemText primary="CS" />
            </Link>
          </ListItem>
          <ListItem button className="nested">
            <Link to="/wie" className="text">
              <ListItemText primary="WIE" />
            </Link>
          </ListItem>
          <ListItem button className="nested">
            <Link to="/ras" className="text">
              <ListItemText primary="RAS" />
            </Link>
          </ListItem>
        </List>
      </Collapse>
      <ListItem button>
        <Link to="/ourteam" className="text">
          <ListItemText primary="OUR TEAM" />
        </Link>
      </ListItem>
      <ListItem button>
        <Link to="/joinus" className="text">
          <ListItemText primary="JOIN US" />
        </Link>
      </ListItem>
    </List>
  );

  return (
    <div>
      <nav className="navbar">
        <Link to="/">
          <img src={logo} className="logo" alt="logo" />
        </Link>
        <ul className="list">
          <li className="listItem">
            <Link to="/" className="link">
              HOME
            </Link>
          </li>
          <li className="listItem">
            <Link to="/about" className="link">
              ABOUT US
            </Link>
          </li>
          <li className="listItem hover">
            <Link className="link">EVENTS</Link>
            <Paper elevation={3} className="subListItem">
              <ul className="subItem">
                <li className="listItem">
                  <Link to="/webinars" className="link">
                    WEBINARS
                  </Link>
                </li>
                <li className="listItem">
                  <Link to="/quizzes" className="link">
                    QUIZZES
                  </Link>
                </li>
                <li className="listItem">
                  <Link to="/competitions" className="link">
                    COMPETITIONS
                  </Link>
                </li>
              </ul>
            </Paper>
          </li>
          <li className="listItem hover">
            <Link className="link">OUR CHAPTERS</Link>
            <Paper elevation={3} className="subListItem">
              <ul className="subItem">
                <li className="listItem">
                  <Link to="/cs" className="link">
                    COMPUTER SOCIETY
                  </Link>
                </li>
                <li className="listItem">
                  <Link to="/ras" className="link">
                    RAS
                  </Link>
                </li>
                <li className="listItem">
                  <Link to="/wie" className="link">
                    WIE
                  </Link>
                </li>
              </ul>
            </Paper>
          </li>
          <li className="listItem">
            <Link to="/ourteam" className="link">
              OUR TEAM
            </Link>
          </li>
          <li className="listItem">
            <Link to="/joinus" className="link">
              JOIN US
            </Link>
          </li>
        </ul>
        {mobile ? mobileNav : ""}
        <IconButton
          aria-label="menu"
          className="button"
          onClick={() => {
            setMobile(!mobile);
          }}
        >
          {mobile ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </nav>
    </div>
  );
};

export default NavBar;
