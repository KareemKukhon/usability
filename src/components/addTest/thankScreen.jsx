import React, { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Switch,
  Typography,
  Box,
  Tooltip,
  IconButton,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Divider
} from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import DeleteIcon from '@mui/icons-material/Delete';

export default function ThankScreen() {
  const [expandedPanel, setExpandedPanel] = useState(null);

  const handleSwitchChange = (panel) => {
    setExpandedPanel(expandedPanel === panel ? null : panel);
  };

  return (
    <Box maxWidth={1000} p={2} my={2} borderRadius={2} bgcolor="white">
      <Accordion
        expanded={expandedPanel === 'panel1'}
        elevation={0}
        sx={{
          backgroundColor: 'white',
          border: 'none',
          boxShadow: 'none'
        }}
      >
        <AccordionSummary
          aria-controls="panel1-content"
          id="panel1-header"
          expandIcon={
            <Switch
              checked={expandedPanel === 'panel1'}
              onChange={() => handleSwitchChange('panel1')}
            />
          }
        >
          <Typography variant="h4" sx={{ marginBottom: '16px' }}>Thank you Screen</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography variant="inherit">Title</Typography>
          <TextField
            label="Enter test name"
            sx={{ mt: 1, width: "100%" }}
          />
          <br /><br />
          <Typography variant="inherit">Message</Typography>
          <TextField
            label="Enter test name"
            sx={{ mt: 1, width: "100%" }}
          />
          <br /><br />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
