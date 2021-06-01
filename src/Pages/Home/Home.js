import React from 'react';
import '../Home/Home.css';
import HomeLeft from '../../components/home_left/home_left';
import HomeRight from '../../components/home_right/home_right';
import Footer from '../../components/footer/footer';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import Animate from 'react-smooth';
import Particles from 'react-particles-js';
import particles from '../../const/particle.js';
import {Helmet} from 'react-helmet';

function Home() {
  return (
      <div>
         <Helmet>
                  <meta charSet="utf-8" />
                  <title>Home | Kawa Tatar</title>
                  <link rel="canonical" href="#" />
                  <meta name="description" content="Kawa Tatar| Home - Künstler" />
         </Helmet>
          <Animate to="1" from="0" attributeName="opacity">
            <Particles
            params={particles}
            className="particle"
            />
          <Container className="App-header" fluid={true}>
            <Row className="App-main">
              <Col  xl={7}  className="App-left">
                <HomeLeft />
              </Col>
              <Col  xl={5} className="App-right">
                <HomeRight />
              </Col>
            </Row>
            <Row className="App-footer">
              <Footer />
            </Row>
        </Container>
        </Animate>
      </div>
    );
}

export default Home;
