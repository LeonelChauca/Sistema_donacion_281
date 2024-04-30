import Main from "../components/Main.jsx";
import NavAdm from "../components/NavAdm.jsx";

import { useState,createContext, useContext } from "react";

import { Route, Routes,useNavigate } from 'react-router-dom';
import MenuItem from '../components/MenuItem.jsx'
import NotFound from "../../components/NotFound.jsx";

import HomeWorkRoundedIcon from '@mui/icons-material/HomeWorkRounded';
import AddReactionIcon from '@mui/icons-material/AddReaction';

import { Home } from "./routes/Home.jsx";
import { RealizarDonacion } from "./routes/RealizarDonacion.jsx";
import SendIcon from '@mui/icons-material/Send';
import { ConfirmaDonacion } from "./routes/ConfirmaDonacion.jsx";
import { useStore } from "../../controllers/Auth.js"

//use context
export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [Productos, setProductos] = useState({id_user:'',dinero:[],alimento:[],producto:[]});
      const actualizarId = nuevoId => {
        setProductos(prevState => ({
          ...prevState,
          id_user: nuevoId
        }));
      };
      const actualizarFecha = nuevoFecha => {
        setProductos(prevState => ({
          ...prevState,
          fecha_d: nuevoFecha
        }));
      };
      const actualizarFechaS = nuevoFecha => {
        setProductos(prevState => ({
          ...prevState,
          fecha_solicitud: nuevoFecha

        }));
      };

      const eliminarTodosLosDatos = () => {
        setProductos({
          id_user: null,
          dinero: [],
          alimento: [],
          producto: [],
          fecha_d: null,
          fecha_solicitud: null
        });
      };
      
      const agregarDinero = nuevoDinero => {

        //Productos.dinero.map((valor)=>{
          //if(valor.cambio==nuevoDinero.cambio){
            //setProductos(prevState => {
            //  const updatedDinero=prevState.dinero.map(valor => {
            //    if (valor.cambio === nuevoDinero.cambio) {
            //      sw = 1
            //      return {
            //        ...valor,
            //        monto: parseInt(valor.monto) + parseInt(nuevoDinero.monto)
            //      };
            //    } else {
            //      return valor;
            //    }
            //  });
            //  return {
            //    ...prevState,
            //    dinero: updatedDinero
            //  };
            //});
          //};
        //})
        //if(sw===0){
          //setProductos(prevState => ({
            //...prevState,
            //dinero: [...prevState.dinero, nuevoDinero]
          //}));       
        //}
        add(Productos.dinero,nuevoDinero,"cambio","monto","dinero");
      }

      // let valor
      // if(producto) => valor = nombre[2]
      // if(alimento) => valor = nombre[1]
      // if(dinero) => valor = nombre[0]
      // const nombre = ['cambio','nombre','nombre']
      // [ ]
      const add=(arr,nuevo,nom,nom2,nom3)=>{
        let sw = 0
        nuevo[nom2]=parseInt(nuevo[nom2])
        arr.map((valor)=>{
          if(valor[nom]==nuevo[nom]){
            setProductos(prevState => {
              console.log(prevState, prevState[nom2] )
              const update=prevState[nom3].map(valor => {
                if (valor[nom] === nuevo[nom]) {
                  sw = 1
                  return {
                    ...valor,
                    [nom2]: parseInt(valor[nom2]) + parseInt(nuevo[nom2])
                  };
                } else {
                  return valor;
                }
              });
              return {
                ...prevState,
                [nom3]: update
              };
            });
          };
        })
        if(sw===0){
          setProductos(prevState => ({
            ...prevState,
            [nom3]: [...prevState[nom3], nuevo]
          }));       
        }
      }
      const agregarAlimento = nuevoAlimento => {
        add(Productos.alimento,nuevoAlimento,"nombre_a","cantidad_a","alimento");
      };
    
      const agregarProducto = nuevoProducto => {
        add(Productos.producto,nuevoProducto,"nombre_p","cantidad_p","producto");
      };
    return (
      <ProductContext.Provider value={{ Productos,actualizarId,actualizarFecha,agregarAlimento,agregarDinero,agregarProducto,actualizarFechaS,eliminarTodosLosDatos }}>
        {children}
      </ProductContext.Provider>
    );
  };



export default function Donante() {
    const [closeNav, setCloseNav] = useState(true);
    
    return (
        <>
            <ProductProvider>
                <NavAdm closeNav={closeNav} setCloseNav={setCloseNav}>
                {
                    // Aqui los item de  navs 
                    }

                    <MenuItem texto="Inicio" url="/" >
                        <HomeWorkRoundedIcon />
                    </MenuItem>
                    <MenuItem texto="Agrega donacion" url="/Agrega-donacion" >
                        <AddReactionIcon />
                    </MenuItem>
                    <MenuItem texto="Confirma donacion" url="/Confirma-donacion" >
                        <SendIcon />
                    </MenuItem>
                </NavAdm>
                <Main closeNav={closeNav} >
                {
                        // Rutas correspondientes a los navs 
                }
                <Routes>
                        <Route path='/' element={<Home/>} />
                        <Route path='/*' element={<NotFound />} />
                        <Route path='/Agrega-donacion' element={<RealizarDonacion />} />
                        <Route path='/Confirma-donacion' element={<ConfirmaDonacion />} />
                </Routes>
                </Main>
            </ProductProvider>
        </>
    )
}