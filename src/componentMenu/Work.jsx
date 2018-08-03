import React, {Component} from 'react';
import MilveImage from '../styles/milve.png';
import HuvepharmaImage from '../styles/huvepharma.png';
import {Grid, Row, Col} from 'react-bootstrap';

class Work extends Component {
  constructor () {
    super ();
  }

  render () {
    return (
      <div id="wrapper">
        <div className="container">
          <Grid>
            <Row >
              <Col className='arrow'>
                <span className="arrow-up"> </span>
              </Col>
            </Row>
            <Row>
              <Col className="two">
                <p id="now">NOW</p>
              </Col>
              <Col className="two">
                <span className="jobTitle">LOOKING FOR A JOB</span>
              </Col>
            </Row>
            <Row>
              <Col className='arrow'>
                <span className="arrow-up"> </span>
              </Col>
            </Row>

            <Row>
              <Col className="one">
                <p id="thirdEndTime"> 30.06.2017 </p>
                <p id="thirdBegTime">11.03.2013</p>
              </Col>
              <Col className="one">
                <span className="jobTitle">Import-Export </span>
                <p className="description">
                  Coordinate all import and small part of export of the company from purchase to customs clearance
                  and payments of the goods in the different countries.
                </p>
              </Col>
              <Col className="one">
                <span className="company">Huvepharma</span>
                <img src={HuvepharmaImage} alt="logo" />
              </Col>
            </Row>

            <Row>
              <Col className='arrow'>
                <span className="arrow-up"> </span>
              </Col>
            </Row>
            <Row>
              <Col className="one">
                <p id="secondEndTime"> 01.03.2013</p>
                <p id="secondBegTime">01.04.2008</p>
              </Col>
              <Col className="one">
                <span className="jobTitle">Supply specialist</span>
                <p className="description">
                  Calculate and organize supply of raw materials for production and coordinate deliveries.
                </p>
              </Col>
              <Col className="one">
                <span className="company">Milve AD</span>
                <img src={MilveImage} alt="" />
              </Col>
            </Row>

            <Row>
              <Col className='arrow'>
                <span className="arrow-up"> </span>
              </Col>
            </Row>
            <Row>
              <Col className="one">
                <p id="firstEndTime">31.03.2008</p>
                <p id="firstBegTime">04.02.2005</p>
              </Col>
              <Col className="one">
                <span className="jobTitle">Office Assistant</span>
                <p className="description">
                  Supporting all departments in connection with the preparation of documents related to the activities.
                </p>
              </Col>
              <Col className="one">
                <span className="company">Milve AD</span>
                <img src={MilveImage} alt="" />
              </Col>
            </Row>

          </Grid>

        </div>
      </div>
    );
  }
}
export default Work;
