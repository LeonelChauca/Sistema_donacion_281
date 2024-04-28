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

import style from "../../voluntario/css/postulacion.module.css"

import { useState, useEffect } from 'react'
import { useStore } from "../../../controllers/Auth.js"





import style1 from '../../donante/styles/realizarDonacion.module.css'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Fab from '@mui/material/Fab';
//import { ProductContext } from '../Dontante';

import AddIcon from '@mui/icons-material/Add';

import FormLabel from '@mui/material/FormLabel';
/*
import { RegistrarDonacionProducto } from './Realizar-donacion/RegistrarDonacionProducto';
import { RegistrarDonacionAlimento } from './Realizar-donacion/RegistrarDonacionAlimento';
import { RegistrarDonacionDinero } from './Realizar-donacion/RegistrarDonacionDinero';

import { ListaDonacion } from './Realizar-donacion/ListaDonacion';
*/
import MenuItem from '@mui/material/MenuItem'

import setScrollTop from "../../../controllers/setPostScroll.js";

export default function VerEstado() {
    const [datosAceptadas, setDatosAceptadas] = useState({ indice: [], data: [] });
    const [datosPendientes, setDatosPendientes] = useState({ indice: [], data: [] });

    const [datosAlimentos, setDatosAlimentos] = useState({ indice: [], data: [] });
    const [datosDinero, setDatosDinero] = useState({ indice: [], data: [] });
    const [datosProductos, setDatosProductos] = useState({ indice: [], data: [] });


    const [groupRadio, setgroupRadio] = useState('');
    const handleChange = (event) => {
        setgroupRadio(event.target.value);
    };

    const token = useStore((state) => state.token);
    const id_user = useStore((state) => state.id_user);
    const getPostulaciones = () => {
        axios.get('https://proyecto-281-production.up.railway.app/api/delivery/getItemsDisponibles', {
            headers: {
                "x-token": token,
                "id_user": id_user
            }
        }
        ).then((response) => {
            console.log(response.data);
            //console.log(response.data.body);
            setDatosAlimentos({ indice: ["id_alimento", "nombre_a", "cantidad_a", "medida_unitaria_a"], data: [...response.data.alimentos] });
            setDatosDinero({ indice: ["id_dinero", "monto", "cambio"], data: [...response.data.dineros] });
            setDatosProductos({ indice: ["id_producto", "nombre_p", "tipo_p", "cantidad_p"], data: [...response.data.productos] });

        })
    }

    useEffect(() => {
        setScrollTop(0); 
        getPostulaciones();
    }, []);

    return (
        <>
            <br></br>
            <div className={style1.containerMain}>
                <h2>Donaciones disponibles</h2>
                <div className={style1.containerForm}>
                    <div className={style1.formAction}>
                        <h2>Tipo de donacion</h2>
                        <FormControl>
                            <FormLabel id="demo-row-radio-buttons-group-label">Selecciona una opcion :</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                value={groupRadio}
                                onChange={handleChange}
                            >
                                <FormControlLabel value="Producto" control={<Radio />} label="Producto" />
                                <FormControlLabel value="Dinero" control={<Radio />} label="Dinero" />
                                <FormControlLabel value="Alimento" control={<Radio />} label="Alimento" type="select" />
                            </RadioGroup>
                        </FormControl>
                        {groupRadio == "Producto" && <StickyHeadTable setDataTabla={setDatosProductos} dataTabla={datosProductos} setDataTablaPendientes={setDatosPendientes} dataTablaPendientes={datosPendientes} thead={["id", "Nombre", "Cantidad", "Medida"]} />}
                        {groupRadio == "Dinero" && <StickyHeadTable setDataTabla={setDatosDinero} dataTabla={datosDinero} setDataTablaPendientes={setDatosPendientes} dataTablaPendientes={datosPendientes} thead={["id", "Monto", "Cambio"]} />}
                        {groupRadio == "Alimento" && <StickyHeadTable setDataTabla={setDatosAlimentos} dataTabla={datosAlimentos} setDataTablaPendientes={setDatosPendientes} dataTablaPendientes={datosPendientes} thead={["id", "Nombre", "Cantidad", "Medida"]} />}
                    </div>
                </div>
            </div>
        </>
    )
}


function StickyHeadTable({ setDataTabla, dataTabla, thead, setDataTablaPendientes, dataTablaPendientes }) {
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
                                thead.map((elemento, i) =>
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
                                        <TableRow hover role="checkbox" tabIndex={-1} key={fila.id_donacion+parseInt(Math.random()*100)}>
                                            {dataTabla.indice.map((index, p) => {
                                                return (
                                                    <TableCell key={fila[index]} align={"left"} style={{ minWidth: 5 }}>
                                                        {fila[index]}
                                                    </TableCell>
                                                );
                                            })}
                                            
                                            <TableCell align={"center"} className={style.acciones} style={{ minWidth: 80 }}>
                                                {
                                                    fila['estado'] ? <Button variant="contained" onClick={(e) => {
                                                        console.log(fila['id_donacion']);
                                                    }}
                                                        style={{ background: "green", borderRadius: "8px", textTransform: "none" }}>
                                                        Habilitado
                                                    </Button> :
                                                        <Button variant="contained" onClick={(e) => {
                                                            console.log(fila['id_donacion']);
                                                        }}
                                                            style={{ background: "blue", borderRadius: "8px", textTransform: "none" }}>
                                                            Disponible
                                                        </Button>
                                                }

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
