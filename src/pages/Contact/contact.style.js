import { styled } from 'styled-components';

export const ContactWrapper = styled.section`
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 72px;
`;

export const LinksWrapper = styled.div`
  padding-bottom: 32px;
  display: flex;
  gap: 24px;
  align-items: center;
`;

export const GitHubLogo = styled.img`
  filter: ${({ theme }) => theme.filter};
`;
