import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import Button from '@mui/material/Button';

import style from "../css/postulacion.module.css"

import {useState, useEffect} from 'react'
import { useStore } from "../../../controllers/Auth.js"
import setScrollTop from '../../../controllers/setPostScroll.js';

export default function VerPostulacionesColab() {
     const [datosAceptadas , setDatosAceptadas ]=useState({ indice: [], data: [] }); 
     const token = useStore((state) => state.token);
     const id_user = useStore((state) => state.id_user);
     const getPostulaciones = () => {
      axios.get('https://proyecto-281-production.up.railway.app/api/donation/getPostulacionColaborador', {
        headers: {
          "x-token": token,
          "id_user": id_user
        }
      }
      ).then((response) => {
        console.log(response.data.body.postulaciones);
        setDatosAceptadas({ indice: ["id_user", "id_donacion", ], data: [...response.data.body.postulaciones] });
        
      })
    }

    useEffect(()=>{
      setScrollTop(0);   
      getPostulaciones();       
    }, []); 
  
    return (
        <>
       
       <br></br>
          <h3>Ve tus estados de postulaciones a <u>Colaborador</u> de  donaciones</h3>
         <br></br>         
        {
          <StickyHeadTable setDataTabla={setDatosAceptadas} dataTabla={datosAceptadas}/>          
        }
        </>
    )
}

function StickyHeadTable({ setDataTabla, dataTabla, setDataTablaPendientes, dataTablaPendientes }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


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
                ["id_user", "id_donacion"].map((elemento, i) =>
                  <TableCell
                    key={i}
                    align={"left"}
                    style={{ minWidth: 80, fontWeight: 'bold' }}
                  >
                    {elemento}
                  </TableCell>
                )
              }
              <TableCell
                align={"center"}
                style={{ minWidth: 80, fontWeight: 'bold' }}
              >
                Estado
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
            dataTabla?.data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((fila, i) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={fila.id_donacion}>
                      {dataTabla.indice.map((index, p) => {
                        return (
                          <TableCell key={fila[index]} align={"left"} style={{ minWidth: 5 }}>
                            {fila[index]}
                          </TableCell>
                        );
                      })}

{
                          fila['estado_p']===1&&<Button variant="contained" onClick={(e) => {
                            console.log(fila['estado_p']);
                          }}
                            style={{ background: "green", borderRadius: "8px", textTransform: "none" }}>
                            Habilitado
                          </Button>
                        }
                        {
                          fila['estado_p']===0&&<Button variant="contained" onClick={(e) => {
                            console.log(fila['id_donacion']);
                          }}
                            style={{ background: "red", borderRadius: "8px", textTransform: "none" }}>
                            Pendiente
                          </Button>
                        }
                        {
                          fila['estado_p']===2&&<Button variant="contained" onClick={(e) => {
                            console.log(fila['id_donacion']);
                          }}
                            style={{ background: "blue", borderRadius: "8px", textTransform: "none" }}>
                            En curso
                          </Button>
                        }
                        {
                          fila['estado_p']===3&&<Button variant="contained" onClick={(e) => {
                            console.log(fila['id_donacion']);
                          }}
                            style={{ background: "purple", borderRadius: "8px", textTransform: "none" }}>
                            Finalizado
                          </Button>
                        }
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
