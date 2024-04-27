import React, { useEffect, useState } from 'react'
import { ResponsiveContainer, PieChart, Pie, Tooltip, Cell } from 'recharts'
import { useStore } from "../../../../controllers/Auth.js";
import axios from 'axios';
import styles from '../../css/TortaE.module.css'
const colors = ['#2C4E80', '#00215E', '#FC4100', '#ff3333', '#FFC55A'];

export const TortaE = () => {
    const token = useStore((state) => state.token);
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        axios.get('https://proyecto-281-production.up.railway.app/api/review/userAll', {
            headers: {
                'x-token': token
            }
        })
        .then((response) => {
            console.log(response.data);
            const newData = Object.entries(response.data)
                .map(([key, value]) => ({
                    name: key,
                    value: Array.isArray(value) ? value.length : 0
                }))
                .filter(entry => entry.value !== 0);
            setChartData(newData);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
    }, []);
    
    

    return (
        <div style={{width:'90%',height:'500px',textAlign:'center'}} className={styles.container}>
            <h2>Total de usuarios por tipo</h2>
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        dataKey="value"
                        data={chartData}
                        innerRadius={45}
                        outerRadius={100}
                        fill="#82ca9d"
                        label={({ name }) => name}
                    >
                        {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </div>
    )
}
