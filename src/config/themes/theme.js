import { createTheme } from '@mui/material/styles';

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      main: '#333333',
    },
    secondary: {
      main: '#FF6D00',
    },
    ...(mode === 'light'
      ? {
          // Light mode colors
          background: {
            default: '#F5F5F5',
            paper: '#F5F5F5',
          },
          text: {
            primary: '#111111',
            secondary: '#7D7D7D',
          },
          divider: '#E0E0E0',
        }
      : {
          // Dark mode colors
          background: {
            default: '#121212',
            paper: '#1E1E1E',
          },
          text: {
            primary: '#FFFFFF',
            secondary: '#B0B0B0',
          },
          divider: '#333333',
        }),
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: { fontSize: '48px', fontWeight: 700 },
    h2: { fontSize: '32px', fontWeight: 700 },
    h3: { fontSize: '24px', fontWeight: 700 },
    h4: { fontSize: '20px', fontWeight: 700 },
    body1: { fontSize: '16px', fontWeight: 400 },
    body2: { fontSize: '14px', fontWeight: 400 },
  },
  
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
        },
        containedPrimary: {
          backgroundColor: '#FF6D00',
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: '#e65a00',
          },
        },
        outlinedSecondary: {
          color: '#FF6D00',
          borderColor: '#FF6D00',
          '&:hover': {
            backgroundColor: '#FF6D00',
            color: '#FFFFFF',
          },
        },
      },
    },
  },
});

export const theme = (mode) => createTheme(getDesignTokens(mode));
