import logo from './logo.svg';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import HomePage from './pages/landingPage';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import {theme} from './config/themes/theme';
import { useState } from 'react';
import SignInPage from './pages/auth/signIn';
import SignUpPage from './pages/auth/signUp';

function App() {

  const [mode, setMode] = useState('light'); // Default to light mode

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };


  return (
    
    <ThemeProvider theme={theme(mode)}>
      <CssBaseline />
    <div className="App">
      <HomePage></HomePage>
      {/* <SignUpPage></SignUpPage> */}
    </div>
  </ThemeProvider>
  );
}

export default App;
