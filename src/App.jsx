import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar.jsx'

import {Route,Routes} from 'react-router-dom';
import Contact from './containers/Contact.jsx';
import Home from './containers/Home.jsx';
import Login from './containers/Login.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <Navbar/>
      
      <main className="main">
      <Routes>        
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/login" element={<Login />} />

      </Routes>          
      
      </main>          
      <Footer/>
      
    </>
  )
}

export default App
