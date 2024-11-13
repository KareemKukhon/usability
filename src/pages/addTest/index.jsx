import { Box, Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import React, { useRef } from 'react';
import LoggedAppBar from '../../components/loggedAppBar';
import TestDetails from '../../components/addTest/testDetails';
import Screener from '../../components/addTest/screener';
import WelcomeScreen from '../../components/addTest/welcomeScreen';
import AddSection from '../../components/addTest/addSection';
import ThankScreen from '../../components/addTest/thankScreen';

export default function MainComponent() {
  // Create refs for each section
  const testDetailsRef = useRef(null);
  const screenerRef = useRef(null);
  const welcomeScreenRef = useRef(null);
  const addSectionRef = useRef(null);
  const thankScreenRef = useRef(null);

  // Function to scroll to a section
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box>
        <LoggedAppBar />
      <Box display="flex" >
      {/* Sidebar */}
      <Box
        sx={{
          width: '18%',
          ml:1,
          padding: '16px',
          borderRadius: 5,
          position: 'fixed', // Keeps the sidebar fixed
          backgroundColor: 'white', // Light background for visibility
          overflowY: 'auto', // Adds scroll if the list is long
        }}
      >
        <List>
          <ListItem button onClick={() => scrollToSection(testDetailsRef)}>
            <ListItemText primary="Test Details" />
          </ListItem>
          <ListItem button onClick={() => scrollToSection(screenerRef)}>
            <ListItemText primary="Screener" />
          </ListItem>
          <ListItem button onClick={() => scrollToSection(welcomeScreenRef)}>
            <ListItemText primary="Welcome Screen" />
          </ListItem>
          <ListItem button onClick={() => scrollToSection(addSectionRef)}>
            <ListItemText primary="Add Section" />
          </ListItem>
          <ListItem button onClick={() => scrollToSection(thankScreenRef)}>
            <ListItemText primary="Thank Screen" />
          </ListItem>

          {/* Additional Buttons */}
          <ListItem>
            <Button variant="contained" fullWidth>
                Save and continue
            </Button>
          </ListItem>
          <ListItem>
            <Button variant="outlined" fullWidth>
              Save and preview
            </Button>
          </ListItem>
          
          
        </List>
      </Box>

      {/* Main Content */}
      <Box ml="220px" flexGrow={1} p={2}> {/* Adjusted margin for sidebar */}
        
        <Box justifySelf="center">
          <Box ref={testDetailsRef}>
            <TestDetails />
          </Box>
          <Box ref={screenerRef}>
            <Screener />
          </Box>
          <Box ref={welcomeScreenRef}>
            <WelcomeScreen />
          </Box>
          <Box ref={addSectionRef}>
            <AddSection />
          </Box>
          <Box ref={thankScreenRef}>
            <ThankScreen />
          </Box>
        </Box>
      </Box>
    </Box>  
    </Box>
    
  );
}
