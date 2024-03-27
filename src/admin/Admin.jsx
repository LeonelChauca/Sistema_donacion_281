import Main from "./Main";
import NavAdm from "./NavAdm";
import { useState } from "react";
export default function Admin(){
    const [closeNav, setCloseNav]=useState(true); 
    return (
        <>
        <NavAdm  closeNav={closeNav}  setCloseNav={setCloseNav}/>
        <Main closeNav={closeNav}/>
        </>
    )
}