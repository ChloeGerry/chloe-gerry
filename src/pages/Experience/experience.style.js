import { styled } from 'styled-components';

export const ExperienceWrapper = styled.section`
  text-align: center;
  margin-bottom: -32px;
  padding: 2rem 2rem 9rem 2rem;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.background};

  @media (max-width: 768px) {
    margin-bottom: 0;
  }

  @media (max-width: 400px) {
    padding: 2rem 2rem 3rem 2rem;
  }
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
