import React, { Component } from 'react';
import { Box, Button, IconButton, TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import dashboardImage from '../../assets/dashboard.png';
import LoggedAppBar from '../../components/loggedAppBar';
import { useNavigate } from 'react-router-dom';

class Dashboard extends Component {
  handleCreateTest = () => {
    this.props.navigate('/create test');
  };

  render() {
    return (
      <Box>
        <LoggedAppBar />
        <Box 
          display="flex" 
          alignItems="center" 
          justifyContent="space-between" 
          sx={{ padding: '16px' }}
        >
          <TextField
            variant="outlined"
            placeholder="Search..."
            InputProps={{
              startAdornment: (
                <IconButton>
                  <SearchIcon />
                </IconButton>
              ),
            }}
            sx={{
              width: '300px',
              bgcolor: 'background.paper',
            }}
          />
          <Box>
            <Button
              variant="outlined"
              startIcon={<LibraryBooksOutlinedIcon />}
              sx={{ mr: 2 }}
            >
              Template Library
            </Button>
          
            <Button
              variant="contained"
              startIcon={<AddCircleOutlineIcon />}
              color="primary"
              onClick={this.handleCreateTest}
            >
              Create Test
            </Button>
          </Box>
        </Box>

        <Box display="flex" flexDirection="column" textAlign="center" alignItems="center">
          <Box flexGrow={1}>
            <img
              src={dashboardImage}
              alt="dashboard"
              width="80%"
              height="350"
            />
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Welcome to Your Dashboard
            </Typography>
            <Typography variant="body1">
              Get the answers to your pressing questions by creating your first study.
            </Typography>
          </Box>

          <Box display="flex" flexDirection="column" mt={5} gap={2}>
            <Button
              variant="outlined"
              color="secondary"
              startIcon={<AddCircleOutlineIcon />}
              onClick={this.handleCreateTest}
            >
              <Box>
                Start a New Test
                <Typography variant="caption" display="block">Get insights now</Typography>
              </Box>
            </Button>
            
            <Button
              variant="outlined"
              color="secondary"
              startIcon={<LibraryBooksOutlinedIcon />}
            >
              <Box>
                Start with a Template
                <Typography variant="caption" display="block">Choose a pre-built template</Typography> 
              </Box>
            </Button>
          </Box>
        </Box>
      </Box>
    );
  }
}

// Higher-Order Component to provide `navigate` prop
function withNavigate(Component) {
  return function WrappedComponent(props) {
    const navigate = useNavigate();
    return <Component {...props} navigate={navigate} />;
  };
}

export default withNavigate(Dashboard);
