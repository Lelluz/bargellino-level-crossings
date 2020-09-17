import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import Train from './Train'
import '../styles/IncomingTrains.scss';
import axios from 'axios'

function IncomingTrains() {
  const [trainsList, setTrainsList] = useState([])
  useEffect(() => getTrains(), [])

  /* function handleTrains(trains) {
  
    trains.forEach(train => {
      let levelCrossingClosedTime = null
      if (train.destinazione === 'BOLOGNA C.LE') {
        levelCrossingClosedTime = train.compOrarioPartenzaZeroEffettivo
      } else {
        const currentTimeSplitted = train.compOrarioPartenzaZeroEffettivo.split(':')
        levelCrossingClosedTime = `${currentTimeSplitted[0]}:${parseInt(currentTimeSplitted[1]) - 5}`
      }
      trainsList += `Destinazione: ${train.destinazione}<br>
        Partenza effettiva: ${train.compOrarioPartenzaZeroEffettivo}<br>
        Passaggio a livello chiuso a: ${levelCrossingClosedTime}<br>`
    })
  } */

  const getTrains = () => {
    axios.get('/api/departures')
      .then(response => {
        setTrainsList(response.data)
        //handleTrains(response.data)
      })
      .catch(() => {
        console.log('Error loading trains');
      })
  }

  const displayTrains = (trainsList) => {

    if (!trainsList.length) return null

    return trainsList.map((train, index) => (
      <Train key={index}
        destination={train.destinazione}
        actualDeparture={train.compOrarioPartenzaZeroEffettivo}
        arrivedToStation={train.compInStazioneArrivo[0] !== "" ? 'Si' : 'No'}>
      </Train>
    ))
  }
  return (
    <div className="incoming-trains">
      {displayTrains(trainsList)}
    </div>
  );
}

const mapStateToProps = trainsList => ({
  trainsList: trainsList
})

export default connect(mapStateToProps)(IncomingTrains);
