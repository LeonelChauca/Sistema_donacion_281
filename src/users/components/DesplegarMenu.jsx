import MenuItem from "./MenuItem";
import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';
import PostAddIcon from '@mui/icons-material/PostAdd';

import { useState } from "react";
export default function DesplegarMenu({children, texto="Postulacion",  url="#" }) {

    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <>
            <MenuItem texto={texto} url={url} handleClick={handleClick} open={open}>
                <PostAddIcon />
            </MenuItem>
            <Collapse in={open} timeout="auto" unmountOnExit  >
                <List component="div" disablePadding style={{ background: "rgb(249 248 248)", borderRadius: 6 }}>
                    {
                        children
                    }
                </List>
            </Collapse>

        </>

    )
}