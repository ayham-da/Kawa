import React from 'react';
import '../Books/Books.css';
// import AboutMeLeft from '../../components/AboutMeLeft/AboutMeLeft';
// import AboutMeRight from '../../components/AboutMeRight/AboutMeRight';
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

import b1 from '../../assets/booksImg/b1.png'
import b2 from '../../assets/booksImg/b2.png'
import b3 from '../../assets/booksImg/b3.png'
import b4 from '../../assets/booksImg/b4.png'
import b6 from '../../assets/booksImg/b6.png'
import bg from '../../assets/booksImg/bg.jpg'
import bg2 from '../../assets/booksImg/bg2.jpg'
import bg3 from '../../assets/booksImg/bg3.jpg'
import close from '../../assets/booksImg/close.png'
import g1 from '../../assets/booksImg/g1.jpg'
import g2 from '../../assets/booksImg/g2.jpg'
import g3 from '../../assets/booksImg/g3.jpg'
import g4 from '../../assets/booksImg/g4.jpg'
import g5 from '../../assets/booksImg/g5.jpg'
import g6 from '../../assets/booksImg/g6.jpg'
import g7 from '../../assets/booksImg/g7.jpg'
import g8 from '../../assets/booksImg/g8.jpg'
import g10 from '../../assets/booksImg/g10.jpg'



import UserPlacesList            from '../components/UserPlacesList'



function MyBooks() {
  return (
      <div>
         <Helmet>
                  <meta charSet="utf-8" />
                  <title>Samer Alnajjar</title>
                  <link rel="canonical" href="#" />
                  <meta name="description" content="Samer Alnajjar| Author" />
         </Helmet>
          <Animate to="1" from="0" attributeName="opacity">
            <Particles
            params={particles}
            className="particle"
            />
          <Container className="Books-header" fluid={true}>
            <Row className="Books-main">
              <Col  xl={12}  className="">
              </Col>
            </Row>
            <Row className="Books-footer">
              <Footer />
            </Row>
        </Container>
        </Animate>
      </div>
    );
}

export default MyBooks;
