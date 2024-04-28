import React, { useState, useEffect } from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import Axios from 'axios';
import { useStore } from "../../../controllers/Auth";

export default function Productos() {
  const [data, setData] = useState(null);
  const token = useStore((state) => state.token);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    Axios.get('https://proyecto-281-production.up.railway.app/api/delivery/getItemsDisponibles', {
      headers: {
        'x-token': token,
      },
    })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [token]); 

  if (!data) {
    return <div>Cargando...</div>;
  }

  const { alimentos, productos, dineros } = data;

  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h4" gutterBottom align="center" style={{ marginBottom: 20 }}>
        Lista de productos
      </Typography>

      {/* Tabla de alimentos */}
      <div style={{ width: '80%', margin: '0 auto' }}>
        <Typography variant="h6" gutterBottom style={{ marginBottom: 10 }}>
          Alimentos
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: 'bold', backgroundColor: theme.palette.primary.main, color: theme.palette.common.white }}>Nombre</TableCell>
                <TableCell style={{ fontWeight: 'bold', backgroundColor: theme.palette.primary.main, color: theme.palette.common.white }}>Cantidad</TableCell>
                <TableCell style={{ fontWeight: 'bold', backgroundColor: theme.palette.primary.main, color: theme.palette.common.white }}>Medida Unitaria</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {alimentos.map((alimento) => (
                <TableRow key={alimento.id_alimento}>
                  <TableCell>{alimento.nombre_a}</TableCell>
                  <TableCell>{alimento.cantidad_a}</TableCell>
                  <TableCell>{alimento.medida_unitaria_a}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      {/* Tabla de productos */}
      <div style={{ width: '80%', margin: '20px auto' }}>
        <Typography variant="h6" gutterBottom style={{ marginBottom: 10 }}>
          Productos
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: 'bold', backgroundColor: theme.palette.primary.main, color: theme.palette.common.white }}>Nombre</TableCell>
                <TableCell style={{ fontWeight: 'bold', backgroundColor: theme.palette.primary.main, color: theme.palette.common.white }}>Tipo</TableCell>
                <TableCell style={{ fontWeight: 'bold', backgroundColor: theme.palette.primary.main, color: theme.palette.common.white }}>Cantidad</TableCell>
                <TableCell style={{ fontWeight: 'bold', backgroundColor: theme.palette.primary.main, color: theme.palette.common.white }}>Medida Unitaria</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {productos.map((producto) => (
                <TableRow key={producto.id_producto}>
                  <TableCell>{producto.nombre_p}</TableCell>
                  <TableCell>{producto.tipo_p}</TableCell>
                  <TableCell>{producto.cantidad_p}</TableCell>
                  <TableCell>{producto.medida_unitaria_p}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      {/* Tabla de dinero */}
      <div style={{ width: '80%', margin: '20px auto' }}>
        <Typography variant="h6" gutterBottom style={{ marginBottom: 10 }}>
          Dinero
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: 'bold', backgroundColor: theme.palette.primary.main, color: theme.palette.common.white }}>Monto</TableCell>
                <TableCell style={{ fontWeight: 'bold', backgroundColor: theme.palette.primary.main, color: theme.palette.common.white }}>Cambio</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dineros.map((dinero) => (
                <TableRow key={dinero.id_dinero}>
                  <TableCell>{dinero.monto}</TableCell>
                  <TableCell>{dinero.cambio}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
