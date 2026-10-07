import { Card, Grid, Theme } from '@mui/material';
import { MainCard } from '../page.styled';
import Profile from '@/components/Profile';
import Content from '@/components/Content';
import ResumeButton from '@/components/ResumeButton';
import PersonalProjects from '@/components/PersonalProjects';
import Companies from '@/components/Companies';

function Home({ theme }: { theme: Theme }) {
  return (
    <MainCard theme={theme}>
      <Card
        component="section"
        aria-labelledby="profile-title"
        sx={{
          overflow: 'hidden',
          background:
            'linear-gradient(125deg, rgba(38, 30, 42, 0.98), rgba(20, 18, 26, 0.98))',
        }}
      >
        <Grid
          container
          spacing={{ xs: 3, md: 5 }}
          alignItems="center"
          p={{ xs: 3, md: 5 }}
        >
          <Grid item xs={12} sm={4} md={3}>
            <Profile />
          </Grid>
          <Grid item xs={12} sm={8} md={9}>
            <Content />
          </Grid>
          <Grid item xs={12} display="flex" justifyContent="flex-end">
            <ResumeButton />
          </Grid>
        </Grid>
      </Card>
      <Card
        component="section"
        aria-labelledby="projects-title"
        sx={{ overflow: 'hidden' }}
      >
        <PersonalProjects />
      </Card>
      <Card
        component="section"
        aria-labelledby="companies-title"
        sx={{ overflow: 'hidden' }}
      >
        <Companies />
      </Card>
    </MainCard>
  );
}

export default Home;
