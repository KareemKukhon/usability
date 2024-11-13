import { Box, Typography, Avatar, Grid2 } from '@mui/material'
import React from 'react'

export default function AddSection() {
  // Function to render each section box
  const renderSectionBox = () => (
    <Box
      sx={{
        maxWidth: '450px',
        display: 'flex',
        alignItems: 'center',
        border: '2px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        transition: 'transform 0.3s, box-shadow 0.3s, border-color 0.3s',
        '&:hover': {
            color:"white",
            border: "none",
          transform: 'scale(1.01)', // Slightly enlarge the box
          boxShadow: 2, // Increase shadow on hover
          backgroundColor: '#333333', // Change border color on hover
        },
      }}
    >
      <Avatar sx={{ marginRight: '16px' }}> 
        A 
      </Avatar>

      <Box sx={{ display: 'flex', flexDirection: 'column' }}> 
        <Typography variant="h6" sx={{ marginBottom: '2px' }}>
          Section Title
        </Typography>
        <Typography variant="caption">
          This is the section description.This is the section description.This is the section description.
        </Typography>
      </Box>
    </Box>
  );

  return (
    <Box p={2} my={2} borderRadius={2} bgcolor="white" maxWidth={"1000px"}>
      <Typography variant="h4" sx={{ marginBottom: '16px' }}>
        Add Section
      </Typography>

      {/* Grid layout with a maximum of 2 items per row */}
      <Grid2 container spacing={4}>
        <Grid2 xs={6}>{renderSectionBox()}</Grid2> {/* First box */}
        <Grid2 xs={6}>{renderSectionBox()}</Grid2> {/* Second box */}
        <Grid2 xs={6}>{renderSectionBox()}</Grid2> {/* Third box */}
        <Grid2 xs={6}>{renderSectionBox()}</Grid2> {/* Fourth box */}
      </Grid2>
    </Box>
  );
}
