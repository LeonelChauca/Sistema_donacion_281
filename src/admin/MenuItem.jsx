
import { Link } from "react-router-dom";
import style from "./css/sidebar.module.css"
export default function MenuItem({ children, texto = "Menu", url = "#" }) {
    return (
        <ul>
            <li>

                <Link to={url}>
                    {children}
                    <span className={style.text}>{texto}</span>
                </Link>

            </li>

        </ul>
    )
}