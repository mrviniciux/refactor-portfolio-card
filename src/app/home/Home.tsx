import { Card, Theme } from '@mui/material';
import { Grid, ThemeProvider } from '@mui/material';
import { MainCard } from '../page.styled';
import Profile from '@/components/Profile';
import Content from '@/components/Content';
import ResumeButton from '@/components/ResumeButton';
import PersonalProjects from '@/components/PersonalProjects';
import Companies from '@/components/Companies';

function Home({ theme }: { theme: Theme }) {
  return (
    <ThemeProvider theme={theme}>
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
        <Card style={{ marginTop: 20 }}>
          <Companies />
        </Card>
      </MainCard>
    </ThemeProvider>
  );
}

export default Home;
