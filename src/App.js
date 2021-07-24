import React from 'react'

import './App.css';
//import NavBar from './components/navBar';
import Resume from './components/Resume'
import Contacts from './components/Contacts'
import AboutMe from './components/AboutMe'
import Works from './components/Works'
import Footer from './components/footer'
import Header from './components/header'
import Title from './components/title'
import Wrapper from './wrapper'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  return (
    <Router>

      {/* <Title /> */}
      {/* <NavBar /> */}
      <Footer />
      <Wrapper />
      <Header />
      <Switch>
        <Route exact path="/" >
          <AboutMe />
        </Route>
        <Route path="/AboutMe">
          <AboutMe />
        </Route>
        <Route path="/Works">
          <Works />
        </Route>
        <Route path="/Contacts">
          <Contacts />
        </Route>
        <Route path="/Resume">
          <Resume/>
        </Route>
      </Switch>

    </Router>
  );
}
export default App;



