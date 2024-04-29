import { useEffect, useState } from "react";
import { useStore } from "../../../../controllers/Auth.js"

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';


import Button from '@mui/material/Button';

import style from "../../css/postulacion.module.css"

import axios from 'axios';
import { AlertaConfirmacionDonacion, masInfo,envPostulacion } from "../../js/Alertas.js";
import setScrollTop from "../../../../controllers/setPostScroll.js";

export default function P_Representante() {

  const [disponibles, setDisponibles] = useState({ indice: [], data: [] });
  const token = useStore((state) => state.token);
  const id_user = useStore((state) => state.id_user);

  const postular = (id_solicitud) => {
    envPostulacion().then((numero)=>{
      if(numero){
        
        axios.post('https://proyecto-281-production.up.railway.app/api/delivery/postularResponsableDelivery', {
          id_solicitud: id_solicitud,
          id_user,
          cantidad:numero,
          }, {
            headers: {
              'x-token': token
            }
          })
          .then((response) => {
            console.log(response);
            AlertaConfirmacionDonacion();
            getDonaciones();
          })
          .catch((error)=>{
            console.log(error);
          })
          
      }
      
    })    
  }

  const getDonaciones = () => {
    axios.get('https://proyecto-281-production.up.railway.app/api/delivery/getPendingSolicitudesResponsableVoluntario',{
      headers: {
        "x-token": token,
        "id_user": id_user
      }
    }
    ).then((response) => {
      console.log(response);
      setDisponibles({ indice: ["id_solicitud", "fecha_solicitud", "nombre_solicitante","ap_paterno_solicitante"], data: response.data.solicitudes });
    })
  }

  const masInfoDonacion = (id_solicitud) => {
    axios.get('https://proyecto-281-production.up.railway.app/api/delivery/getDetalleSolicitud', {
      headers: {
        "x-token": token,
        "id_solicitud":id_solicitud
      }
    }
    ).then((response) => {
      console.log(response.data);
      masInfo(response.data.body); 
      //setDisponibles({ indice: ["id_donacion", "fecha_d", "userD"], data: response.data.donaciones });
    })
  }


  useEffect(() => {
    setScrollTop(0);   
 getDonaciones();
  }, [])

  return (
    <>
      <br />
      <h2>Postulacion a Representante de las entregas</h2>
      <h4>Informacion de las solicitures  </h4>
      <br/>
      <StickyHeadTable dataTabla={disponibles} setDataTabla={setDisponibles} postular={postular}  masInfoDonacion={masInfoDonacion}/>
    </>
  )
}

function StickyHeadTable({ setDataTabla, dataTabla, postular ,masInfoDonacion}) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  function esVector(valor) {
    return Array.isArray(valor);
  }

  useEffect(() => {
    console.log(dataTabla)
  }, [])

  return (
    <Paper sx={{ margin: "auto", maxWidth: 800, overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>

              {
                ["id_solicitud", "Fecha",[2,"Nombre del solicitante"]].map((elemento, i) =>{
                  
                  return <TableCell
                    key={i}
                    align={"left"}
                    style={{ minWidth: 80, fontWeight: 'bold' }}                    
                    colSpan={esVector(elemento)?2:1}
                  >
                    {esVector(elemento)?elemento[1]:elemento}
                  </TableCell>}
                )
              }
              <TableCell
                align={"center"}
                style={{ minWidth: 80, fontWeight: 'bold' }}
              >
                Acciones
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              dataTabla?.data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((fila, i) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={fila['id_solicitud']||""+parseInt(Math.random()*1000)}>
                      
                      {dataTabla.indice.map((index, p) => {
                        return (
                          <TableCell key={fila[index]+parseInt(Math.random()*1000)} align={"left"} style={{ minWidth: 5 }}>
                            {fila[index]}
                          </TableCell>
                        );
                      })}

                      <TableCell align={"center"} className={style.acciones} style={{ minWidth: 80 }}>
                        <Button variant="contained" onClick={(e) => {
                          postular(fila['id_solicitud']);
                        }}
                          style={{ background: "green", borderRadius: "8px", textTransform: "none" }}>
                          Postular
                        </Button>
                        <Button variant="contained" onClick={(e) => {
                          masInfoDonacion(fila['id_solicitud']); 
                        }}
                          style={{ marginLeft:5, background: "blue", borderRadius: "8px", textTransform: "none" }}>
                          Ver
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })
            }
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5]}
        component="div"
        count={dataTabla?.data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
