import HomePage from './pages/landingPage';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import {theme} from './config/themes/theme';
import { useState } from 'react';
import SignInPage from './pages/auth/signIn';
import SignUpPage from './pages/auth/signUp';
import TestHestory from './pages/testHestory/testHestory';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AvailableTest from './pages/availablePage';

function App() {

  const [mode, setMode] = useState('light'); // Default to light mode
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/signin",
      element: <SignInPage />,
    },
    {
      path: "/signup",
      element: <SignUpPage />,
    },
    {
      path: "/available",
      element: <AvailableTest />,
    },
    {
      path: "/history",
      element: <TestHestory />,
    },
  ]);



  return (
    
    <ThemeProvider theme={theme(mode)}>
      <CssBaseline />
    <div className="App">
      <RouterProvider router={router} />
    </div>
  </ThemeProvider>
  );
}

export default App;
