import styled from 'styled-components';

export const MainCard = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 1120px;
  width: calc(100% - 48px);
  margin: 0 auto;
  padding-top: 32px;
  padding-bottom: 48px;

  ${({ theme }) => theme.breakpoints.down('md')} {
    width: calc(100% - 32px);
    gap: 16px;
    padding-top: 24px;
  }
`;
