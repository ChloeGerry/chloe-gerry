import { styled } from 'styled-components';

export const FooterStyled = styled.footer`
  border-top: ${({ theme }) => theme.border};
  padding: 56px;
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.background};
`;

export const LinksWrapper = styled.div`
  padding-bottom: 32px;
  display: flex;
  gap: 24px;
`;

export const GitHubLogo = styled.img`
  filter: ${({ $filter }) => $filter};
`;
