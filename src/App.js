import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import './styles/css/App.css';
// import Bootstrap from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Menu from './componentMenu/Menu.jsx';
import About from './componentMenu/About.jsx';
import Work from './componentMenu/Work.jsx';
import Education from './componentMenu/Education.jsx';
import Hobby from './componentMenu/Hobby.jsx';
import Skills from './componentMenu/Skills.jsx';
import Projects from './componentMenu/Projects.jsx';
import Linked from './componentMenu/Linkedin.jsx';
import Github from './componentMenu/Github.jsx';
import Facebook from './componentMenu/Facebook.jsx';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Menu />
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/about" component={About} />
          <Route path="/education" component={Education} />
          <Route path="/work" component={Work} />
          <Route path="/skills" component={Skills} />
          <Route path="/projects" component={Projects} />
          <Route path="/hobby" component={Hobby} />
        </Switch>
      </div>
    );
  }
}

export default App;
