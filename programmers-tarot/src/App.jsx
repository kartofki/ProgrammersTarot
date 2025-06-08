import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import DrawCard from './components/DrawCard/DrawCard.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {

  return (
    <>
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column',  }}>
      <DrawCard />
      <Footer />
      </div>
      
    </>
  )
}

export default App
