import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import './styles/App.scss'
import LevelCrossing from './components/LevelCrossing'
import IncomingTrains from './components/IncomingTrains'

function App() {
  return (
    <div className="App">
      <h1 className="title">Passaggio a Livello Via Commenda</h1>
      <h3 className="trains-title">Treni di passaggio</h3>
      <IncomingTrains></IncomingTrains>
      <LevelCrossing></LevelCrossing>
    </div>
  )
}

export default connect()(App)