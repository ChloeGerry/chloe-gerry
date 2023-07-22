import { styled } from 'styled-components';

export const ProjectsSection = styled.section`
  margin-bottom: 72px;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.background};
`;

export const ProjectsMainTitle = styled.h2`
  text-align: center;
`;

export const CardsContainer = styled.div`
  display: flex;
  margin: 0 32px;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
`;

export const CardWrapper = styled.article`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border: 1px solid #a6bcdd;
  border-radius: 15px;
  width: 40%;
  align-items: center;
  justify-content: space-between;
  box-shadow: 3px 3px 10px 0px #a6bcdd;
`;

export const ListContainer = styled.ul`
  display: flex;
  padding: 0;
`;

export const IconesCredits = styled.p`
  text-align: center;
  font-size: 1rem;
  font-style: italic;
  margin-top: 32px;
`;
