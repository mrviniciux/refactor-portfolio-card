'use client';

import { Chip, Stack, Typography } from '@mui/material';
import { ContentStyled } from './Content.styled';
import { useTranslations } from 'next-intl';

function Content() {
  const translate = useTranslations('about');
  return (
    <ContentStyled>
      <Stack spacing={0.75}>
        <Typography
          variant="overline"
          sx={{
            color: 'secondary.main',
            fontWeight: 800,
            letterSpacing: '0.16em',
          }}
        >
          {translate('labels.role')}
        </Typography>
        <Typography
          id="profile-title"
          component="h1"
          variant="h3"
          sx={{
            fontSize: { xs: '2rem', md: '2.8rem' },
            fontWeight: 750,
            letterSpacing: '-0.04em',
            lineHeight: 1.12,
          }}
        >
          Marcos Vinícius dos Santos
        </Typography>
        <Typography color="text.secondary" variant="body1">
          {translate('labels.location')}: Imbituba - SC,{' '}
          {translate('texts.brazil')}
        </Typography>
      </Stack>

      <Stack spacing={1}>
        <Typography variant="subtitle2" color="text.secondary">
          {translate('labels.stack')}
        </Typography>
        <Stack direction="row" flexWrap="wrap" gap={1}>
          {[
            'Next.js',
            'React',
            'TypeScript',
            'Node.js',
            'REST APIs',
            'CI/CD',
          ].map((technology) => (
            <Chip
              key={technology}
              label={technology}
              size="small"
              variant="outlined"
              sx={{
                borderColor: 'rgba(255, 255, 255, 0.16)',
                color: 'text.primary',
                fontWeight: 600,
              }}
            />
          ))}
        </Stack>
      </Stack>

      <Stack spacing={0.5}>
        <Typography variant="subtitle2" color="text.secondary">
          {translate('labels.praticalexp')}
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: 640, lineHeight: 1.7 }}>
          {translate('texts.expwith')}
        </Typography>
      </Stack>
    </ContentStyled>
  );
}

export default Content;
