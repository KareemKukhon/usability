import React from 'react';
import Statistic from '../../components/testHestoryComponent/statistic';
import { Box } from '@mui/material';
import TestDetails from '../../components/testHestoryComponent/testDetails';
import LoggedAppBar from '../../components/loggedAppBar';

export default function TestHestory() {
  return (
    <Box>
      <LoggedAppBar />
      <Box my={4} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
        <Statistic />
        <Box width="100%" maxWidth={700}>
          <TestDetails />
          <TestDetails />
        </Box>
      </Box>
    </Box>
  );
}
