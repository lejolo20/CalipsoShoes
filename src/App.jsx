import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Section from './Components/Section'

function App() {
  

  return (
    <div className="App">
      <picture>
        <img className='Bg' src='../src/assets/Bg.jpg' alt='background'/>
      </picture>
      <Navbar />
      <Section />
    </div>
  )
}

export default App
