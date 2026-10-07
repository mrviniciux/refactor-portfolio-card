import { Card } from '@mui/material';
import styled from 'styled-components';

export const ProjectCardStyled = styled(Card)`
  height: 100%;
  overflow: hidden;
  transition:
    transform 180ms ease,
    border-color 180ms ease,
    box-shadow 180ms ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(240, 138, 120, 0.42);
    box-shadow: 0 24px 48px rgba(0, 0, 0, 0.28);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover {
      transform: none;
    }
  }
`;
