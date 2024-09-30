'use client';
import { useEffect } from 'react';
import useLoader from './hooks/useLoader';
import { LoaderContainerStyled } from './Loader.styled';
import { LoaderProps } from './Loader.types';

import {
  Button,
  CircularProgress,
  Grid,
  LinearProgress,
  Typography,
} from '@mui/material';

function Loader({
  type = 'circular',
  msg = '',
  showRefresh = false,
  fullScreen = false,
}: LoaderProps) {
  const { isRefreshVisible } = useLoader(showRefresh);

  const DefaultLoader = () => (
    <Grid container direction={'column'} alignItems={'center'}>
      {type === 'linear' ? (
        <LinearProgress style={{ width: '100%' }} />
      ) : (
        <CircularProgress />
      )}
      <Typography paddingTop={2} variant="overline" display="block">
        {msg || 'Carregando...'}
      </Typography>
      {isRefreshVisible && (
        <Typography variant="caption" display="block" gutterBottom>
          Ainda carregando? Experimente <a href="/">recarregar a página.</a>
        </Typography>
      )}
    </Grid>
  );

  if (fullScreen)
    return (
      <LoaderContainerStyled>
        <DefaultLoader />
      </LoaderContainerStyled>
    );

  return <DefaultLoader />;
}

export default Loader;
