import React, {Component} from 'react';
import {Grid, Row, Col, ProgressBar} from 'react-bootstrap';
import {Tooltip} from 'react-bootstrap';

class Skills extends Component {
  constructor () {
    super ();
  }

  render () {
    return (
      <div id="wrapper">
        <div className="container">
          <Grid>
           
            <Row>
              <Col className="skills">
                <div class="progress_bar_title">javaScript</div>
                <div class="progress_number">90%</div>
                <ProgressBar className="progressBar" now={90} />
              </Col>
            </Row>
             <Row>
              <Col className="skills">
                <div class="progress_bar_title">Node.js</div>
                <div class="progress_number">50%</div>
                <ProgressBar className="progressBar" now={50} />
              </Col>
            </Row>
            <Row>
              <Col className="skills">
                <div class="progress_bar_title">Java</div>
                <div class="progress_number">40%</div>
                <ProgressBar className="progressBar" now={40} />
              </Col>
            </Row>
             <Row>
              <Col className="skills">
                <div class="progress_bar_title">React</div>
                <div class="progress_number">65%</div>
                <ProgressBar className="progressBar" now={65} />
              </Col>
            </Row>
            <Row>
              <Col className="skills">
                <div class="progress_bar_title">Angular</div>
                <div class="progress_number">70%</div>
                <ProgressBar className="progressBar" now={70} />
              </Col>
            </Row>
             <Row >
              <Col className="skills">
                <div class="progress_bar_title">HTML5</div>
                <div class="progress_number">95%</div>
                <ProgressBar className="progressBar" now={95} />
              </Col>
            </Row>
            <Row>
              <Col className="skills">
                <div class="progress_bar_title">CSS and Sass</div>
                <div class="progress_number">95%</div>
                <ProgressBar className="progressBar" now={95} />
              </Col>
            </Row>
             <Row>
              <Col className="skills">
                <div class="progress_bar_title">Bootstrap and @media query</div>
                <div class="progress_number">75%</div>
                <ProgressBar className="progressBar" now={75} />
              </Col>
            </Row>
             <Row>
              <Col className="skills">
                <div class="progress_bar_title">MongoBD</div>
                <div class="progress_number">70%</div>
                <ProgressBar className="progressBar" now={70} />
              </Col>
            </Row>
            <Row>
              <Col className="skills">
                <div class="progress_bar_title">AJAX</div>
                <div class="progress_number">70%</div>
                <ProgressBar className="progressBar" now={70} />
              </Col>
            </Row>
            <Row>
              <Col className="skills">
                <div class="progress_bar_title">jQuery</div>
                <div class="progress_number">80%</div>
                <ProgressBar className="progressBar" now={80} />
              </Col>
            </Row>
            <Row>
              <Col className="skills">
                <div class="progress_bar_title">Handlebars</div>
                <div class="progress_number">85%</div>
                <ProgressBar className="progressBar" now={85} />
              </Col>
            </Row>
           
           
          </Grid>

        </div>
      </div>
    );
  }
}
export default Skills;
