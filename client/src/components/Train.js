import React from 'react'
import '../styles/Train.scss';

const Train = (props) => (
  <div className="train">
    <span>{props.destination}</span>
    <span>{props.actualDeparture}</span>
    <span>{props.arrivedToStation}</span>
  </div>
);

export default Train