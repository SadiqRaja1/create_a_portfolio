import React from 'react'
import {Route, Routes, useLocation } from "react-router-dom"
import Home from "./components/Home"
import NewForm from "./components/NewForm.jsx"
import Header from './components/Header'

const App = () => {
  return (
    <>
    <div className='flex flex-col min-h-screen bg-[#181818]'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<NewForm />} />
      </Routes>
    </div>
      
    </>
    )
}

export default App