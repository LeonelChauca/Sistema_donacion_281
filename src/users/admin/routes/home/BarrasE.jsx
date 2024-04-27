import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styles from '../../css/TortaE.module.css';

export const BarrasE = () => {
  // Datos de ejemplo
  const data = [
    { name: 'A', value: 400 },
    { name: 'B', value: 300 },
    { name: 'C', value: 600 },
    { name: 'D', value: 800 },
    { name: 'E', value: 500 },
    {name: 'A', value: 400 },
    { name: 'B', value: 300 },
    { name: 'C', value: 600 },
    { name: 'D', value: 800 },
    { name: 'E', value: 500 },
  ];

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
