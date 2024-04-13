
import { useStore } from "../../controllers/Auth.js"
// Iconos 

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';


import style from "./css/sidebar.module.css"
// npm 
import { Link, useNavigate } from "react-router-dom";

export default function NavAdm({children, closeNav, setCloseNav }) {
    const user = useStore((state) => state.user);
    const rol = useStore((state) => state.rol);
    const setLogged = useStore((state) => state.setLogged);
    const setRol = useStore((state) => state.setRol)

    const navigate = useNavigate();

    function logout() {
        setLogged(false);
        setRol("");
        localStorage.clear();
        navigate('/');
    }

    return (
        <nav className={style.sidebar + (closeNav ? ` ${style.close}` : "")}>
            <header>
                <div className={style.image_text}>
                    <span className={style.image}>
                        <img src="icon.png" alt="Logo de la SW" />
                    </span>
                    <div className={`${style.text} ${style.logo_text}`}>
                        <span className={style.name}>{rol == "admin" ? "Administrador" : rol}</span>
                        <span className={`${style.profession} ${style.usuario}`}>{user}</span>
                    </div>
                </div>
                <KeyboardArrowRightIcon className={` ${style.toggle}`} onClick={() => setCloseNav(!closeNav)} />
            </header>

            <div className={style.menu_bar}>
                <div className={style.menu}>
                    <li className={style.search_box}>
                        <i className={style.icon}></i>
                        <input type="text" placeholder="Buscar..." />
                    </li>
                  {
                    children
                  }
                </div>

                <div className={style.bottom_content}>
                    <li className={style.logout} onClick={() => { logout() }}>
                        <a >
                            <LogoutRoundedIcon />
                            <span className={style.text} >Logout</span>
                        </a>
                    </li>
                </div>
            </div>

        </nav>
    )
}

