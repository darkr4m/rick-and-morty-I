import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import logo from './assets/Rick_and_Morty.png'

function App() {

  return (
    <>
    <img id='rick-and-morty-logo' src={logo} alt="Rick and Morty logo" />
    <div className="container">
     <Outlet />
    </div>
    </>
  )
}

export default App
