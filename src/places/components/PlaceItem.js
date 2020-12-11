import React, { useState } from 'react'

import './PlaceItem.css';
import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import Modal from '../../shared/components/UIElements/Modal';
import Map from '../../shared/components/UIElements/Map'

const PlaceItem = props => {
  const [showMap, setShowMap] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const openMapHandler = () => setShowMap(true);

  const closeMapHandler = () => setShowMap(false);

  const showDeleteWarningModalHandler = () => {
    setShowConfirmModal(true);
  };

  const cancelDeleteWarningModalHandler = () => {
    setShowConfirmModal(false);
  };

  const confirmDeleteWarningModalHandler = () => {
    setShowConfirmModal(false);
    console.log('DELETE');
  };


  return (
    <>
    <Modal 
      show={showMap}
      onCancel={closeMapHandler} 
      header={props.address} 
      contentClass='place-item__modal-content' 
      footerClass='place-item__modal-actions' 
      footer={<Button onClick={closeMapHandler}>CLOSE</Button>}>
      <div className='map'>
        <Map center={props.coordinates} zoom={16} />
      </div>
    </Modal>
    <Modal show={showConfirmModal} onCancel={cancelDeleteWarningModalHandler} header="Are you sure?" footerClass="place-item__modal-actions" footer={
      <React.Fragment>
        <Button inverse onClick={cancelDeleteWarningModalHandler}>CANCEL</Button>
        <Button danger onClick={confirmDeleteWarningModalHandler}>DELETE</Button>
      </React.Fragment>
    } >
      <p>Do you want to proceed and delete this place?</p>
    </Modal>
  <li className="place-item">
  <Card className="place-item__content">
    <div className="place-item__image">
      <img src={props.image} alt={props.title} />
    </div>
    <div className="place-item__info">
      <h2>{props.title}</h2>
      <h3>{props.address}</h3>
      <p>{props.description}</p>
    </div>
    <div className="place-item__actions">
      <Button inverse onClick={openMapHandler}>VIEW ON MAP</Button>
      <Button to={`/places/${props.id}`}>EDIT</Button>
      <Button danger onClick={showDeleteWarningModalHandler}>DELETE</Button>
    </div>
    </Card>
  </li>
  </>
  )
}

export default PlaceItem;
