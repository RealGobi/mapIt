import React from 'react'

import Card from '../../../shared/components/UIElements/Card';

import './PlaceList.css';
import PlaceItem from './PlaceItem';

const PlaceList = props => {
  if ( props.items.lenght === 0) {
    return (<div className="place-list center">
      <Card>
      <h2>No places found, add one?</h2>
      <button>Share Places</button>
      </Card>
    </div>)
  } 
  return (
    <ul className="place-list">
      { props.items.map( place => <PlaceItem  key={place.id} id={place.id} images={place.imagesUrl} title={place.title} description={place.description} address={place.address} creatorId={place.creator} coordinates={place.location} /> ) }
    </ul>
  )
}

export default PlaceList;