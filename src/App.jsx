import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
     <h1>Rick and Morty</h1>
     <Outlet />
    </>
  )
}

export default App
