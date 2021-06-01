import React from 'react';
import '../home_left/style.css';
import {
  Container,
  Row,
  Col,
  Button
 } from 'react-bootstrap';
import ReactTypingEffect from 'react-typing-effect';
import {
   Link
  } from "react-router-dom";

  function Home_Left() {
  return (
   <Container className="home-left" >
    <Row className="home-left-main">
       <Col xl={12} className="home-left-main-col">
         <h2 className="first-line">
          <strong>Kawa Tatar</strong>
         </h2>
         <h3>
         <ReactTypingEffect
           text="أعيشُ على هامشِ الحياة ، أقتاتُ الكلمات ، وكلُّ ما لدي قلمٌ وبضعةُ أوراقٍ وعشرون عاماً على هذا الكوكب"
           className="typical"
           speed="100"
           eraseDelay="500000"
           />
         </h3>
          
           <br />
           <Button variant="outline-light" size="lg" className="home-left-aboutmme-btn"><Link to="/AboutMe" style={{ textDecoration: 'none', color: 'white' }} className="home-left-aboutme">About Me</Link></Button> &nbsp;
           <Button variant="outline-light" size="lg" className="home-left-aboutmme-btn"><Link style={{ textDecoration: 'none', color: 'white' }} to="/Contact" className="home-left-aboutme">Contact Me</Link></Button>
         </Col>
     </Row>
   </Container>
  );
}

export default Home_Left;
