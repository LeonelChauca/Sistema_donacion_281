import axios from "axios";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { useStore } from "../../../controllers/Auth.js";
import { TortaE } from "./home/TortaE.jsx";
import style from '../css/home.module.css';
import { BarrasE } from "./home/BarrasE.jsx";
ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.defaults.color='#ffff';

export default function Home() {
    const token = useStore((state) => state.token);
    
    return (
        <div className={style.container}>
                <TortaE/>
                <BarrasE/>
        </div>
    );
}