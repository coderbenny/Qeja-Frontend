import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordionExpandDefault({faq}) {
  return (
    <div >
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          className="bg-slate-950"
        >
          <Typography ><span className="font-bold">{faq.title}</span></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {faq.content}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
