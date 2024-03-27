import React, { useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import style from '../css/table.module.css'

export const TablaPendientes = ({columnas=[{}],datos=[{}]}) => {
    const [Pagina, setPagina] = useState(0);
    const [FilasXpagina, setFilasXpagina] = useState(10)
  
    const handleChangePage = (event, newPage) => {
        setPagina(newPage);
      };
    
    const handleChangeRowsPerPage = (event) => {
        setFilasXpagina(+event.target.value);
        setPagina(0);
    };

    const retornar=(value)=>{
        console.log(value)
        }

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow >
                {columnas.map((column) => (
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
              {datos
                .slice(Pagina * FilasXpagina, Pagina * FilasXpagina + FilasXpagina)
                .map((row,index) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                      {columnas.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.id=='habilitar' ?
                                <div className={style.containerB}>
                                    <button onClick={()=>retornar(row.ci)} className={style.habilitar}>Habilitar</button>
                                    <button onClick={()=>retornar(row.ci)} className={style.deshabilitar}>Deshabilitar</button>
                                </div> 
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
          count={datos.length}
          rowsPerPage={FilasXpagina}
          page={Pagina}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage="Filas por página"
        />
      </Paper>
  )
}
