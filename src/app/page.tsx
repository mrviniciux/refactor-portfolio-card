'use client';
import Loader from '@/components/Loader';
import { createTheme } from '@mui/material';

import dynamic from 'next/dynamic';

const HomeDynamic = dynamic(() => import('@/app/home'), {
  loading: () => <Loader type="linear" fullScreen showRefresh />,
  ssr: false,
});

const theme = createTheme({
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
  return <HomeDynamic theme={theme} />;
}
