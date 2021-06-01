import React from 'react';
import '../AboutMeRight/AboutMeRight.css';
import kawa from '../../assets/img/kawa-1.png';
import kawa2 from '../../assets/img/kawa-2.png';

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
          <Image src={kawa} className="AboutMeRight-main-img" alt="Image of Kawa Tatar"/>
        </Col>
        <Col xl={12}>
          <br />
          <Image src={kawa2} className="AboutMeRight-main-img" alt="Image of Kawa Tatar"/>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutMeRight;
