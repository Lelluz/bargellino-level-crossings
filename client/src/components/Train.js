import React from 'react'
import '../styles/Train.scss';

const Train = (props) => (
  <div className="train">
    <span>Destinazione: {props.destination}</span>
    <span>Partenza effettiva: {props.actualDeparture}</span>
    <span>Arrivato in stazione: {props.arrivedToStation}</span>
  </div>
);

export default Train