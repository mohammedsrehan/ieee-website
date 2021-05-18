<<<<<<< HEAD
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './pages/home/home'
import AboutUs from './pages/about/about'
import JoinUs from './pages/joinUs/joinUs'
import OurTeam from './pages/ourTeam/OurTeam'
import NavBar from './components/navBar/navBar'
import Footer from './components/footer/footer'
import Cs from "./pages/chapters/CS/Cs";
import Wie from "./pages/chapters/WIE/Wie";
import Ras from "./pages/chapters/RAS/Ras";
import Competitions from "./pages/events/competitions/Competitions";
import Webinars from "./pages/events/webinars/Webinars";
import Quizzes from "./pages/events/quizzes/Quizzes";
=======
import logo from './logo.svg';
import './App.css';
>>>>>>> 52980f6... Initialize project using Create React App

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Router>
        <div>
          <NavBar />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <AboutUs />
          </Route>
          <Route path="/joinus">
            <JoinUs />
          </Route>
          <Route path="/ourteam">
            <OurTeam />
          </Route>
          <Route path="/cs">
            <Cs/>
          </Route>
          <Route path="/wie">
            <Wie />
          </Route>
          <Route path="/ras">
            <Ras />
          </Route>
          <Route path="/competitions">
            <Competitions />
          </Route>
          <Route path="/webinars">
            <Webinars />
          </Route>
          <Route path="/quizzes">
            <Quizzes />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          
        </Switch>
      </div>
    </Router>
    <Footer />
=======
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
>>>>>>> 52980f6... Initialize project using Create React App
    </div>
  );
}

export default App;
