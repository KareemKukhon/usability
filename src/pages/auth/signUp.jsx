import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Grid,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  Avatar,
} from '@mui/material';
// import { useNavigate } from 'react-router-dom';
import { PhotoCamera } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function SignUpPage() {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(URL.createObjectURL(file));
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    // Handle sign-up logic here
    console.log("Sign-up button clicked");
    navigate('/available'); 
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
            marginTop: 7,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'left',
            backgroundColor: "#F5F5F5",
            p: 2,
            boxShadow: 3,
            borderRadius: 2, 
        }}
      >
        

        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <Box fullWidth sx={{mt:2}}>
            {/* Avatar Upload Button */}
        <label htmlFor="avatar-upload">
          <Avatar
            src={selectedFile ? selectedFile : undefined}
            sx={{ width: 100, height: 100, cursor: 'pointer', mb: 2 }}
          >
            <PhotoCamera />
          </Avatar>
        </label>
        <input
          accept="image/*"
          id="avatar-upload"
          type="file"
          hidden
          onChange={handleFileChange}
        />
        </Box>
        <Box component="form" onSubmit={handleSignUp} sx={{ mt: 1.2, width: '100%' }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                name="firstName"
                autoComplete="given-name"
                autoFocus
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
              />
            </Grid>
          </Grid>
          <TextField
            variant="outlined"
            required
            fullWidth
            type="date"
            id="birthDate"
            label="Birth Date"
            name="birthDate"
            InputLabelProps={{
              shrink: true,
            }}
            sx={{ mt: 2 }}
          />
          <FormControl fullWidth required sx={{ mt: 2 }}>
            <InputLabel id="gender-label">Gender</InputLabel>
            <Select
              labelId="gender-label"
              id="gender"
              name="gender"
              defaultValue=""
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
            </Select>
          </FormControl>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            sx={{ mt: 2 }}
          />
          <TextField
            variant="outlined"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
            sx={{ mt: 2 }}
          />
          <TextField
            variant="outlined"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            autoComplete="new-password"
            sx={{ mt: 2 }}
          />
          <Button
          onClick={()=>navigate('/signin')}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
        </Box>
        <Typography variant="body2" sx={{ mt: 2 }}>
          Already have an account?{' '}
          <Button
            variant="text"
            onClick={() => navigate('/signin')}
          >
            Sign In
          </Button>
        </Typography>
      </Box>
    </Container>
  );
}

export default SignUpPage;
