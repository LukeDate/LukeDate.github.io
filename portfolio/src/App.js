import React from 'react';
import './App.scss';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AboutMe from './pages/aboutme';
import Skills from './pages/skills';
import Photos from './pages/photos';
import Home from './pages/home';
import Hamsa from './pages/hamsa';



function App() {
  const HamsaImg = styled('img')`
  width: 50px;
  height: 50px;
`;

  const HamsaLink = styled(Link)`
    position: absolute;
    bottom: 10px;
    left: 10px;
  `;

  return (
    <div className="App">
      <Router>
      <div className="nav">
        <Link to="/">
          Home
        </Link>
        <Link to="/skills+qualifications">
          Skills and Qualifications
        </Link>
        <Link to="/about+me">
          About Me
        </Link>
        <Link to="/photography">
          Photography
        </Link>
      </div>
        <HamsaLink to="/life">
          <HamsaImg src="/hamsa.png" />
        </HamsaLink>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/skills+qualifications">
            <Skills />
          </Route>
          <Route path="/photography">
            <Photos />
          </Route>
          <Route path="/about+me">
            <AboutMe />
          </Route>
          <Route path="/life">
            <Hamsa />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
