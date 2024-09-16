'use client';

import { Typography } from '@mui/material';
import { ContentStyled } from './Content.styled';

function Content() {
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
        Web developer
      </Typography>

      <Typography padding={0} margin={0} variant="h6" gutterBottom>
        Stack
      </Typography>
      <Typography paddingBottom={1} variant="body1">
        NextJS, es7/es8, React, Github CI/CD
      </Typography>

      <Typography padding={0} margin={0} variant="h6" gutterBottom>
        Location
      </Typography>
      <Typography paddingBottom={1} variant="body1">
        Garopaba - SC - Brazil
      </Typography>

      <Typography padding={0} margin={0} variant="h6" gutterBottom>
        Pratical experience with:
      </Typography>
      <Typography variant="body1" paddingBottom={1}>
        B2B/B2C Solutions, Real time applications, websites, intranet
      </Typography>
    </ContentStyled>
  );
}

export default Content;
