import style from "../styles/containers/Productos.module.css"


import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

import TextField from '@mui/material/TextField';

import TableFooter from '@mui/material/TableFooter';
import MenuItem from '@mui/material/MenuItem';

import SearchIcon from '@mui/icons-material/Search';

const Productos = () => {
   const rows = [
      createData('Pollo', "Alimento", 6.0, "Bien"),
      createData('Dinero', "Dinero", 9.0, "Bien"),
      createData('Toalla', "Producto", 16.0, "Bien")

   ];
   const currencies = [
      {
         value: 'Todos',
         label: 'Todos',
      },
      {
         value: 'Alimento',
         label: 'Alimento',
      },
      {
         value: 'Producto',
         label: 'Producto',
      },
      {
         value: 'Dinero',
         label: 'Dinero',
      },
   ];
   return (
      <main className={style.main}>


         <section className={style.tabla}>
            <h2>Lista de productos disponibles</h2>
            <br></br>
            <div className={style.buscador}>
               <TextField style={{minWith:"250px"}}
                  id="standard-select-currency"
                  select
                  label="Categoría"
                  defaultValue="Todos"
                  
                  variant="standard"
               >
                  {currencies.map((option) => (
                     <MenuItem key={option.value} value={option.value}>
                        {option.label}
                     </MenuItem>
                  ))}
               </TextField>

               <TextField id="standard-basic" label="Nombre" variant="standard" />
               <IconButton style={{color:"blue"}} aria-label="add to shopping cart"
               >
                              <SearchIcon sx={{ fontSize: 30 }} />
               </IconButton>
            </div>
            <TableContainer component={Paper}>
               <Table aria-label="collapsible table">
                  <TableHead>
                     <TableRow>
                        <TableCell />
                        <TableCell>Producto</TableCell>
                        <TableCell align="left">Categoría</TableCell>
                        <TableCell align="left">Cantidad</TableCell>
                        <TableCell align="left">Estado</TableCell>
                     </TableRow>
                  </TableHead>
                  <TableBody>
                     {rows.map((row) => (
                        <Row key={row.name} row={row} />
                     ))}
                  </TableBody>
                  <TableFooter>
                     <TableRow   >
                        <TableCell colSpan={5} align="right">
                           <span>1</span>-<span>1</span>
                           <IconButton color="primary" aria-label="add to shopping cart">
                              <KeyboardArrowLeftIcon />
                           </IconButton>
                           <IconButton color="primary" aria-label="add to shopping cart">
                              <KeyboardArrowRightIcon />
                           </IconButton>
                        </TableCell>

                     </TableRow>
                  </TableFooter>
               </Table>
            </TableContainer>
         </section>
      </main>
   )

}


function createData(name, categoria, cantidad, carbs) {
   return {
      name,
      categoria,
      cantidad,
      carbs,
      informacion: [
         {
            fecha_ven: '2020-01-05',
            donante: 'Omar Mamani',
            ubicacion: 3,
         },
         {
            fecha_ven: '2020-01-02',
            donante: 'Leo Perez',
            ubicacion: 1,
         },
      ],
   };
}

function Row(props) {
   const { row } = props;
   const [open, setOpen] = React.useState(false);

   return (
      <>
         <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
            <TableCell>
               <IconButton
                  aria-label="expand row"
                  size="small"
                  onClick={() => setOpen(!open)}
               >
                  {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
               </IconButton>
            </TableCell>
            <TableCell component="th" scope="row">
               {row.name}
            </TableCell>
            <TableCell align="left">{row.categoria}</TableCell>
            <TableCell align="left">{row.cantidad}</TableCell>
            <TableCell align="left">{row.carbs}</TableCell>

         </TableRow>
         <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
               <Collapse in={open} timeout="auto" unmountOnExit>
                  <Box sx={{ margin: 1 }}>
                     <Typography variant="h6" gutterBottom component="div">
                        Mas Información
                     </Typography>
                     <Table size="small" aria-label="purchases">
                        <TableHead>
                           <TableRow>
                              <TableCell>Fecha vencimiento</TableCell>
                              <TableCell>Donante</TableCell>
                              <TableCell align="right">Ubicación</TableCell>
                              <TableCell align="right">Fecha de donación</TableCell>
                           </TableRow>
                        </TableHead>
                        <TableBody>
                           {row.informacion.map((historyRow) => (
                              <TableRow key={historyRow.fecha_ven}>
                                 <TableCell component="th" scope="row">
                                    {historyRow.fecha_ven}
                                 </TableCell>
                                 <TableCell>{historyRow.donante}</TableCell>
                                 <TableCell align="right">{historyRow.ubicacion}</TableCell>
                                 <TableCell align="right">
                                    ....
                                 </TableCell>
                              </TableRow>
                           ))}
                        </TableBody>
                     </Table>
                  </Box>
               </Collapse>
            </TableCell>
         </TableRow>

      </>
   );
}
/*
Row.propTypes = {
   row: PropTypes.shape({
      categoria: PropTypes.number.isRequired,
      carbs: PropTypes.number.isRequired,
      cantidad: PropTypes.number.isRequired,
      informacion: PropTypes.arrayOf(
         PropTypes.shape({
            ubicacion: PropTypes.number.isRequired,
            donante: PropTypes.string.isRequired,
            fecha_ven: PropTypes.string.isRequired,
         }),
      ).isRequired,
      name: PropTypes.string.isRequired,
      
   }).isRequired,
};


*/
export default Productos; 