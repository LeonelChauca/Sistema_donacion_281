import React, { useEffect, useState } from 'react'
import style from '../../css/ResponsableDonacion.module.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import Button from '@mui/material/Button';
import {acceptSol,errSol,verProductoSol} from '../../js/swetAlertAdmin';
import TableRow from '@mui/material/TableRow';
import { TableRD } from '../../routes/Responsable-donacion/TableRD';
import { useStore } from "../../../../controllers/Auth"
import {createDataSD} from '../Responsable-donacion/columnas'
import Axios from 'axios';
import Alert from '@mui/material/Alert';
export const ResponsableEntrega = () => {
    const token=useStore((state)=>state.token);
    const [Act, setAct] = useState(false);
    const [data,setData] = useState([]);
    const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const aceptarSoli=(valor)=>{
    Axios.post('https://proyecto-281-production.up.railway.app/api/delivery/confirmarSolicitud',{'id_solicitud':valor},{
        headers:{
            'x-token': token,   
        },
    })
    .then((response)=>{
        console.log(response);
        acceptSol();
        setAct(!Act);
    })
    .catch((error)=>{
        console.log(error)
        errSol(error.data.msg)
    })

  }

  const verCuentas=(id)=>{
    Axios.get('https://proyecto-281-production.up.railway.app/api/delivery/getDetalleSolicitud',{
            headers:{
                'x-token': token,
                'id_solicitud':id
            }
        })
        .then((response)=>{
            console.log(response.data.body);
            verProductoSol(response.data.body);
        })
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
    useEffect(() => {
        Axios.get('https://proyecto-281-production.up.railway.app/api/delivery/getSolicitudesPendientes',{
            headers:{
                'x-token': token
            }
        })
        .then((response)=>{
            console.log(response);
            setData([...response.data.solicitudes]);
        })
    }, [Act])
  return (
    <div className={style.containerMain}>
        <h2>Solicitude de donacion pendientes</h2>
        <div className={style.containerVista}>
            {
                data.length===0 ? <Alert severity='info'>No existen solicitudes pendientes</Alert> :
                <div>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                        {createDataSD.map((column) => (
                            <TableCell
                            key={column.id}
                            align={column.align}
                            style={{ minWidth: column.minWidth }}
                            >
                            {column.label}
                            </TableCell>
                        ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row,index) => {
                            return (
                            <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                {createDataSD.map((column) => {
                                const value = row[column.id];
                                return (
                                    <TableCell key={column.id} align={column.align}>
                                    {column.id=="Accion"
                                        ? <div><Button variant="contained" onClick={(()=>aceptarSoli(row.id_solicitud))}>Aceptar Solicitud</Button> <Button variant="contained" color='success' onClick={()=>verCuentas(row.id_solicitud)}  >Ver Productos</Button></div>
                                        : value}
                                    </TableCell>
                                );
                                })}
                            </TableRow>
                            );
                        })}
                    </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={data.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
                </div>
                        // <TableRD columns={createDataSD} rows={data} idDon={data.id_solicitud} setAct={setAct} Act={Act}/>
            }
        </div>
    </div>
  )
}
