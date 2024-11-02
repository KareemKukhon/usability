import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

export default function Statistic() {
  return (
    <Box sx={{ boxShadow: 2, padding: 2, py: 5, borderRadius: 1, width: '75%', textAlign: 'center',  }}>
        <Stack direction='row' spacing={2} justifyContent={"space-evenly"} textAlign={"center"}>
            <Box>
                <Typography color='text.secondary' pb={2}>
                    Reward total (USD)
                </Typography>
                <Typography variant='h2' >
                    $87
                </Typography>
            </Box>
            <Box>
            <Typography color='text.secondary' pb={2} >
            Pending
        </Typography>
        <Typography variant='h2'>
            $0
        </Typography>
            </Box>
            <Box>
            <Typography color='text.secondary' pb={2}>
           Total tests
        </Typography>
        <Typography variant='h2'>
            $87
        </Typography>
            </Box>
        </Stack>
        
    </Box>
  )
}
