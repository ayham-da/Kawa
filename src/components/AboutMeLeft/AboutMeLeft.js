import React from 'react';
import '../AboutMeLeft/AboutMeLeft.css';
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

  function AboutMe_left() {
  return (
   <Container className="AboutMeLeft" >
    <Row className="AboutMeLeft-main">
       <Col xl={12} className="AboutMeLeft-main-col">
         {/* <h1 className="first-line">
           Hello! 
         </h1> */}
         <h2 className="first-line">
          <strong>سـامـر الـنـجّـار</strong>
         </h2>
         <h3>
         <ReactTypingEffect
           text="Writer | humanist | social democrat | anti-facist | free syria"
           className="typical"
           speed="100"
           eraseDelay="500000"
           />
         </h3>
         <h3>
         <ReactTypingEffect
           text="2011 لا زلت عالقاً في"
           
           className="typical"
           speed="100"
           eraseDelay="510000"
           />
         </h3>
          
           <br />
           <Button variant="outline-dark" size="lg" className="AboutMeLeft-aboutmme-btn"><Link to="/MyBooks"   style={{ textDecoration: 'none', color: 'black'}} className="AboutMe_left-aboutme">Books</Link></Button> &nbsp;
           <Button variant="outline-dark" size="lg" className="AboutMeLeft-aboutmme-btn"><Link to="/Contact" style={{ textDecoration: 'none', color: 'black'}} className="AboutMe_left-aboutme">Contact Me</Link></Button>
         </Col>
     </Row>
   </Container>
  );
}

export default AboutMe_left;
