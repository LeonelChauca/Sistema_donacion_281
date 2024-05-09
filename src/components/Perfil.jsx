
import { useEffect, useState } from 'react';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useStore } from '../controllers/Auth.js'
import style from './Perfil.module.css';
import axios from 'axios';
export default function Perfil() {
    const user = useStore((state) => state.user);
    const id_user = useStore((state) => state.id_user);
    const rol = useStore((state) => state.rol);
    const token = useStore((state) => state.token);
    const [data, setData] = useState(null);

    function GetInfoPerfil() {
        axios.get('https://proyecto-281-production.up.railway.app/api/auth/mostrarDatos', {
            headers: {
                "x-token": token,
                "id_user": id_user
            }
        })
            .then(response => {
                console.log(response.data);
                setData(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }

    useEffect(() => {
        GetInfoPerfil();
    }, []);
    return (

        <div className={style.formulario}>
            <h3>Perfil</h3>
            <div className={style.lista_datos}>

                {data && <MostraDatos datos={data} rol={rol} user={user} />}


            </div>
        </div>



    )
}

function MostraDatos({ datos, rol, user }) {


    return (<>


        <Card sx={{ maxWidth: 320 }} style={{margin:'auto'}}>
            <CardActionArea>
                <Typography gutterBottom variant="h5" component="div">
                    {user}
                </Typography>
                <CardMedia
                    component="img"
                    height="140"
                    image="fondoUser.jpg"
                    alt="Fondo User "
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {datos.nombre}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {datos.ap_paterno} {datos.ap_materno}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {datos.correo}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {datos.fecha_nac}
                    </Typography>

                </CardContent>
            </CardActionArea>
        </Card>
    </>)
}