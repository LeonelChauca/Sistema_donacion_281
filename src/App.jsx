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


//Users
import Admin from './users/admin/Admin.jsx';
import Donante, { ProductProvider } from './users/donante/Dontante.jsx';
// Todos los componetes de Receptor 
import Receptor from './users/receptor/Receptor.jsx'
import DonacionesDisponibles from './users/receptor/routes/DonacionesDisponibles';

//import Voluntario from './users/voluntario/Voluntario.jsx';
import P_Representante from './users/voluntario/routes/P_Representante.jsx';
import P_Colaborador from './users/voluntario/routes/P_Colaborador.jsx';
import VerPostulaciones from './users/voluntario/routes/VerPostulaciones.jsx';

import P_Representante_E  from './users/voluntario/routes/entrega/P_Representante.jsx';
import P_Colaborador_E  from './users/voluntario/routes/entrega/P_Colaborador.jsx';

import VerPostulaciones_E from './users/voluntario/routes/entrega/VerPostulaciones.jsx';
import VerPostulacionesColab_E from './users/voluntario/routes/entrega/VerPostulacionesColab.jsx';

import { RealizarDonacion } from './users/donante/routes/RealizarDonacion.jsx';
import { ConfirmaDonacion } from './users/donante/routes/ConfirmaDonacion.jsx';
import VerPostulacionesColab from './users/voluntario/routes/VerPostulacionesColab.jsx';
import P_Entregar from './users/voluntario/routes/P_Entregar.jsx';
import { SolicitarDonacion } from './users/receptor/routes/SolicitarDonacion.jsx';
import { ConfirmarSolDonacion } from './users/receptor/routes/ConfirmarSolDonacion.jsx';


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
   /*
     case "donante":
     case "encargado_donante":
     if(logged){
       return <Donante/>
     } 
     break; 
    /* case "voluntario":
     if(logged){
//       return <Voluntario/>
     } 
    break; */
    case "encargado_org_ben":
      case "encargado_receptor": 
      case "receptor_natural":
      if(logged){
        {
          // Cunado se tenga el user Receptor , Se cambia Donanate -> Receptor
       //   return <Receptor/>
        }        
      } 
    default:
      return  <>
            <Navbar />
            <main className="main">
            <ProductProvider>
              <Routes>
                {(rol=="voluntario")&&<Route path='/p_representante' element={<P_Representante />} />}
                {(rol=="voluntario")&&<Route path='/p_colaborador' element={<P_Colaborador />} />}
                {(rol=="voluntario")&&<Route path='/p_entregar' element={<P_Entregar />} />}
                {(rol=="voluntario")&&<Route path='/ver_postulaciones' element={<VerPostulaciones />} />}  
                {(rol=="voluntario")&&<Route path='/ver_postulaciones_colab' element={<VerPostulacionesColab/>} />}  

                {(rol=="voluntario")&&<Route path='/entrega/p_representante' element={<P_Representante_E/>} />}  
                {(rol=="voluntario")&&<Route path='/entrega/p_colaborador' element={<P_Colaborador_E/>} />}  

                {(rol=="voluntario")&&<Route path='/entrega/ver_postulaciones' element={<VerPostulaciones_E />} />}  
                {(rol=="voluntario")&&<Route path='/entrega/ver_postulaciones_colab' element={<VerPostulacionesColab_E/>} />}  
        
                
                 {(rol=="donante_natural" || rol=="encargado_donante" || rol=="donante")&&<Route path='/Agrega-donacion' element={<RealizarDonacion />} />}
                 {(rol=="donante_natural" || rol=="encargado_donante" || rol=="donante")&&<Route path='/Confirma-donacion' element={<ConfirmaDonacion />} />}                

                 {(rol=="receptor_natural" || rol=="encargado_receptor" || rol=="encargado_org_ben")&&<Route path='/Solicitar-donacion' element={<SolicitarDonacion />} />}
                 {(rol=="receptor_natural" || rol=="encargado_receptor" || rol=="encargado_org_ben")&&<Route path='/Confirma-solicitud-donacion' element={<ConfirmarSolDonacion />} />}

                 {(rol=="encargado_org_ben" || rol=="encargado_receptor" || rol=="receptor_natural")&&<Route path='/receptor' element={<Receptor />} />}       
                 {(rol=="encargado_org_ben" || rol=="encargado_receptor" || rol=="receptor_natural")&&<Route path='/Menu1' element={<Receptor />} />}       
                 {(rol=="encargado_org_ben" || rol=="encargado_receptor" || rol=="receptor_natural")&&<Route path='/Menu2' element={<Receptor />} />}       
                 {(rol=="encargado_org_ben" || rol=="encargado_receptor" || rol=="receptor_natural")&&<Route path='/donaciones_disponibles' element={<DonacionesDisponibles />} />}       

                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/preguntas" element={<Preguntas />} />
                <Route path="/contacto" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path='/Registro' element={<Register />} />
                <Route path='/CreateEmpresa' element={<CreateEmpresa />} />
                <Route path='/CreatePersona' element={<CreatePersona />} />
                <Route path='/*' element={<NotFound />} />
              </Routes>
              </ProductProvider>
            </main>
            <Footer />
          </>
    }
}


export default App
