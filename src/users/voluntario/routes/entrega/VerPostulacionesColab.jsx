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

import style from "../../css/postulacion.module.css"

import {useState, useEffect} from 'react'
import { useStore } from "../../../../controllers/Auth.js"
import setScrollTop from '../../../../controllers/setPostScroll.js';

export default function VerPostulacionesColab() {
     const [datosAceptadas , setDatosAceptadas ]=useState({ indice: [], data: [] }); 
     const token = useStore((state) => state.token);
     const id_user = useStore((state) => state.id_user);
     const getPostulaciones = () => {
      axios.get('https://proyecto-281-production.up.railway.app/api/delivery/getPostulacionColaborador', {
        headers: {
          "x-token": token,
          "id_user": id_user
        }
      }
      ).then((response) => {
        console.log(response.data.body.postulaciones);
        setDatosAceptadas({ indice: ["id_user", "id_solicitud", ], data: [...response.data.body.postulaciones] });
        
      })
    }

    useEffect(()=>{
      setScrollTop(0);   
      getPostulaciones();       
    }, []); 
  
    return (
        <>
        <br></br>
        <h3>Estados de las postulaciones a  <u>Colaboradores</u> de las entregas </h3>                                
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
                ["id_user", "id_solicitud"].map((elemento, i) =>
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
                    <TableRow hover role="checkbox" tabIndex={-1} key={fila.id_solicitud+parseInt(Math.random()*10)}>
                      {dataTabla.indice.map((index, p) => {
                        return (
                          <TableCell key={fila[index]+parseInt(Math.random()*10)} align={"left"} style={{ minWidth: 5 }}>
                            {fila[index]}
                          </TableCell>
                        );
                      })}
                      <TableCell align={"center"} className={style.acciones} style={{ minWidth: 80 }}>
                                                  <Button variant="contained" onClick={(e) => {
                          console.log(fila['id_donacion']);
                          }}
                            style={{ background: "green", borderRadius: "8px", textTransform: "none" }}>
                            Habilitado
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
        rowsPerPageOptions={[5, 10, 15]}
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
