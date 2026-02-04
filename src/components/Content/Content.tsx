'use client';

import { Typography } from '@mui/material';
import { ContentStyled } from './Content.styled';
import { useTranslations } from 'next-intl';

function Content() {
  const translate = useTranslations('about');
  return (
    <ContentStyled
      container
      paddingLeft={3}
      paddingRight={3}
      direction={'column'}
    >
      <Typography paddingBottom={0} marginBottom={0} variant="h4" gutterBottom>
        Marcos Vinícius dos Santos
      </Typography>
      <Typography variant="h5" paddingBottom={2}>
        Software Engineer
      </Typography>

      <Typography padding={0} margin={0} variant="h6" gutterBottom>
        {translate('labels.stack')}
      </Typography>
      <Typography paddingBottom={1} variant="body1">
        NextJS, React, Typescript, Github CI/CD, NodeJS, RESTful APIs
      </Typography>

      <Typography padding={0} margin={0} variant="h6" gutterBottom>
        {translate('labels.location')}
      </Typography>
      <Typography paddingBottom={1} variant="body1">
        Imbituba - SC - {translate('texts.brazil')}
      </Typography>

      <Typography padding={0} margin={0} variant="h6" gutterBottom>
        {translate('labels.praticalexp')}
      </Typography>
      <Typography maxWidth={'32vw'} variant="body1" paddingBottom={1}>
        {translate('texts.expwith')}
      </Typography>
    </ContentStyled>
  );
}

export default Content;
