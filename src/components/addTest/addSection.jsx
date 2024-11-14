import { Box, Typography, Avatar, IconButton, Divider } from '@mui/material';
import React, { useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { useNavigate } from 'react-router-dom';
import InstructionCard from './instructionCard';
import StandardQuestionaire from './standardQuestionaire';
import InteractiveQuestion from './interactiveQuestion';
import DeleteIcon from '@mui/icons-material/Delete'; // Import delete icon

export default function AddSection() {
  const navigate = useNavigate();
  
  // Separate sections state for grouping
  const [instructionSections, setInstructionSections] = useState([]);
  const [questionnaireSections, setQuestionnaireSections] = useState([]);

  // Function to create and add a card based on the clicked section
  const handleSectionClick = (title, description) => {
    if (title === "Live Feedback Session") {
      window.open("https://calendly.com/", "_blank");
    } else {
      const newSection = { id: `section-${title}-${Date.now()}`, title, description };
      if (title === "Standard Questionnaire") {
        setQuestionnaireSections((prevSections) => [...prevSections, newSection]);
      } else {
        setInstructionSections((prevSections) => [...prevSections, newSection]);
      }
    }
  };

  // Function to handle reordering of instruction and screen recording cards
  const handleDragEnd = (result, sections, setSections) => {
    if (!result.destination) return;

    const reorderedSections = Array.from(sections);
    const [removed] = reorderedSections.splice(result.source.index, 1);
    reorderedSections.splice(result.destination.index, 0, removed);
    setSections(reorderedSections);
  };

  // Function to delete a section from either instructions or questionnaires
  const handleDelete = (sectionId, sectionType) => {
    if (sectionType === 'instruction') {
      setInstructionSections((prevSections) => prevSections.filter(section => section.id !== sectionId));
    } else {
      setQuestionnaireSections((prevSections) => prevSections.filter(section => section.id !== sectionId));
    }
  };

  // Function to render each section box
  const renderSectionBox = (title, description) => (
    <Box
      sx={{
        maxWidth: '450px',
        display: 'flex',
        alignItems: 'center',
        border: '2px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        cursor: 'pointer',
        transition: 'transform 0.3s, box-shadow 0.3s, border-color 0.3s',
        '&:hover': {
          color: "white",
          border: "none",
          transform: 'scale(1.01)',
          boxShadow: 2,
          backgroundColor: '#333333',
        },
      }}
      onClick={() => handleSectionClick(title, description)}
    >
      <Avatar sx={{ marginRight: '16px' }}>A</Avatar>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h6" sx={{ marginBottom: '2px' }}>
          {title}
        </Typography>
        <Typography variant="caption">
          {description}
        </Typography>
      </Box>
    </Box>
  );

  return (
    <Box p={2} my={2} borderRadius={2} bgcolor="white" maxWidth={"1000px"}>
      <Typography variant="h4" sx={{ marginBottom: '16px' }}>
        Add Section
      </Typography>

      <Box display="flex" flexWrap="wrap" gap={2}>
        {renderSectionBox("Instruction", "Set the scene or provide special instructions for participants to read")}
        {renderSectionBox("Standard Questionnaire", "Engage users in a straightforward question-and-answer session to gather feedback and insights.")}
        {renderSectionBox("Interactive Screen Recording", "Observe users in real time as they interact with your app or website, with screen and audio recording to capture their thoughts and actions.")}
        {renderSectionBox("Live Feedback Session", "Set up a live video meeting with your target audience to gather in-depth insights and personalized feedback directly from users.")}
      </Box>

      {/* Drag and drop for Instruction and Interactive Screen Recording sections */}
      <DragDropContext onDragEnd={(result) => handleDragEnd(result, instructionSections, setInstructionSections)}>
        <Droppable droppableId="droppable-instruction">
          {(provided) => (
            <Box
              {...provided.droppableProps}
              ref={provided.innerRef}
              sx={{ mt: 4, display: 'flex', flexDirection: 'column', gap: 2 }}
            >
              {instructionSections.map((section, index) => (
                <Draggable key={section.id} draggableId={section.id} index={index}>
                  {(provided) => (
                    <>
                      <Box
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          border: '1px solid #ccc',
                          borderRadius: '8px',
                          padding: '16px',
                          boxShadow: 1,
                          backgroundColor: 'background.paper',
                          marginBottom: '8px',
                        }}
                      >
                        {section.title === 'Instruction' ? (
                          <InstructionCard />
                        ) : (
                          <InteractiveQuestion />
                        )}
                        <IconButton 
                          onClick={() => handleDelete(section.id, 'instruction')}
                          sx={{ marginLeft: 'auto' }}  // Align to the right
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Box>
                    </>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Box>
          )}
        </Droppable>
      </DragDropContext>

      <br />
      <Divider />

      {/* Drag and drop for Standard Questionnaire sections */}
      <DragDropContext onDragEnd={(result) => handleDragEnd(result, questionnaireSections, setQuestionnaireSections)}>
        <Droppable droppableId="droppable-questionnaire">
          {(provided) => (
            <Box
              {...provided.droppableProps}
              ref={provided.innerRef}
              sx={{ mt: 4, display: 'flex', flexDirection: 'column', gap: 2 }}
            >
              {questionnaireSections.map((section, index) => (
                <Draggable key={section.id} draggableId={section.id} index={index}>
                  {(provided) => (
                    <Box
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      bgcolor={"#e67725c7"}
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        border: '1px solid #ccc',
                        borderRadius: '8px',
                        padding: '16px',
                        boxShadow: 1,
                        backgroundColor: 'background.paper',
                        marginBottom: '8px',
                      }}
                    >
                      <StandardQuestionaire />
                      <IconButton 
                        onClick={() => handleDelete(section.id, 'questionnaire')}
                        sx={{ marginLeft: 'auto' }}  // Align to the right
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Box>
          )}
        </Droppable>
      </DragDropContext>
    </Box>
  );
}
