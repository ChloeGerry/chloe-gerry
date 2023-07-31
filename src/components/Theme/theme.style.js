import { styled } from 'styled-components';

export const ThemeToggleStyled = styled.div`
  position: fixed;
  top: 24px;
  left: 32px;
  @media (max-width: 768px) {
    top: 32px;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
