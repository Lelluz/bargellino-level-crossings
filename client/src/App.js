import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import './styles/App.scss'
import LevelCrossing from './components/LevelCrossing'
import IncomingTrains from './components/IncomingTrains'

function App() {
  return (
    <div className="App">
      <LevelCrossing></LevelCrossing>
      <IncomingTrains></IncomingTrains>
    </div>
  )
}

export default connect()(App)