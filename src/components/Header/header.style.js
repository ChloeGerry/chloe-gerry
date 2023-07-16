import { createPath } from 'react-router-dom';
import { styled } from 'styled-components';

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: flex-end;
  font-size: 1.2rem;
`;

export const Navigation = styled.nav`
  position: fixed;
  top: 24px;
  right: 32px;
`;

export const Anchor = styled.a`
  padding-left: 24px;

  &:hover {
    text-decoration: underline;
  }
`;
