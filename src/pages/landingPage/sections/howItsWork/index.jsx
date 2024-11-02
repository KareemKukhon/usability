import React from 'react'
import AccordionUsage from '../../../../components/accordionUsage'
import './style.css';
import { Divider, Typography } from '@mui/material';

export default function HowItsWork() {
  return (
    <div style={{
         alignContent: "start", alignItems: "start",  width: "100%", textAlign: "left", padding: "20px"}}>
          <Divider sx={{color: "secondary"}}><Typography variant="h2" gutterBottom sx={{color: "text.primary"}}>How It Works</Typography></Divider>
        
        
        <Typography sx={{color: "text.secondary"}}>
        Testing your app has never been easier! Follow these simple steps to gain valuable insights from expert testers or real users:
        </Typography>
        <br />
        <br />
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        // flexWrap: "wrap",
        alignItems: 'start',
        gap: "50px"
        
      }}>
        <AccordionUsage></AccordionUsage>
        <div className='image' ></div>
      </div>
      
    </div>
  )
}
