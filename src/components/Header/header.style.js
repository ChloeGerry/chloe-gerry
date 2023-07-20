import { styled } from 'styled-components';

export const Navigation = styled.nav`
  display: flex;
  gap: 24px;
  padding: 8px;
  background-color: black;
  border-radius: 5px;
  position: fixed;
  top: 24px;
  right: 32px;
  z-index: 1;
  font-size: 1.2rem;
`;

export const Anchor = styled.a`
  color: white;

  &:hover {
    text-decoration: underline;
  }
`;
