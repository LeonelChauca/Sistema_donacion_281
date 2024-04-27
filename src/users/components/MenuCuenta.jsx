import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { useStore } from '../../controllers/Auth';
import { useNavigate } from 'react-router-dom';
import style from './css/MenuCuenta.module.css'



import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';

import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';


/**/
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import BallotIcon from '@mui/icons-material/Ballot';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import BeenhereIcon from '@mui/icons-material/Beenhere';


import CallReceivedIcon from '@mui/icons-material/CallReceived';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import ChecklistRtlIcon from '@mui/icons-material/ChecklistRtl';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';


import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
export default function MenuCuenta() {
    const user = useStore((state) => state.user)
    const rol = useStore((state) => state.rol)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const setLogged = useStore((state) => state.setLogged);
    const setRol = useStore((state) => state.setRol)

    const navigate = useNavigate();


    const rolesMessages = {
        donante: "Donante",
        encargado_donante: "Donante",
        donante_natural: "Donante",
        voluntario: "Voluntario",
        encargado_org_ben: "Receptor",
        encargado_receptor: "Receptor",
        receptor_natural: "Receptor"
    };

    function Salir() {
        setLogged(false);
        setRol("");
        localStorage.clear();
        navigate('/');
    }
    

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    
    function animacion() {

        const elemento = document.querySelector('.' + style.rol)
        var scrollTop = window.scrollY || window.pageYOffset;
        if (scrollTop < 100) {
            elemento.classList.add(style.animacion);
        } else {
            elemento.classList.remove(style.animacion);
        }
    }
    React.useEffect(() => {
        window.addEventListener('scroll', animacion);

        return (() => {
            window.removeEventListener('scroll', animacion);
        })

    }, [])
    return (
        <>
            <p className={style.rol}>{rolesMessages[rol] || rol}</p>

            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', cursor:'pointer' }} 
            onClick={handleClick}
            >
                <Typography>{user}</Typography>
                <Tooltip title="Configuraciones">
                    <IconButton
                        
                        size="small"
                        sx={{ ml: 0 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar sx={{ width: 32, height: 32, background: '#5356FF', display: 'flex', flexWrap: 'wrap', alignItems: 'center', textAlign: 'center' }}><p>{user.charAt(0).toUpperCase()}</p></Avatar>
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}

                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        bgcolor: 'rgba(255, 255, 255, 0.95)',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&::before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'rgba(255, 255, 255, 0.95)',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={handleClose} >
                    <Avatar /> Perfil
                </MenuItem>
                <MenuItem onClick={handleClose} >
                <ListItemIcon>
                <CloseFullscreenIcon/>
                    </ListItemIcon>
                    
                  Cerrar
                </MenuItem>
                <Divider />
                {
                    rol == "admin" && <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <Settings fontSize="small" />
                        </ListItemIcon>
                        Dashboard
                    </MenuItem>
                }

                <MenuItem onClick={() => {
                    Salir();
                    handleClose();
                }}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Salir
                </MenuItem>

                {(rol == "donante_natural" || rol == "encargado_donante" || rol == "donante") && <Donante handleClose={handleClose} />}

                {(rol == "receptor_natural" || rol == "encargado_receptor" || rol == "encargado_org_ben") && <Receptor handleClose={handleClose} />}

                {(rol == "voluntario") && <Voluntario handleClose={handleClose} />}

            </Menu>
        </>
    );
}


function Voluntario({ handleClose }) {

    const listaItemsPostulantes = [
        { 'url': '/p_representante', 'nombreItem': 'Representante', 'icon':<AdminPanelSettingsIcon fontSize="small" />  },
        { 'url': '/p_colaborador', 'nombreItem': 'Colaborador', 'icon': <PeopleAltIcon fontSize="small" /> },
        { 'url': '/p_entregar', 'nombreItem': 'Entregar', 'icon': <LocalShippingIcon fontSize="small" /> }
    ]
    const listaVerPostulantes = [
        { 'url': '/ver_postulaciones', 'nombreItem': 'Responsable', 'icon': <BallotIcon fontSize="small" /> },
        { 'url': '/ver_postulaciones_colab', 'nombreItem': 'Colaborador', 'icon': <FormatListNumberedIcon fontSize="small" /> },
    ]
    return (
        <>
            <ListaItemsMenu titulo="Postular"  icono={<FolderSharedIcon fontSize="small" />} handleClose={handleClose} listaElementos={[...listaItemsPostulantes]} />
            <ListaItemsMenu titulo="Ver Postulaciones" icono={<FactCheckIcon/>} handleClose={handleClose} listaElementos={[...listaVerPostulantes]} />
        </>
    )
}

function Receptor({ handleClose }) {
    const listaItemsReceptor = [
        { 'url': '/Solicitar-donacion', 'nombreItem': 'Solicitar', 'icon': <ArrowOutwardIcon fontSize="small" /> },
        { 'url': '/Confirma-solicitud-donacion', 'nombreItem': 'Confirmar', 'icon': <DoneAllIcon fontSize="small" /> },
    ]
    const listaVerDonaciones = [
        { 'url': '/donaciones_disponibles', 'nombreItem': 'Disponibles', 'icon': <ChecklistRtlIcon fontSize="small" /> }
    ]
    return (
        <>
            <ListaItemsMenu titulo="Receptor"  icono={<CallReceivedIcon/>} handleClose={handleClose} listaElementos={[...listaItemsReceptor]} />
            <ListaItemsMenu titulo="Ver Donaciones" icono={<RemoveRedEyeIcon/>} handleClose={handleClose}  listaElementos={[...listaVerDonaciones]} />
        </>
    )
}

function Donante({ handleClose }) {

    const listaItemsDonacion = [
        { 'url': '/Agrega-donacion', 'nombreItem': 'Agregar', 'icon': <AddCircleIcon fontSize="small" /> },
        { 'url': '/Confirma-donacion', 'nombreItem': 'Confirmar', 'icon': <BeenhereIcon fontSize="small" /> },
    ]
    return (
        <>
            <ListaItemsMenu titulo="Donacion" icono={<VolunteerActivismIcon/>} handleClose={handleClose} listaElementos={[...listaItemsDonacion]} />
        </>
    )
}





function ListaItemsMenu({ titulo, listaElementos, handleClose , icono}) {
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();
    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <>
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    {icono||<Settings fontSize="small" />}
                </ListItemIcon>
                <ListItemText primary={titulo} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {
                        listaElementos?.map((item) =>
                            <ListItemButton key={item.nombreItem + parseInt(Math.random() * 10)} sx={{ pl: 4 }} onClick={() => { handleClose(); navigate(item.url); }}>
                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.nombreItem} />
                            </ListItemButton>
                        )
                    }

                </List>
            </Collapse>
        </>
    )

}