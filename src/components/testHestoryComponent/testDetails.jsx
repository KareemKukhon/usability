import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';
import { Box, Chip, Divider, Stack } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { ExpandMore } from '@mui/icons-material';
export default function TestDetails() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };
  const handleAccordionChange = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };


  return (
<Box my={5}>
  <Box my={1}>
  <Accordion expanded={expanded} onChange={handleAccordionChange} sx={{width: "100%"}}>
      <AccordionSummary aria-controls="panel2-content" id="panel2-header" >
        <Box display="flex" flexDirection="column">
              <Typography variant="h7" fontWeight="bold">
            Apr 2, 2023, 8:31 Am
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" sx={{ alignSelf: "flex-start", cursor: "pointer" }}>
            #5424273X
          </Typography>  
            <Stack variant="row" direction={"row"} mt={1}>
                <Chip label="Paid" color="success" />
                <Typography fontWeight={"bold"} ml={1}>$10</Typography>
            </Stack>
          
          <br />
          <Box display="flex" alignItems="center">
            <Typography variant="body2" fontWeight="bold" color="blue">
              {expanded? " collaps":"see more"}
            </Typography>
            <ExpandMore
              sx={{
                color: 'blue',
                transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease',
                marginLeft: '4px'
              }}
            />
          </Box>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
      <Box display="flex" flexDirection="column" width="100%" alignContent="flex-start" justifyContent="flex-start">
  <Typography fontWeight="bold" sx={{ alignSelf: "flex-start", cursor: "pointer", width: "120vh", textAlign: "left" }}>
    Reward details
  </Typography>
  <table style={{ width: "70%", textAlign: "left" }}>
    <tbody>
      <tr>
        <td>Payment status</td>
        <td><Chip label="Paid" color="success" /></td>
      </tr>
      <tr>
        <td >Amount</td>
        <td>$10</td>
      </tr>
      <tr>
        <td>Payment date</td>
        <td>May 19, 2023</td>
      </tr>
      <tr>
        <td>PayPal email</td>
        <td>kareemkukhon1@gmail.com</td>
      </tr>
    </tbody>
    
    
  </table>
  <Divider sx={{
    my:2
  }}></Divider>
  <Typography variant='h7' fontWeight={"bold"} textAlign= "left">Test datails</Typography>
  <table style={{ width: "70%", textAlign: "left",}}>
    <tbody>
      <tr>
        <td>Test ID</td>
        <td>4563546</td>
      </tr>
      <tr>
        <td >Test date and time</td>
        <td>Apr 2, 2023, 8:31 Am</td>
      </tr>
      <tr>
        <td>Test status</td>
        <td>Completed</td>
      </tr>

    </tbody>
    
    
  </table>
</Box>

      </AccordionDetails>
    </Accordion>


  </Box>
</Box>


  );
}
