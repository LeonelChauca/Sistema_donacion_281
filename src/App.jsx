import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx';

import { Route, Routes } from 'react-router-dom';


//Rutas 
import Preguntas from './containers/Preguntas.jsx';
import Contact from './containers/Contact.jsx';
import About from './containers/About.jsx';
import Productos from './containers/Productos.jsx';
import Home from './containers/Home.jsx';
import Login from './containers/Login.jsx';

// Componentes 
import NotFound from "./components/NotFound.jsx"

function App() {
  return (
    <>
      <Navbar />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/about" element={<About />} />
          <Route path="/preguntas" element={<Preguntas />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path='/*' element={<NotFound/>} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
