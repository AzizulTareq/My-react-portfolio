import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ScrollableAnchor from 'react-scrollable-anchor'
import About from './About/About'
import Navbar from './Navbar/Navbar'

import Home from './Home/Home'


const App = () => {
  return (
    <>
    <Navbar />
    <Home />
    </>
  )
}

export default App
