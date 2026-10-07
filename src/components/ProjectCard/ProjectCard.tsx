import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Chip, Stack } from '@mui/material';
import ArrowOutward from '@mui/icons-material/ArrowOutward';
import { ProjectCardStyled } from './ProjectCard.styled';

interface ProjectCardProps {
  title: string;
  alt: string;
  description: string;
  hrefImage: string;
  href: string;
  technologies: string[];
  imageFit?: 'cover' | 'contain';
}

function ProjectCard({
  title,
  alt,
  href,
  description,
  hrefImage,
  technologies,
  imageFit = 'cover',
}: ProjectCardProps) {
  return (
    <ProjectCardStyled>
      <CardActionArea
        component="a"
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label={`${title}: ${description}`}
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          '&:focus-visible': {
            outline: '3px solid',
            outlineColor: 'secondary.main',
            outlineOffset: '-3px',
          },
        }}
      >
        <CardMedia
          component="img"
          image={hrefImage}
          alt={alt}
          sx={{
            height: { xs: 210, md: 220 },
            objectFit: imageFit,
            objectPosition: 'center',
            backgroundColor: '#111016',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        />
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            width: '100%',
            boxSizing: 'border-box',
            p: { xs: 2.5, md: 3 },
          }}
        >
          <Stack
            direction="row"
            alignItems="flex-start"
            justifyContent="space-between"
            gap={2}
          >
            <Typography
              component="h3"
              variant="h6"
              sx={{ fontWeight: 700, lineHeight: 1.3 }}
            >
              {title}
            </Typography>
            <ArrowOutward
              aria-hidden="true"
              fontSize="small"
              sx={{ flexShrink: 0, color: 'secondary.main', mt: 0.5 }}
            />
          </Stack>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mt: 1, lineHeight: 1.7, flexGrow: 1 }}
          >
            {description}
          </Typography>
          <Box display="flex" flexWrap="wrap" gap={0.75} mt={2}>
            {technologies.map((technology) => (
              <Chip
                key={technology}
                label={technology}
                size="small"
                sx={{
                  color: 'text.primary',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                }}
              />
            ))}
          </Box>
        </CardContent>
      </CardActionArea>
    </ProjectCardStyled>
  );
}

export default ProjectCard;
