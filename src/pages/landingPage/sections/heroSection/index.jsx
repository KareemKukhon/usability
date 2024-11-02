import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import DrawerAppBar from '../../../../components/appBar';
import './style.css';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useNavigate } from 'react-router-dom';

export default function HeroSection() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="background-container">
        <DrawerAppBar></DrawerAppBar>
      <Box className="background-image"></Box>
      <div className="overlay"></div>
      <div className="content">
        <h1>Unlock Insights with Real User Feedback</h1>
        <Typography>
        Gain a competitive edge by understanding your users better. Our platform connects you with real users who provide honest feedback on your website, app, or product. Make informed decisions with data-driven insights to enhance user experience, boost engagement, and drive conversions.
        </Typography>
        <div>
        {/* <Button variant="text" endIcon= {<ArrowRightAltIcon></ArrowRightAltIcon>}>Learn more</Button> */}
        {/* <Button 
          variant="contained" 
          sx={{ 
          fontSize: 16,
          top: '20px', 
          fontWeight: 600, 
          borderRadius: 3,
          textAlign: 'center',
          backgroundColor: "black",
          color: "white",
          ":hover":{
            backgroundColor: "gray",
            color: "black",
            transition: "background-color 0.5s linearGrad",
          }
        }}>
          Learn More
        </Button> */}
        
        <Button 
        variant="contained" 
        onClick={()=>navigate('/signin')}
        sx={{ 
          fontSize: 16,
          top: '20px', 
          fontWeight: 600, 
          borderRadius: 3,
          textAlign: 'center',
          backgroundColor: "background",
          color: 'text',
          ":hover":{
            backgroundColor: "background",
            color: "white",
            transition: "background-color 0.5s linearGrad",
          }
        }}
      >
        Get Started Today
      </Button>
      </div>
      </div>
    </div>
    </div>
  )
}
