import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Card, CardActionArea } from '@mui/material';
import { ProjectCardStyled } from './ProjectCard.styled';

interface ProjectCard {
  title: string;
  alt: string;
  description: string;
  hrefImage: string;
  href: string;
}

function ProjectCard({
  title,
  alt,
  href,
  description,
  hrefImage,
}: ProjectCard) {
  return (
    <ProjectCardStyled
      sx={{ minWidth: '250px', maxWidth: 250, marginRight: 2, marginBottom: 2 }}
    >
      <CardActionArea>
        <a href={href}>
          <CardMedia
            style={{ maxHeight: '10vh' }}
            component="img"
            image={hrefImage}
            alt={alt}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </a>
      </CardActionArea>
    </ProjectCardStyled>
  );
}

export default ProjectCard;
