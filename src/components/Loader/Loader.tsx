'use client';
import {
  Button,
  CircularProgress,
  Grid,
  LinearProgress,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';

interface LoaderProps {
  type?: 'linear' | 'circular';
  msg?: string;
  showRefresh?: boolean;
}

function Loader({
  type = 'circular',
  msg = '',
  showRefresh = false,
}: LoaderProps) {
  const [isRefreshVisible, setIsRefreshVisible] = useState(false);

  useEffect(() => {
    if (!showRefresh) return;

    const timer = setTimeout(() => {
      setIsRefreshVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, [showRefresh]);

  return (
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
}

export default Loader;
