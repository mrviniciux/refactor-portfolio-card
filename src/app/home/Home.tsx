import { Card, Theme } from '@mui/material';
import { Suspense } from 'react';
import {
  CircularProgress,
  createTheme,
  Grid,
  LinearProgress,
  ThemeProvider,
} from '@mui/material';
import dynamic from 'next/dynamic';
import { MainCard } from '../page.styled';
import Loader from '@/components/Loader';

const ProfileDynamic = dynamic(() => import('@/components/Profile'), {
  ssr: false,
});

const PersonalProjectsDynamic = dynamic(
  () => import('@/components/PersonalProjects'),
  {
    ssr: false,
    loading: () => <Loader />,
  }
);

const ContentDynamic = dynamic(() => import('@/components/Content'), {
  ssr: false,
});

const ResumeButtonDynamic = dynamic(() => import('@/components/ResumeButton'), {
  ssr: false,
});

function Home({ theme }: { theme: Theme }) {
  return (
    <Suspense fallback={<Loader type="linear" />}>
      <ThemeProvider theme={theme}>
        <MainCard className="flex column min-h-screen items-center">
          <Card>
            <Grid container padding={2} justifyContent={'center'}>
              <Grid item>
                <ProfileDynamic />
              </Grid>
              <Grid item>
                <ContentDynamic />
              </Grid>
            </Grid>
            <Grid padding={2} display={'flex'} justifyContent={'flex-end'}>
              <ResumeButtonDynamic />
            </Grid>
          </Card>
          <Card style={{ marginTop: 20 }}>
            <PersonalProjectsDynamic title="Personal projects" />
          </Card>
        </MainCard>
      </ThemeProvider>
    </Suspense>
  );
}

export default Home;
