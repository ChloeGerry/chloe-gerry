import { styled } from 'styled-components';

export const Navigation = styled.nav`
  display: flex;
  gap: 24px;
  padding: 8px;
  background-color: ${({ theme }) => theme.background};
  border-radius: 5px;
  position: fixed;
  top: 24px;
  right: 32px;
  z-index: 1;
  font-size: 1.2rem;
`;

export const Anchor = styled.a`
  color: ${({ theme }) => theme.text};

  &:hover {
    text-decoration: underline;
  }
`;
