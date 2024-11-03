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
          backgroundColor: '#0c0a13',
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          backgroundColor: 'white',
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#0052cc',
    },
    secondary: {
      main: '#424242',
    },
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
