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
    title: 'portfolio-card',
    href: 'https://github.com/mrviniciux/refactor-portfolio-card',
    image: '/projects/portfolio.png',
    description: '[NextJS/Typescript] My Personal website project',
  },
  {
    title: 'salvando-adictos',
    href: 'https://github.com/mrviniciux/salvando-adictos',
    image: '/projects/salvando-adictos.png',
    description:
      '[HTML/CSS/JS] Simple landingpage website for adiction healthcare',
  },
  {
    title: 'simple-calculator',
    href: 'https://github.com/mrviniciux/simple-calculator',
    image: '/projects/calculator.png',
    description: '[NextJS/Typescript] Simple Calculator UI',
  },
  {
    title: 'la-plage-restaurant',
    href: 'https://github.com/mrviniciux/la-plage-frontend',
    image: '/projects/la-plage.png',
    description:
      '[HTML/CSS/JS] Simple landingpage website for La Plage Restaurant',
  },
  {
    title: 'admin-dashboard-frontend',
    href: 'https://github.com/mrviniciux/admin-dashboard-frontend',
    image: '/projects/admin-dashboard-frontend.png',
    description:
      '[NextJS/Typescript] A dashboard sample application using Material UI and Toolpad',
  },
  {
    title: 'realtime-candle-graph-front',
    href: 'https://realtime-candle-graph-front.netlify.app/',
    image: '/projects/realtime-candle-graph.png',
    description: '[Typescript] Example of realtime graph using websocket',
  },
  {
    title: 'nike-geolocation-frontend',
    href: 'https://nike-geolocation.netlify.app/lojas',
    image: '/projects/nike-geolocation.png',
    description:
      '[NextJS/JS/SCSS] Geolocation example using nike website as inspiration',
  },
  {
    title: 'interactive-kabbalah',
    href: 'https://github.com/mrviniciux/interactive-kabbalah',
    image: '/projects/interactive-kabbalah.png',
    description:
      '[ReactJS/Typescript] [In progress] A website that provide info about tree of life',
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
