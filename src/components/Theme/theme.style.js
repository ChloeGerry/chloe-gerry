import { styled } from 'styled-components';

export const ThemeToggleStyled = styled.div`
  display: flex;
  position: absolute;
  z-index: 1;
  top: 24px;
  left: 32px;
  gap: 8px;
  @media (max-width: 768px) {
    top: 32px;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const ThemeIcons = styled.i`
  font-size: 24px;
`;
