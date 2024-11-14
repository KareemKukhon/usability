import { Box, TextField, Typography } from '@mui/material'
import React from 'react'

export default function InstructionCard({innerRef, draggableProps, dragHandleProps, }) {
  return (
    <Box
        ref={innerRef}
        {...draggableProps}
        {...dragHandleProps}
        width={"90%"}
        sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
          
        }}
    >
        <Box width={"90%"}>
        <Typography  variant="h4" fontWeight={"bold"}>Instruction</Typography>
        <Typography my={2}variant="inherit">Message</Typography>
        <TextField
            label="Enter Message"
            sx={{ mb: 1, width: "100%" }}
        />
        </Box>
        
    </Box>
  )
}
