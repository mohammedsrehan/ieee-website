import { Paper } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/ieee-min.png";
import "./style.css";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar">
        <ul className="list">
          <Link to="/">
            <img src={logo} className="logo" alt="logo" />
          </Link>
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
            <Link className="link">
              EVENTS
            </Link>
            <Paper elevation={3} className="subListItem">
              <ul className='subItem'>
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
            <Link className="link">
              OUR CHAPTERS
            </Link>
            <Paper elevation={3} className="subListItem">
              <ul className='subItem'>
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
      </nav>
    </div>
  );
};

export default NavBar;
