import styled from 'styled-components';

export const ContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  min-width: 0;

  @media (max-width: 600px) {
    text-align: center;

    .MuiStack-root {
      align-items: center;
    }
  }
`;
