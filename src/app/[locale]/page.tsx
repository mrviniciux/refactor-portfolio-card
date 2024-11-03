'use client';
import Appbar from '@/components/Appbar';
import Loader from '@/components/Loader';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material';

import dynamic from 'next/dynamic';

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
      <Appbar>
        <HomeDynamic theme={theme} />
      </Appbar>
    </ThemeProvider>
  );
}
