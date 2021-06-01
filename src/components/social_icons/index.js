import React from 'react';
import '../social_icons/style.css';
import {
 Col,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function SocialIcons() {
  return (
         <Col xl={12} className="social-icons">
          &nbsp; &nbsp; &nbsp; &nbsp;
          <a href="https://www.facebook.com/samer.alnajjar.90" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="fb" icon={faFacebook} />
          </a>
          <a href="https://twitter.com/samer1694" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="twitter" icon={faTwitter} />
          </a>
          <a href="https://www.instagram.com/samer_najjar16/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="insta" icon={faInstagram} />
          </a>
          <a href="https://www.linkedin.com/in/samer-al-najjar" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className="linkedin" icon={faLinkedin} />
          </a>
         </Col>
  );
}

export default SocialIcons;
