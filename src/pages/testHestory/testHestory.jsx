import React from 'react'
import Statistic from '../../components/testHestoryComponent/statistic'
import { Box } from '@mui/material'
import TestDetails from '../../components/testHestoryComponent/testDetails'

export default function TestHestory() {
  return (
    <Box my={4} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
  <Statistic />
  <TestDetails />
</Box>

  )
}
