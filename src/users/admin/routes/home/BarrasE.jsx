import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styles from '../../css/TortaE.module.css';
import Axios from 'axios';
import { useStore } from "../../../../controllers/Auth";

export const BarrasE = () => {
  const [data, setData] = useState([]);
  const token = useStore((state) => state.token);

  useEffect(() => {
    Axios.get('https://proyecto-281-production.up.railway.app/api/delivery/getItemsDisponibles', {
      headers: {
        'x-token': token,
      }
    })
      .then(response => {
        const alimentos = response.data.alimentos.map(alimento => ({
          name: alimento.nombre_a,
          value: alimento.cantidad_a
        }));
        
        const productos = response.data.productos.map(producto => ({
          name: producto.nombre_p,
          value: producto.cantidad_p
        }));

        setData([...alimentos, ...productos]);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [token]);

  return (
    <div style={{width:'90%',height:'500px',textAlign:'center'}} className={styles.container}>
        <h2>Total de Productos</h2>
    <ResponsiveContainer width="95%" aspect={2}>
      <BarChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="4 1 2" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
    </div>
  );
};
