import React from 'react';
import '../AboutMe/AboutMe.css';
import AboutMeLeft from '../../components/AboutMeLeft/AboutMeLeft';
import AboutMeRight from '../../components/AboutMeRight/AboutMeRight';
import Footer from '../../components/footer/footer';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import Animate from 'react-smooth';
import Particles from 'react-particles-js';
import particles from '../../const/particle1.js';
import {Helmet} from 'react-helmet';

function AboutMe() {
  return (
      <div>
         <Helmet>
                  <meta charSet="utf-8" />
                  <title>Kawa Tatar</title>
                  <link rel="canonical" href="#" />
                  <meta name="description" content="Kawa Tatar| Künstler" />
         </Helmet>
          <Animate to="1" from="0" attributeName="opacity">
            <Particles
            params={particles}
            className="particle"
            />
          <Container className="AboutMe-header" fluid={true}>
            <Row className="AboutMe-main">
              <Col  xl={5}  className="AboutMe-left">
                <AboutMeRight />
              </Col>
              <Col  xl={7} className="AboutMeRight">
                <AboutMeLeft />
              </Col>
            </Row>
            <Row className="AboutMe-footer">
              <Footer />
            </Row>
        </Container>
        </Animate>
      </div>
    );
}

export default AboutMe;
