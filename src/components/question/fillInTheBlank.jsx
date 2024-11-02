import { Box, TextField, Typography } from "@mui/material";

export function FillInTheBlank() {
    return (
      <Box textAlign="left">
        <Typography variant="h4" mb={2}>
          Fill in the Blank Question
        </Typography>
        <Typography>
          Please fill in the blank: "The capital of France is ________."
        </Typography>
        <TextField label="Your Answer" fullWidth sx={{ mt: 2 }} />
      </Box>
    );
  }