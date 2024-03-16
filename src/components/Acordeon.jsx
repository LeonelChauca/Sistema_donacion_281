import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from '../styles/components/Acordeon.module.css';
const Acordeon = ({titulo,respuesta}) => {
  return (
    <div>
        <Accordion className={styles.Accordion}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                {titulo }
            </AccordionSummary>
            <AccordionDetails>
                {respuesta}
            </AccordionDetails>
        </Accordion>

    </div>
  )
}

export default Acordeon
