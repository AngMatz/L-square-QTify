import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from "./FAQ.module.css";
import { useState, useEffect } from 'react';
import { Box } from '@mui/material';


export default function FAQ({fetchFAQs}) {
 
  const [FAQData, setFAQData] = useState([]);

  useEffect(()=>{
    fetchFAQs().then((res) => {
    setFAQData(res.data);
    return res.data;
    });
  }, []);

  return (
    <Box className={styles.wrapper}>
        <Box>
            <h2 className={styles.heading}>FAQs</h2>
        </Box>
        {FAQData.map((FAQ) => {
          return (
        <Accordion className={styles.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={styles.arrowIcon}/>}
          aria-controls="panel-content"
        >
          {FAQ.question}
        </AccordionSummary>
        <AccordionDetails className={styles.accordionAnswer}>
          {FAQ.answer}
        </AccordionDetails>
        </Accordion>
          )
        })}
    </Box>
  );
}

