import React, {Component} from 'react';
import MilveImage from '../styles/milve.png';
import HuvepharmaImage from '../styles/huvepharma.png';
import {Container, Row, Col} from 'react-grid-system';

class Work extends Component {
  constructor () {
    super ();
  }

  render () {
    return (
      <div id="wrapper">
        <div className="container">
          <Container>
            <Row>
              <Col md={4} id="now" className="one">
                <p>NOW</p>
              </Col>
              <Col md={6} className="one">
                <p className="jobTitle">LOOKING FOR A JOB</p>
              </Col>
            </Row>
            <Row>
              <Col md={3} className="one">
                <span className="company">Huvepharma</span>
                <img src={HuvepharmaImage} alt="logo" />
              </Col>
              <Col md={3} className="one">
                <p className="endTime"> 30.06.2017 </p>
                <p className="begTime">
                  <span className="arrow-up"> </span>11.03.2013
                </p>
              </Col>
              <Col md={6} className="one">
                <span className="jobTitle">Import-Export </span>
                <p className="description">
                  Coordinate all import and small part of export of the company from purchase to customs clearance
                  and payments of the goods in the different countries.
                </p>
              </Col>
            </Row>
            <Row>
              <Col md={3} className="one">
                <span className="company">Milve AD</span>
                <img src={MilveImage} alt="" />
              </Col>
              <Col md={3} className="one">
                <p className="endTime"> 01.03.2013</p>
                <p className="begTime">
                  <span className="arrow-up"> </span>01.04.2008
                </p>
              </Col>
              <Col md={6} className="one">
                <span className="jobTitle">Supply specialist</span>
                <p className="description">
                  Calculate and organize supply of raw materials for production and coordinate deliveries.
                </p>
              </Col>
            </Row>
            <Row>
              <Col md={3} className="one">
                <span className="company">Milve AD</span>
                <img src={MilveImage} alt="" />
              </Col>
              <Col md={3} className="one">
                <p className="endTime">31.03.2008</p>
                <p className="begTime">
                  <span className="arrow-up"> </span>04.02.2005
                </p>
              </Col>
              <Col md={6} className="one">
                <span className="jobTitle">Office Assistant</span>
                <p className="description">
                  Supporting all departments in connection with the preparation of documents related to the activities.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
export default Work;
