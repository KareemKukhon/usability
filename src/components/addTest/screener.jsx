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

export default function Screener() {
  const [expandedPanel, setExpandedPanel] = useState(null);
  const [questions, setQuestions] = useState([
    {
      questionType: 'single',
      text: '',
      answers: [{ text: '', isCorrect: false }, { text: '', isCorrect: false }]
    }
  ]);

  const handleSwitchChange = (panel) => {
    setExpandedPanel(expandedPanel === panel ? null : panel);
  };

  const handleQuestionTypeChange = (index, event) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].questionType = event.target.value;
    setQuestions(updatedQuestions);
  };

  const handleAnswerChange = (qIndex, aIndex, key, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[qIndex].answers[aIndex][key] = value;
    setQuestions(updatedQuestions);
  };

  const addAnswerField = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].answers.push({ text: '', isCorrect: false });
    setQuestions(updatedQuestions);
  };

  const deleteAnswerField = (qIndex, aIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[qIndex].answers.splice(aIndex, 1);
    setQuestions(updatedQuestions);
  };

  const addQuestionCard = () => {
    setQuestions([
      ...questions,
      {
        questionType: 'single',
        text: '',
        answers: [{ text: '', isCorrect: false }, { text: '', isCorrect: false }]
      }
    ]);
  };

  const deleteQuestionCard = (index) => {
    setQuestions(questions.filter((_, i) => i !== index));
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
              sx={{
                '& .MuiSwitch-switchBase.Mui-checked': {
                  color: '#FF6D00', // Active color for the thumb
                },
                '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                  backgroundColor: '#FF6D00', // Active color for the track
                },
              }}
              onChange={() => handleSwitchChange('panel1')}
            />
          }
        >
          <Typography variant="h4" sx={{ marginBottom: '16px' }}>Screener</Typography>
          <Tooltip title="Add screener questions to qualify participants based on certain targeting criteria.">
            <IconButton>
              <InfoOutlinedIcon color='disabled' />
            </IconButton>
          </Tooltip>
        </AccordionSummary>
        <AccordionDetails>
          {questions.map((question, qIndex) => (
            <Box key={qIndex} sx={{ mb: 2, border: '1px solid #ddd', borderRadius: 1, p: 2 }}>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="h6" color="#061D29">Question {qIndex + 1}</Typography>
                <IconButton onClick={() => deleteQuestionCard(qIndex)} color="error">
                  <DeleteIcon />
                </IconButton>
              </Box>
              <Typography>
                {question.questionType === 'single' ? 'Single choice question' : 'Multiple choice question'}
              </Typography>
              <TextField
                label="Question"
                value={question.text}
                onChange={(e) => {
                  const updatedQuestions = [...questions];
                  updatedQuestions[qIndex].text = e.target.value;
                  setQuestions(updatedQuestions);
                }}
                sx={{ mt: 1, width: '100%' }}
              />
              <FormControl fullWidth sx={{ mt: 2 }}>
                <InputLabel>Question Type</InputLabel>
                <Select
                  value={question.questionType}
                  onChange={(e) => handleQuestionTypeChange(qIndex, e)}
                  label="Question Type"
                >
                  <MenuItem value="single">Single Answer</MenuItem>
                  <MenuItem value="multiple">Multiple Answers</MenuItem>
                </Select>
              </FormControl>
              <Box sx={{ mt: 2 }}>
                {question.answers.map((answer, aIndex) => (
                  <Box key={aIndex} display="flex" alignItems="center" sx={{ mt: 1 }}>
                    <TextField
                      label={`Answer ${aIndex + 1}`}
                      value={answer.text}
                      onChange={(e) => handleAnswerChange(qIndex, aIndex, 'text', e.target.value)}
                      sx={{ width: '70%', mr: 2 }}
                    />
                    <FormControl sx={{ width: '20%', mr: 2 }}>
                      <InputLabel>Correct?</InputLabel>
                      <Select
                        value={answer.isCorrect ? 'yes' : 'no'}
                        onChange={(e) =>
                          handleAnswerChange(qIndex, aIndex, 'isCorrect', e.target.value === 'yes')
                        }
                        label="Correct?"
                      >
                        <MenuItem value="yes">Yes</MenuItem>
                        <MenuItem value="no">No</MenuItem>
                      </Select>
                    </FormControl>
                    <IconButton onClick={() => deleteAnswerField(qIndex, aIndex)} color="error">
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                ))}
              </Box>
              <Button onClick={() => addAnswerField(qIndex)} sx={{ mt: 2 }}>
                Add Answer
              </Button>
            </Box>
          ))}
          <Divider sx={{ my: 2 }} />
          <Button variant='contained' onClick={addQuestionCard}>
            Add Screener question
          </Button>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
