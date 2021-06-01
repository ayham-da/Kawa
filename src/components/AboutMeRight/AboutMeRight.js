import React from 'react';
import '../AboutMeRight/AboutMeRight.css';
import Samer from '../../assets/img/AboutMe.jpg';
import Samer2 from '../../assets/img/AboutMe2.jpg';

import {
  Container,
  Row,
  Col,
  Image,
} from 'react-bootstrap';


function AboutMeRight() {
  return (
    <Container className="AboutMeRight">
      <Row className="AboutMeRight-main">
        <Col xl={12}>
          <br />
          <Image src={Samer} className="AboutMeRight-main-img" alt="Image of samer Alnajar"/>
        </Col>
        <Col xl={12}>
          <br />
          <Image src={Samer2} className="AboutMeRight-main-img" alt="Image of samer Alnajar"/>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutMeRight;
