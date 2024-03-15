import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar.jsx'

import {Route,Routes} from 'react-router-dom';
import Contact from './containers/Contact.jsx';
import Home from './containers/Home.jsx';
import Login from './containers/Login.jsx';

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Navbar></Navbar>
      
      <main className="main">
      <h3>Sistema de donaciones</h3>
      <Routes>        
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/login" element={<Login />} />

      </Routes>          
    
      </main>          

      <footer>

      </footer>
    </>
  )
}

export default App
