
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
import Register from './containers/Register.jsx';
import { CreateEmpresa } from './components/CreateEmpresa.jsx';
import { CreatePersona } from './components/CreatePersona.jsx';
//controller 
import { useStore } from "./controllers/Auth.js"


//Admin 
import Admin from './admin/Admin.jsx';


function App() {
  const logged = useStore((state) => state.logged)
  const rol = useStore((state) => state.rol)
  const login = useStore((state) => state.login);
  
  switch (rol) {
    case "administrador":
      if(logged){
        return <Admin />        
      }
      break ; 
     case "receptor_natural": 
     if(logged){
       return <Admin/>
     } 
     break; 
      
    default:
      return  <>
            <Navbar />
            <main className="main">
              <Routes>
                <Route path="/" element={<Home />} />
                {
                  logged && <Route path="/productos" element={<Productos />} />
                }

                <Route path="/about" element={<About />} />
                <Route path="/preguntas" element={<Preguntas />} />
                <Route path="/contacto" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path='/Registro' element={<Register />} />
                <Route path='/CreateEmpresa' element={<CreateEmpresa />} />
                <Route path='/CreatePersona' element={<CreatePersona />} />
                <Route path='/*' element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </>
  }
}
export default App
