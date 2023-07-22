import { styled } from 'styled-components';

export const ExperienceWrapper = styled.section`
  text-align: center;
  margin-bottom: 72px;
  padding: 2rem;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.background};
`;

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ListWrapper = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  gap: 48px;
  flex-wrap: wrap;
  justify-content: center;
`;
