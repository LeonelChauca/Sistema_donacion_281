import { useEffect, useState } from "react";
import { useStore } from "../../controllers/Auth.js"

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';

import style from "../css/postulacion.module.css"

import axios from 'axios';
import { AlertaConfirmacionHab } from "../../components/sweetAlert.js";

export default function P_Representante() {

  const [disponibles, setDisponibles] = useState({indice:[],data:[]});
  const token = useStore((state) => state.token);
  const id_user = useStore((state) => state.id_user);

  const postular = (value, donacion) => {
    axios.post('https://production.up.railway.app/api/donation/postularResponsableDonacion', {
      id_user: value,
      id_donacion:donacion, 
      estado: 1,
    }, {
      headers: {
        'x-token': token
      }
    })
      .then((response) => {
        console.log(response);
        AlertaConfirmacionHab();
        /*  axios.get('https://proyecto-281-production.up.railway.app/api/review/userPendings',{
            headers:{
                'x-token':token
            }
            })
            .then((response)=>{
              setDatos(response.data)
            })
            */
      })
  }

  const getDonaciones = ()=>{
    axios.get('https://production.up.railway.app/api/donation/getPendingDonationsVoluntario',id_user
    ,{headers:{
        'x-token': token
      }}
    )
      .then((response) => {
        console.log(response.data)
      })
  }
  useEffect(() => {
    getDonaciones();     
  }, [])


  return (
    <>
      <br />
      <h2>Postulacion a representante</h2>

      <StickyHeadTable dataTabla={disponibles} setDataTabla={setDisponibles} />
    </>
  )
}

function StickyHeadTable({ setDataTabla, dataTabla }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const EliminarUser = (fila) => {
    setDataTabla({ ...dataTabla, data: dataTabla.data.filter(item => item.id_user != fila.id_user) })
  }


  useEffect(()=>{
    console.log(dataTabla.data)
  },[])

  return (
    <Paper sx={{ margin: "auto", maxWidth: 800, overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>

              {
                ["id", "nombre", "estado"].map((elemento, i) =>
                  <TableCell
                    key={i}
                    align={"center"}
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
                Acciones
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              /*
            dataTabla?.data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((fila, i) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={fila.id_user}>
                    {dataTabla.indice.map((index, p) => {
                      return (
                        <TableCell key={p} align={"left"} style={{ minWidth: 5 }}>
                          {fila[index]}
                        </TableCell>
                      );
                    })}

                    <TableCell align={"center"} className={style.acciones} style={{ minWidth: 80 }}>
                      <Button variant="contained" onClick={(e) => true
                        //ConfirmacionEliminarUser("Eliminar a",fila['nombre'],EliminarUser,fila) 
                        //setDataTabla({ ...dataTabla, data: dataTabla.data.filter(item => item.id_user != fila.id_user)})
                      } style={{ background: "green", borderRadius: "10px", textTransform: "none" }}>
                        Postular
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })
            */
            }
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={10}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
