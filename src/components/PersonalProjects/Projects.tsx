import { Container, Grid, Typography } from '@mui/material';
import ProjectCard from '../ProjectCard';
import { useTranslations } from 'next-intl';

type ProjectType = {
  title: string;
  href: string;
  image: string;
  description: string;
};
const projects: ProjectType[] = [
  {
    title: 'interactive-kabbalah',
    href: 'https://interactive-kabbalah.netlify.app/',
    image: '/projects/interactive-kabbalah.png',
    description: 'interactiveTree',
  },
  {
    title: 'la-plage-restaurant',
    href: 'https://laplagerestaurante.com.br/',
    image: '/projects/la-plage.png',
    description: 'laPlageRestaurant',
  },
  {
    title: 'admin-dashboard-frontend',
    href: 'https://github.com/mrviniciux/admin-dashboard-frontend',
    image: '/projects/admin-dashboard-frontend.png',
    description: 'adminDashboard',
  },
  {
    title: 'realtime-candle-graph-front',
    href: 'https://realtime-candle-graph-front.netlify.app/',
    image: '/projects/realtime-candle-graph.png',
    description: 'realtimeGraph',
  },
  {
    title: 'nike-geolocation-frontend',
    href: 'https://nike-geolocation.netlify.app/lojas',
    image: '/projects/nike-geolocation.png',
    description: 'nikeGeolocation',
  },
];

function PersonalProjects({ title }: { title: string }) {
  const translate = useTranslations('projects');
  return (
    <Container>
      <Typography variant="h5" paddingTop={2} paddingBottom={2}>
        {title}
      </Typography>
      <Grid container justifyContent={'center'}>
        {projects.map((project, index) => (
          <ProjectCard
            title={project.title}
            alt={`${project.title} thumbnail image`}
            description={translate(project.description)}
            hrefImage={project.image}
            href={project.href}
            key={`${project.title}-${index}`}
          />
        ))}
      </Grid>
    </Container>
  );
}

export default PersonalProjects;
