// npm 
import { useNavigate } from "react-router-dom";
import { useStore } from "./Auth";

const setLogged = useStore((state) => state.setLogged);
const setRol = useStore((state) => state.setRol)

const navigate = useNavigate();

export default function Salir() {
    setLogged(false);
    setRol("");
    localStorage.clear();
    navigate('/');
}
