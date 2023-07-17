import { styled } from 'styled-components';

export const ProjectsSection = styled.section`
  margin-bottom: 72px;
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
  border: 1px solid black;
  border-radius: 15px;
  width: 40%;
  align-items: center;
  justify-content: space-between;
`;

export const ListContainer = styled.ul`
  display: flex;
  padding: 0;
`;
