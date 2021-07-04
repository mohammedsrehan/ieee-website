import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";
import Home from "./pages/home/home";
import AboutUs from "./pages/about/about";
import JoinUs from "./pages/joinUs/joinUs";
import OurTeam from "./pages/ourTeam/OurTeam";
import NavBar from "./components/navBar/navBar";
import Footer from "./components/footer/footer";
import Cs from "./pages/chapters/CS/Cs";
import Wie from "./pages/chapters/WIE/Wie";
import Ras from "./pages/chapters/RAS/Ras";
import Competitions from "./pages/events/competitions/Competitions";
import Webinars from "./pages/events/webinars/Webinars";
import Workshops from "./pages/events/workshops/Workshops";
import Quizzes from "./pages/events/quizzes/Quizzes";
import Login from "./components/login/login";
import { auth } from "./config/firebaseConfig";
import { useDispatch } from 'react-redux'
import { login } from "./features/userSlice";


let theme = createMuiTheme({
  // typography: {
  //   fontFamily: ["Open Sans"]
  // }
});
theme = responsiveFontSizes(theme);

function App() {
  const dispatch = useDispatch()

  auth.onAuthStateChanged((user) => {
    console.log(user)
    if (user !== null) {
      dispatch(login({
        email: user.email,
        uid: user.uid,
    }))
    }
  })

  return (
    <div className="App">
      <ThemeProvider theme={theme}>


      <Router>
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
            <Cs />
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
          <Route path="/workshops">
            <Workshops />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
      </ThemeProvider>

    </div>
  );
}

export default App;
