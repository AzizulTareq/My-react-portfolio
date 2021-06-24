import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'

import Home from './Pages/Home'


const App = () => {
  return (
    <>
    <Navbar />
    <Home />
    </>
  )
}

export default App
