import React ,{useState} from 'react';

import Modal                         from 'react-bootstrap/Modal'       
import { Link }                      from 'react-router-dom';
import {Card,Button}                 from 'react-bootstrap'
import                                    'bootstrap/dist/css/bootstrap.min.css';

import                                    './BookItem.css'


const BookItem = props => {

  const [showMap, setShowMap] = useState(false);
  const openMapHandler = () => setShowMap(true);
  const closeMapHandler = () => setShowMap(false);

    return(
    <React.Fragment>
      <li className="place-item">
        <Card className="place-item__content" text="light">
          <Card.Img className="place-item__image" variant="top" src={props.image} alt={props.title} />
          <Card.Body >
            <Card.Text className="place-item__info">
              <h2>{props.title}</h2>
              <h3>{props.address}</h3>
              <p>{props.description}</p>
            </Card.Text>
          </Card.Body>
          <div className="place-item__actions">
            <Button variant="success" onClick={openMapHandler}>VIEW ON MAP</Button>
            
            <Link to={`/places/${props.id}`}>
            <Button variant="info">EDIT</Button>
            </Link>
            
          <Modal show={showMap}  onHide={closeMapHandler}>
            <Modal.Header className="modal-header"  closeButton>
              <Modal.Title>{props.title}</Modal.Title>
            </Modal.Header>
            
            <Modal.Body className="modal-body">

            </Modal.Body>

            <div className="map-container">

            </div>

            <Modal.Footer>
              <Button variant="secondary" onClick={closeMapHandler}>
                Close
              </Button>
              
              <Button variant="success" onClick={closeMapHandler} target="_blank">
                Open in Google Map
              </Button>
              
            </Modal.Footer>
          </Modal>
          </div>
        </Card>
    </li>
  </React.Fragment>
  )
};
export default BookItem;