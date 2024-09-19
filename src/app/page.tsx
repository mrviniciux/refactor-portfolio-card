'use client';
import Content from '@/components/Content';
import Profile from '@/components/Profile';
import ResumeButton from '@/components/ResumeButton';
import {
  createTheme,
  Grid,
  LinearProgress,
  ThemeProvider,
} from '@mui/material';
import { MainCard } from './page.styled';
import PersonalProjects from '@/components/PersonalProjects';
import { Card } from '@mui/material';
import { Suspense } from 'react';

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
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<LinearProgress />}>
        <MainCard className="flex column min-h-screen items-center">
          <Card>
            <Grid container padding={2} justifyContent={'center'}>
              <Grid item>
                <Profile />
              </Grid>
              <Grid item>
                <Content />
              </Grid>
            </Grid>
            <Grid padding={2} display={'flex'} justifyContent={'flex-end'}>
              <ResumeButton />
            </Grid>
          </Card>
          <Card style={{ marginTop: 20 }}>
            <PersonalProjects title="Personal projects" />
          </Card>
        </MainCard>
      </Suspense>
    </ThemeProvider>
  );
}
