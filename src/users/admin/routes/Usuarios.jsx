import { useEffect, useState } from "react";
import { useStore } from "../../../controllers/Auth.js"
import axios from "axios";
import style from '../css/Usuarios.module.css'
import Recibo from '../js/Recibo.jsx'
import { PDFDownloadLink, pdf } from '@react-pdf/renderer';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ArticleIcon from '@mui/icons-material/Article';


import {ConfirmacionEliminarUser} from "../../../components/sweetAlert.js"
import { DrawOutlined } from "@mui/icons-material";

export default function Usuarios() {


    const [dataVoluntario, setDataVoluntario] = useState({indice:[],data:[]});
    const [dataDonante, setDataDonante] = useState({indice:[],data:[]});
    const [dataReceptores, setDataReceptores] = useState({indice:[],data:[]});
    const [dataTodos, setDataTodos] = useState({indice:[],data:[]});
    
    const [cardActive, setCardActive] = useState("");

    const token = useStore((state) => state.token);
    useEffect(() => {

        
        axios.get('https://proyecto-281-production.up.railway.app/api/review/userAll', {
            headers: {
                'x-token': token
            }
         })
            .then((response) => {
                console.log(response.data);
                if (response.status === 200) {
                    setDataVoluntario({ indice: Object.keys(response.data.voluntarios[0]), data: response.data.voluntarios });
                    setDataDonante({ indice: Object.keys(response.data.donantes_naturales[0]??response.data.encargados_donantes[0]??{}), data: [...response.data.donantes_naturales, ...response.data.encargados_donantes] });
                    setDataReceptores({ indice: Object.keys(response.data.receptores_naturales[0]??response.data.encargados_receptores[0]??response.data.encargados_organizacion_benefica[0]??{}), data: [...response.data.receptores_naturales, ...response.data.encargados_receptores, ...response.data.encargados_organizacion_benefica] });
                    setDataTodos({ indice: Object.keys(response.data.receptores_naturales[0]??response.data.encargados_receptores[0]??response.data.encargados_organizacion_benefica[0]??response.data.voluntarios[0]??response.data.donantes_naturales[0]??response.data.encargados_donantes[0]??{}), 
                    data: [...response.data.receptores_naturales, ...response.data.encargados_receptores, ...response.data.encargados_organizacion_benefica, ...response.data.voluntarios,...response.data.donantes_naturales, ...response.data.encargados_donantes] });     
                }
                //setdatos(response.data)
                
            })
    }, [])


    return <div className={style.listaUsers}>
        <h2>Administrar Usuarios</h2>

        <main className={style.main}>
            <Card titulo="Todos los Usuarios" cardActive={cardActive} setCardActive={setCardActive} />
            <Card titulo="Donantes" cardActive={cardActive} setCardActive={setCardActive} />
            <Card titulo="Receptores" cardActive={cardActive} setCardActive={setCardActive} />
            <Card titulo="Voluntario" cardActive={cardActive} setCardActive={setCardActive} />
        </main>
        <section className={style.tabla}   >
            {cardActive == "Todos los Usuarios" ?  <StickyHeadTable dataTabla={dataTodos} setDataTabla={setDataTodos} /> : ""}
            {cardActive == "Donantes" ?  <StickyHeadTable dataTabla={dataDonante} setDataTabla={setDataDonante} /> : ""}
            {cardActive == "Receptores" ? <StickyHeadTable dataTabla={dataReceptores} setDataTabla={setDataReceptores} /> : ""}
            {cardActive == "Voluntario" ? <StickyHeadTable dataTabla={dataVoluntario} setDataTabla={setDataVoluntario} /> : ""}
        </section>
    </div>
}

function Card({ children, titulo = "All", url = "#", cardActive = "", setCardActive }) {
    return (
        <div className={style.card + " " + ((cardActive == titulo) ? style.cardActive : "")} data-info={titulo} onClick={() => setCardActive(titulo)}>
            <div className={style.cardContent}>
                <figure>
                    <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="donacion" />
                </figure>
                <p>
                    {titulo}
                </p>
            </div>
        </div>
    );
}





const handleDownload = async (datos) => {
    const blob = await pdf(<Recibo data={datos.data}/>).toBlob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Datos_usuario.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
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
    const EliminarUser = (fila)=>{
        
        setDataTabla({ ...dataTabla, data: dataTabla.data.filter(item => item.id_user != fila.id_user)})
        
    }
    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {
                               /* dataTabla?.indice.map(item => 
                                    <TableCell
                                        key={item}
                                        align={"center"}
                                        style={{ minWidth: 5 , fontWeight: 'bold'}}
                                    >
                                        {item}
                                    </TableCell>
                                )*/
                            }
                            {
                                ["id","user","nombre","paterno","materno","correo"].map((elemento, i)=>
                                    <TableCell
                                        key={i}
                                        align={"center"}
                                        style={{ minWidth: 80 , fontWeight: 'bold'}}
                                    >
                                    {elemento}
                              </TableCell>
                                )
                            }
                             {
                                /*
                                <TableCell
                                        
                                        align={"center"}
                                        style={{ minWidth: 80 , fontWeight: 'bold'}}
                                    >
                                        Acciones
                              </TableCell>
                               */
                             }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        
                        {dataTabla?.data
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((fila, i ) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={fila.id_user}>
                                        {dataTabla.indice.slice(0, 5 + 1).map((index, p) => {                                            
                                            return (
                                                <TableCell key={p} align={"left"} style={{ minWidth:5 }}>
                                                    {fila[index]}
                                                </TableCell>
                                            );
                                        })}

                                        {

                                            /*
                                            
                                         <TableCell align={"center"} className={style.acciones} style={{ minWidth: 80 }}>
                                        
                                        <IconButton>
                                            <EditIcon />
                                         </IconButton> 
                                        
                                         <IconButton onClick={
                                            (e) => 
                                            ConfirmacionEliminarUser("Eliminar a",fila['nombre'],EliminarUser,fila) 
                                            //setDataTabla({ ...dataTabla, data: dataTabla.data.filter(item => item.id_user != fila.id_user)})
                                            }>                                            
                                            <DeleteIcon />
                                         </IconButton>                                         
                                          </TableCell>
                                            */
                                        }
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5,10]}
                component="div"
                count={dataTabla?.data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
            <div style={{
      width: '80%',
      margin: '0 auto',
      padding: '20px',
      display: 'flex',
      gap: '10px',
      flexWrap: 'wrap'
    }}>
      <Button 
        onClick={() => { handleDownload(dataTabla) }} 
        variant="contained" 
        color="error" 
        style={{
          fontSize: '15px',
          flex: '1 1 auto',
          minWidth: '150px'
        }}
      >
        Generar <PictureAsPdfIcon />
      </Button>
      <Button 
        onClick={() => { }} 
        variant="contained" 
        color="success" 
        style={{
          fontSize: '15px',
          flex: '1 1 auto',
          minWidth: '150px'
        }}
      >
        Generar Excel <ArticleIcon />
      </Button>
    </div>
        </Paper>
        
    );
}
