import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react'
import NavBar from './components/NavBar/NavBar.jsx'
import './App.css'
import DrawCard from './components/DrawCard/DrawCard.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />  
      <DrawCard />
      
    </>
  )
}

export default App
