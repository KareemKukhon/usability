import React, { useState } from 'react';
import { Box, TextField, MenuItem, Typography, RadioGroup, FormControlLabel, Radio, Button, IconButton, Slider } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function StandardQuestionaire({innerRef, draggableProps, dragHandleProps, }) {
  const [question, setQuestion] = useState('');
  const [answerType, setAnswerType] = useState('');
  const [options, setOptions] = useState(['']);

  const handleAnswerTypeChange = (event) => {
    setAnswerType(event.target.value);
    setOptions(['']); // Reset options if answer type changes
  };

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  const addOption = () => {
    setOptions([...options, '']);
  };

  const deleteOption = (index) => {
    const updatedOptions = options.filter((_, i) => i !== index);
    setOptions(updatedOptions);
  };

  return (
    <Box 
    ref={innerRef}
        {...draggableProps}
        {...dragHandleProps}
        width={"90%"}
        
        sx={{
        display: 'flex',
        flexDirection: 'column',
        gap:2,
        alignItems: 'left',
        justifyContent: 'space-between',
        borderRadius: '8px',
        padding: '16px',

        }}>

      <Typography  variant="h4" fontWeight={"bold"}>Standard questionnaire</Typography>

      {/* Question Input */}
      <TextField
        label="Enter your question"
        variant="outlined"
        fullWidth
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      {/* Answer Type Dropdown */}
      <TextField
        label="Answer Type"
        select
        value={answerType}
        onChange={handleAnswerTypeChange}
        variant="outlined"
        fullWidth
      >
        <MenuItem value="text">Text</MenuItem>
        <MenuItem value="multipleChoice">Multiple Choice</MenuItem>
        <MenuItem value="singleChoice">Single Choice</MenuItem>
        <MenuItem value="linearScale">Linear Scale</MenuItem>
      </TextField>

      {/* Conditional Rendering Based on Answer Type */}
      {answerType === 'text' && (
        <TextField
          label="Sample Text Answer"
          variant="outlined"
          fullWidth
          disabled
          placeholder="This is where the user's answer will go"
        />
      )}

      {answerType === 'multipleChoice' && (
        <Box>
          <Typography>Multiple Choice Options</Typography>
          {options.map((option, index) => (
            <Box key={index} display="flex" alignItems="center" gap={1} mb={1}>
              <TextField
                label={`Option ${index + 1}`}
                variant="outlined"
                fullWidth
                value={option}
                onChange={(e) => handleOptionChange(index, e.target.value)}
              />
              <IconButton color="error" onClick={() => deleteOption(index)}>
                <DeleteIcon />
              </IconButton>
            </Box>
          ))}
          <Button variant="outlined" onClick={addOption} sx={{ mt: 1 }}>
            Add Option
          </Button>
        </Box>
      )}

      {answerType === 'singleChoice' && (
        <Box>
          <Typography>Single Choice Options</Typography>
          <RadioGroup>
            {options.map((option, index) => (
              <Box key={index} display="flex" alignItems="center" gap={1} mb={1}>
                <FormControlLabel
                  control={<Radio disabled />}
                  label={
                    <TextField
                      label={`Option ${index + 1}`}
                      variant="outlined"
                      value={option}
                      onChange={(e) => handleOptionChange(index, e.target.value)}
                      fullWidth
                    />
                  }
                />
                <IconButton color="error" onClick={() => deleteOption(index)}>
                  <DeleteIcon />
                </IconButton>
              </Box>
            ))}
          </RadioGroup>
          <Button variant="outlined" onClick={addOption} sx={{ mt: 1 }}>
            Add Option
          </Button>
        </Box>
      )}

      {answerType === 'linearScale' && (
        <Box>
          <Typography>Linear Scale</Typography>
          <Slider
            defaultValue={5}
            step={1}
            marks
            min={1}
            max={10}
            disabled
          />
          <Typography variant="caption" display="block">
            User will select a value between 1 and 10
          </Typography>
        </Box>
      )}
    </Box>
  );
}
