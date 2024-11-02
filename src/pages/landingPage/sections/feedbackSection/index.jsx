import React from 'react'
import FeedbackCard from '../../../../components/feedbackCard'
import { Stack } from '@mui/material'

export default function FeedbackSection() {
  return (
    <div>
        <h1>We love our customers</h1>
     <div style={{display: 'flex', flexWrap: "wrap",}}>
      <FeedbackCard></FeedbackCard>
      <FeedbackCard></FeedbackCard>
      <FeedbackCard></FeedbackCard>
      <FeedbackCard></FeedbackCard>
      <FeedbackCard></FeedbackCard>
     </div>
    </div>
    
  )
}
