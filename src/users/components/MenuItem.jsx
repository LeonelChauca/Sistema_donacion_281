
import { Link } from "react-router-dom";
import Tooltip from '@mui/material/Tooltip';
import style from "./css/sidebar.module.css"
export default function MenuItem({ children, texto = "Menu", url = "#" ,handleClick, open}) {
    return (
        <ul onClick={handleClick}> 
          <Tooltip title={texto} placement="right">
            <li>
                <Link to={url}>
                    {children}
                    <span className={style.text}>{texto}</span>
                </Link>
            </li>
            </Tooltip>
        </ul>
    )
}