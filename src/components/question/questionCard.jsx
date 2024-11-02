import React, { useState } from 'react';
import {
  Avatar, Box, Button, Chip, FormControl, FormControlLabel,
  FormLabel, IconButton, MobileStepper, Radio, RadioGroup,
  Stack, TextField, Tooltip, Typography
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { useTheme } from '@emotion/react';
import { FillInTheBlank } from './fillInTheBlank';
import { MultipleChoice } from './multipleChoice';

const steps = [
  { label: 'Question', component: <MultipleChoice /> },
  { label: 'Fill In The Blank', component: <FillInTheBlank /> },
];

export default function QuestionCard() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => Math.min(prevActiveStep + 1, maxSteps - 1));
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => Math.max(prevActiveStep - 1, 0));
  };

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 2,
      borderRadius: 1,
      backgroundColor: theme.palette.background.default,
    }}>
      <Box sx={{ boxShadow: 2, padding: 2, borderRadius: 1, width: '50%', textAlign: 'center',  }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Stack direction="row" gap="10px">
            <Typography variant="h3">$10</Typography>
            <Chip
              avatar={<Avatar alt="Natacha" src="./public/logo.png" />}
              label="Windows & Mac"
              variant="outlined"
            />
          </Stack>
          <Stack direction="row">
            <Tooltip title="Help Center">
              <IconButton>
                <HelpOutlineIcon />
              </IconButton>
            </Tooltip>
            <IconButton>
              <CloseIcon />
            </IconButton>
          </Stack>
        </Box>
      {steps[activeStep].component}
      
      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          paddingRight: 2,
        }}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            sx={{ marginLeft: 'auto' }}
          >
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
      />
    </Box>
    </Box>
    
  );
}