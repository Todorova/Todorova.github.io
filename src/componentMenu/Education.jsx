import React, {Component} from 'react';
import {Container, Row, Col} from 'react-grid-system';

class Education extends Component {
  constructor () {
    super ();
  }

  render () {
    return (
      <div id="wrapper">
        <div className="container">
          <Container>
            <Row>
              <Col md={5} className="itTalents">
                <span className="company">It Talents</span>
                <p className="endTime">10.05.2018 </p>
                <p className="begTime"> 14.11.2017</p>
              </Col>
              <Col md={7} className="itTalents descEd">
                <span className="jobTitle">JavaScript</span>
                <p className="description">
                  JavaScript, OOP, Functional programming, Recursion, Closures, High-order functions, jQuery, Browser
                  Storage, Handlebars, Design Patterns, AJAX, DOM, HTML CSS, Angular, Canvas, HTTP, Node JS, MongoDB.
                </p>
              </Col>
            </Row>
            <Row>
              <Col md={5} className="itTalents">
                <span className="company">Pragmatic</span>
                <p className="endTime">07.05.2017</p>
                <p className="begTime">04.03.2017</p>
              </Col>
              <Col m5={7} className="itTalents descEd">
                <span className="jobTitle">Java Basics</span>
                <p className="description">
                  Primitive types and if-else statements, Loops, OOP
                </p>
              </Col>
            </Row>
            <Row>
              <Col md={5} className="itTalents">
                <span className="company">D.A. Tsenov</span>
                <p className="endTime">23.11.2009 </p>
                <p className="begTime">01.09.2005 </p>
              </Col>
              <Col md={7} className="itTalents descEd">
                <span className="jobTitle">Economics of Trade</span>
                <p className="description">
                  Macro and microeconomics, Finance, Accounting, Marketing, Customs control and administration. Organization
                  and technology for sales and distribution.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
export default Education;
