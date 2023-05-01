import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Body from './components/Body'
import Body1 from './components/Body1'
import Last from './components/Last'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Body />
      <Body1 />
      <Last />
      
    </div>
  )
}

export default App

