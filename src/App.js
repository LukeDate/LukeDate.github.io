import React, { useState } from 'react';
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
  const [active, setActive] = useState('');
  const HamsaImg = styled('img')`

  width: 50px;
  height: 50px;
`;

  const HamsaLink = styled(Link)`
    position: absolute;
    bottom: 10px;
    left: 10px;
  `;

  const NavLink = styled(Link)`
    background-color: ${props => props.active === active ? '#e8e8e8' : ''};
    color: ${props => props.active === active ? 'rgba(0, 0, 0, 0.5) !important' : ''};
  `;

  return (
    <div className="App">
      <Router>
      <div className="nav">
        <NavLink active={'home'} onClick={() => setActive('home')} to="/">
          Home
        </NavLink>
        <NavLink active={'skills'} onClick={() => setActive('skills')} to="/skills+qualifications">
          Skills and Qualifications
        </NavLink>
        <NavLink active={'about'} onClick={() => setActive('about')} to="/about+me">
          About Me
        </NavLink>
        <NavLink active={'photos'} onClick={() => setActive('photos')} to="/photography">
          Photography
        </NavLink>
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
