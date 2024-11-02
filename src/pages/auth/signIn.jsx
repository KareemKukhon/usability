import React from 'react';
import { Box, TextField, Button, Typography, Container, Divider, Stack, Link } from '@mui/material';
import { Facebook, Google, Twitter } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

function SignInPage() {
  const navigate = useNavigate();
  const handleSignIn = (e) => {
    e.preventDefault();
    // Handle sign-in logic here
    console.log("Sign-in button clicked");
    navigate('/available');
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSignIn} sx={{ mt: 3, width: '100%' }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
          onClick={()=>navigate('/available')}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Box sx={{  textAlign: 'center' }}>
            <Typography variant="body2">
              Don’t have an account?{' '}
              <Link
                component="button"
                variant="body2"
                onClick={() => navigate('/signup')}
              >
                Sign up
              </Link>
            </Typography>
          </Box>
          <Divider sx={{ my: 2 }}>OR</Divider>
          <Stack direction="column" spacing={2} justifyContent="center">
            <Button
              variant="outlined"
              startIcon={<Google />}
              onClick={() => console.log("Sign in with Google")}
            >
              Google
            </Button>
            <Button
              variant="outlined"
              startIcon={<Facebook />}
              onClick={() => console.log("Sign in with Facebook")}
            >
              Facebook
            </Button>

          </Stack>
          
        </Box>
      </Box>
    </Container>
  );
}

export default SignInPage;
