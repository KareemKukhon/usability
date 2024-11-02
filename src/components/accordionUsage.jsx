import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { theme } from '../config/themes/theme';

export default function AccordionUsage() {
  return (
    <div>
      <Accordion sx={{backgroundColor: "background.paper", color: "text.primary"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color: "primary.main"}}/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Set Up Your Test
        </AccordionSummary>
        <AccordionDetails sx={{color: "text.secondary"}}>
        Once you're logged in, you can set up your test. 
        Choose the type of testing you want and specify the goals you hope to achieve. This step helps tailor the testing process to meet your specific needs.
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{backgroundColor: "background.paper", color: "text.primary"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color: "primary.main"}}/>}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Select Testers
        </AccordionSummary>
        <AccordionDetails sx={{color: "text.secondary"}}>
        After setting up your test, you can select from a pool of expert testers or real users. 
        Choose the testers that best fit your target audience to ensure you receive relevant feedback.
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{backgroundColor: "background.paper", color: "text.primary"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color: "primary.main"}}/>}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Analyze Feedback
        </AccordionSummary>
        <AccordionDetails sx={{color: "text.secondary"}}>
        Once the testing is complete, you’ll receive detailed feedback and insights from the testers. 
        This valuable information will help you understand how users interact with your app and identify areas for improvement.
        </AccordionDetails>
        {/* <AccordionActions>
          <Button>Cancel</Button>
          <Button>Agree</Button>
        </AccordionActions> */}
      </Accordion>
    </div>
  );
}