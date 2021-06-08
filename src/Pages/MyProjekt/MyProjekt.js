import React from 'react';
import './MyProjekt.css';
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
import ProjektItemList            from '../../components/MyProjekt/ProjektItemList'

import beauty_in_the_desert from '../../assets/kawa-bilder/beauty in the desert.jpeg';
import Buddha from '../../assets/kawa-bilder/Buddha.jpeg';
import Cover_me from '../../assets/kawa-bilder/Cover me.jpeg';
import free_thoughts from '../../assets/kawa-bilder/free thoughts.jpeg';
import Kalam from '../../assets/kawa-bilder/Kalam.jpeg';
import Once from '../../assets/kawa-bilder/Once.jpeg';
import Roja_Nû from '../../assets/kawa-bilder/Roja Nû.jpeg';
import Take_me from '../../assets/kawa-bilder/Take me.jpeg';
import Two_souls_from_the_sky from '../../assets/kawa-bilder/Two souls from the sky.jpeg';
import wosnek from '../../assets/kawa-bilder/wosnek.jpeg';







const My_Projekt = [
    {
        id: 'p1',
        title: 'beauty in the desert',
        description: 'description',
        imageUrl: beauty_in_the_desert ,
        size:"60 x 50"

    },
    {
        id: 'p1',
        title: 'Buddha',
        description: 'description',
        imageUrl: Buddha ,
        size:"50 x 40"

    },
    {
        id: 'p1',
        title: 'Cover me',
        description: 'description',
        imageUrl: Cover_me ,
        size:"50 x 40"

    },
    {
        id: 'p1',
        title: 'free thoughts',
        description: 'description',
        imageUrl: free_thoughts ,
        size:"50 x 40"

    },
    {
        id: 'p1',
        title: 'Kalam',
        description: 'description',
        imageUrl: Kalam ,
        size:"60 x 70"

    },
    {
        id: 'p1',
        title: 'Once',
        description: 'description',
        imageUrl: Once ,
        size:"40 x 30"

    },
    {
        id: 'p1',
        title: 'Roja Nû',
        description: 'description',
        imageUrl: Roja_Nû ,
        size:"30 x 24 -X3"

    },
    {
        id: 'p1',
        title: 'Take me',
        description: 'description',
        imageUrl: Take_me ,
        size:"50 x 70"

    },
    {
        id: 'p1',
        title: 'Two souls from the sky',
        description: 'description',
        imageUrl: Two_souls_from_the_sky,
        size:"40 x 30"

    },
    {
        id: 'p1',
        title: 'wosnek',
        description: 'description',
        imageUrl: wosnek ,
        size:"100 x 140"
    },

];


function MyProjekt() {
    const loadedPlaces = My_Projekt;
    return (
      <div>
         <Helmet>
                  <meta charSet="utf-8" />
                  <title>Kawa Tatar</title>
                  <link rel="canonical" href="#" />
                  <meta name="description" content="Kawa Tatar" />
         </Helmet>
          <Animate to="1" from="0" attributeName="opacity">
            <Particles
            params={particles}
            className="particle"
            />
          <Container className="projekts-header" fluid={true}>
            <Row className="projekts-main">
              <Col  md={12}  className="projekts-main-List">
                  <ProjektItemList items={loadedPlaces} />
              </Col>
            </Row>
            <Row className="projekts-footer">
              <Footer />
            </Row>
        </Container>
        </Animate>
      </div>
    );
}

export default MyProjekt;
