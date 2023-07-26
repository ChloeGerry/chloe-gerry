import { styled } from 'styled-components';

export const FooterStyled = styled.footer`
  border-top: ${({ theme }) => theme.border};
  padding: 56px;
  text-align: center;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.background};
`;
