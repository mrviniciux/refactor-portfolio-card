'use client';
import Content from '@/components/Content';
import Profile from '@/components/Profile';
import ResumeButton from '@/components/ResumeButton';
import { createTheme, Grid, ThemeProvider } from '@mui/material';
import { MainCard } from './page.styled';
import PersonalProjects from '@/components/PersonalProjects';

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
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <MainCard>
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
        </MainCard>
        <MainCard style={{ marginTop: 30 }}>
          <PersonalProjects title="Personal projects" />
        </MainCard>
      </main>
    </ThemeProvider>
  );
}
