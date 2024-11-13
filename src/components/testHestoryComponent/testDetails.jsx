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

  const handleAccordionChange = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <Box my={1} width="100%">
      <Accordion expanded={expanded} onChange={handleAccordionChange} sx={{ width: '100%' }}>
        <AccordionSummary aria-controls="panel2-content" id="panel2-header">
          <Box display="flex" flexDirection="column" width="100%">
            <Box display="flex" justifyContent="space-between" flexDirection={{ xs: 'column', sm: 'row' }}>
              <Box>
                <Typography variant="subtitle1" fontWeight="bold" textAlign="left">
                  Apr 2, 2023, 8:31 Am
                </Typography>
                <Typography variant="subtitle2" color="text.secondary" textAlign="left" sx={{ cursor: 'pointer' }}>
                  #5424273X
                </Typography>
              </Box>
              <Stack direction="row" mt={{ xs: 1, sm: 0 }} spacing={1}>
                <Chip label="Paid" color="success" />
                <Typography fontWeight="bold">$10</Typography>
              </Stack>
            </Box>
            <Box display="flex" alignItems="center" mt={1}>
              <Typography variant="body2" fontWeight="bold" color="blue">
                {expanded ? 'Collapse' : 'See more'}
              </Typography>
              <ExpandMore
                sx={{
                  color: 'blue',
                  transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease',
                  marginLeft: '4px',
                }}
              />
            </Box>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Box display="flex" flexDirection="column" alignItems="flex-start">
            <Typography fontWeight="bold" textAlign="left" sx={{ width: { xs: '100%', sm: '70%' } }}>
              Reward details
            </Typography>
            <table style={{ width: '100%', textAlign: 'left' }}>
              <tbody>
                <tr>
                  <td>Payment status</td>
                  <td><Chip label="Paid" color="success" /></td>
                </tr>
                <tr>
                  <td>Amount</td>
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
            <Divider sx={{ my: 2 }} />
            <Typography variant="subtitle1" fontWeight="bold" textAlign="left">Test details</Typography>
            <table style={{ width: '100%', textAlign: 'left' }}>
              <tbody>
                <tr>
                  <td>Test ID</td>
                  <td>4563546</td>
                </tr>
                <tr>
                  <td>Test date and time</td>
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
  );
}
