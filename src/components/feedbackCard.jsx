import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';



export default function FeedbackCard() {
  return (
    <Card sx={{ maxWidth: 345, m:1.5 }}>
      <CardHeader
      style={{textAlign: 'left'}}
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title="Mohammed Ali"
        subheader="September 14, 2024"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Our CEO, Satya Nadella, tells us often that the source of innovation comes from having a deep sense of empathy. 
        And it's true, empathy makes us better innovators. Today, Microsoft is stronger than ever. 
        Usability helps our entire company get feedback from our customers at every single point in the journey.
        </Typography>
      </CardContent>
      {/*<CardActions disableSpacing>
         <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> 
      </CardActions>*/}
    </Card>
  );
}
