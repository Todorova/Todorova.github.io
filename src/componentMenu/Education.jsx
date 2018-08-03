import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

class Education extends Component {
  constructor () {
    super ();
  }

  render () {
    return (
      <div id="wrapper">
        <div className="container">
          <Grid>
            <Row>
              <Col className="arrow">
                <span className="arrow-up"> </span>
              </Col>
            </Row>
            <Row className="row">
              <Col className="itTalents">
                <p id="thirdEndTime">10.05.2018 </p>
                <p id="thirdBegTime">14.11.2017</p>
              </Col>
              <Col className="itTalents descEd">
                <span className="jobTitle">JavaScript</span>
                <p className="description">
                  JavaScript, OOP, Functional programming, Recursion, Closures, High-order functions, jQuery, Browser
                  Storage, Handlebars, Design Patterns, AJAX, DOM, HTML CSS, Angular, Canvas, HTTP, Node JS, MongoDB.
                </p>
              </Col>
              <Col className="itTalents">
                <span className="company">It Talents</span>
              </Col>
            </Row>
            <Row>
              <Col className="arrow">
                <span className="arrow-up"> </span>
              </Col>
            </Row>
            <Row className="row">
              <Col className="itTalents">
                <p id="secondEndTime">07.05.2017</p>
                <p id="secondBegTime">04.03.2017</p>
              </Col>
              <Col className="itTalents descEd">
                <span className="jobTitle">Java Basics</span>
                <p className="description">
                  Primitive types and if-else statements, Loops, OOP
                </p>
              </Col>
              <Col className="itTalents">
                <span className="company">Pragmatic</span>
              </Col>
            </Row>
            <Row>
              <Col className="arrow">
                <span className="arrow-up"> </span>
              </Col>
            </Row>
            <Row className="row">
              <Col className="itTalents">

                <p id="firstEndTime">23.11.2009 </p>
                <p id="firstBegTime">01.09.2005 </p>

              </Col>
              <Col className="itTalents descEd">
                <span className="jobTitle">Economics of Trade</span>
                <p className="description">
                  Macro and microeconomics, Finance, Accounting, Marketing, Customs control and administration. Organization
                  and technology for sales and distribution.
                </p>
              </Col>
              <Col className="itTalents">
                <span className="company">D. A. Tsenov</span>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}
export default Education;
