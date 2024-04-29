import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import Paper from '@mui/material/Paper';
import { BotonesRd } from './BotonesRd';
export const TableRD = ({columns,rows,idDon,setAct,Act,ruta}) => {

  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 850 }} aria-label="simple table">
        <TableHead>
            <TableRow>
                {columns.map((column, index) => (
                    <TableCell
                        key={index} 
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                    >
                        {column.label}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
        <TableBody>
            {rows.map((row, index) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={index}> 
                    {columns.map((column) => {
                        const value = row[column.id];
                        return (
                            <TableCell key={column.id} align={column.align}>{
                                column.id=="Accion" ? <BotonesRd idUser={row.id_user} idDon={idDon} setAct={setAct} Act={Act} ruta={ruta}/> : value
                            }
                            </TableCell>
                        );
                    })}
                </TableRow>
            ))}
        </TableBody>
    </Table>
</TableContainer>
  )
}
