import { Container, Grid, Stack, Typography } from '@mui/material';
import ProjectCard from '../ProjectCard';
import { useTranslations } from 'next-intl';

type ProjectType = {
  title: string;
  href: string;
  image: string;
  description: string;
  technologies: string[];
  imageFit?: 'cover' | 'contain';
};
const projects: ProjectType[] = [
  {
    title: 'interactiveTreeTitle',
    href: 'https://interactive-kabbalah.netlify.app/',
    image: '/projects/interactive-kabbalah.png',
    description: 'interactiveTree',
    technologies: ['Next.js', 'TypeScript', 'React'],
    imageFit: 'contain',
  },
  {
    title: 'laPlageRestaurantTitle',
    href: 'https://laplagerestaurante.com.br/',
    image: '/projects/la-plage.png',
    description: 'laPlageRestaurant',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'adminDashboardTitle',
    href: 'https://github.com/mrviniciux/admin-dashboard-frontend',
    image: '/projects/admin-dashboard-frontend.png',
    description: 'adminDashboard',
    technologies: ['Next.js', 'TypeScript', 'Material UI'],
    imageFit: 'contain',
  },
  {
    title: 'realtimeGraphTitle',
    href: 'https://realtime-candle-graph-front.netlify.app/',
    image: '/projects/realtime-candle-graph.png',
    description: 'realtimeGraph',
    technologies: ['TypeScript', 'WebSocket', 'Charts'],
    imageFit: 'contain',
  },
  {
    title: 'nikeGeolocationTitle',
    href: 'https://nike-geolocation.netlify.app/lojas',
    image: '/projects/nike-geolocation.png',
    description: 'nikeGeolocation',
    technologies: ['Next.js', 'JavaScript', 'SCSS', 'Maps'],
    imageFit: 'contain',
  },
];

function PersonalProjects() {
  const translate = useTranslations('projects');
  return (
    <Container maxWidth={false} sx={{ p: { xs: 2.5, md: 4 } }}>
      <Stack spacing={0.75} mb={3}>
        <Typography
          id="projects-title"
          component="h2"
          variant="h4"
          sx={{ fontWeight: 750, letterSpacing: '-0.035em' }}
        >
          {translate('personalprojects')}
        </Typography>
        <Typography color="text.secondary" variant="body1">
          {translate('subtitle')}
        </Typography>
      </Stack>
      <Grid container spacing={2.5} justifyContent="center" alignItems="stretch">
        {projects.map((project) => {
          const title = translate(project.title);
          const description = translate(project.description);

          return (
            <Grid
              item
              xs={12}
              sm={6}
              lg={4}
              key={project.title}
            >
              <ProjectCard
                title={title}
                alt={title}
                description={description}
                hrefImage={project.image}
                href={project.href}
                technologies={project.technologies}
                imageFit={project.imageFit}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default PersonalProjects;
