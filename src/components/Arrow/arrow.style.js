import { styled } from 'styled-components';

export const ArrowIcon = styled.i`
  color: ${({ theme }) => theme.text};
  font-size: 24px;
  position: absolute;
  z-index: 1;
  right: 2%;
  bottom: 2%;
  cursor: pointer;
`;
