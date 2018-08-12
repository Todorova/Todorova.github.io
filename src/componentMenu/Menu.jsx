import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import FacebookImage from '../styles/facebook.png';
import GithubImage from '../styles/github.png';
import LinkedinImage from '../styles/linkedin.png';
import {Container, Row, Col} from 'react-grid-system';
// import './Header.css';

export default class Menu extends Component {
  constructor () {
    super ();
  }

  render () {
    return (
      <header>
        <nav>
          <NavLink id="aboutBtn" to="/about"> About </NavLink>
          <NavLink id="educationBtn" to="/education"> Education </NavLink>
          <NavLink id="hobbyBtn" to="/hobby"> Hobby </NavLink>
          <NavLink id="skillsBtn" to="/skills"> Skills </NavLink>
          <NavLink id="workBtn" to="/work"> Work </NavLink>
          <NavLink id="projectsBtn" to="/projects"> Projects </NavLink>
          <NavLink to="/facebook">
            <img id="facebook" src={FacebookImage} alt="facebook" />
          </NavLink>
          <NavLink to="/github">
            <img id="github" src={GithubImage} alt="github" />
          </NavLink>
          <NavLink to="/linkedin">
            <img id="linkedin" src={LinkedinImage} alt="linkedin" />
          </NavLink>
        </nav>
      </header>
    );
  }
}
