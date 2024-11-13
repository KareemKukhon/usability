import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

export default function Statistic() {
  return (
    <Box
      sx={{
        boxShadow: 2,
        padding: 2,
        py: 5,
        borderRadius: 1,
        width: { xs: '90%', sm: '75%', md: '50%' },
        textAlign: 'center',
        mx: 'auto',
      }}
    >
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="space-evenly" textAlign="center">
        <Box>
          <Typography color="text.secondary" pb={1} fontSize={{ xs: '0.9rem', sm: '1rem' }}>
            Reward total (USD)
          </Typography>
          <Typography variant="h4">$87</Typography>
        </Box>
        <Box>
          <Typography color="text.secondary" pb={1} fontSize={{ xs: '0.9rem', sm: '1rem' }}>
            Pending
          </Typography>
          <Typography variant="h4">$0</Typography>
        </Box>
        <Box>
          <Typography color="text.secondary" pb={1} fontSize={{ xs: '0.9rem', sm: '1rem' }}>
            Total tests
          </Typography>
          <Typography variant="h4">87</Typography>
        </Box>
      </Stack>
    </Box>
  );
}
