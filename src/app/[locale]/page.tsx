'use client';
import Loader from '@/components/Loader';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material';

import dynamic from 'next/dynamic';

const AppbarDynamic = dynamic(() => import(`../../components/Appbar`), {
  loading: () => <Loader type="linear" fullScreen showRefresh />,
  ssr: false,
});

const HomeDynamic = dynamic(() => import(`./home`), {
  loading: () => <Loader type="linear" fullScreen showRefresh />,
  ssr: false,
});

const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(12, 10, 19, 0.88)',
          backgroundImage: 'none',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(16px)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.18)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          fontWeight: 700,
          textTransform: 'none',
        },
      },
    },
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#f08a78',
    },
    secondary: {
      main: '#f08a78',
    },
    background: {
      default: '#0c0b10',
      paper: '#17151d',
    },
    text: {
      primary: '#f7f3f4',
      secondary: '#bbb4c0',
    },
  },
  shape: {
    borderRadius: 18,
  },
});

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <AppbarDynamic>
        <HomeDynamic theme={theme} />
      </AppbarDynamic>
    </ThemeProvider>
  );
}
