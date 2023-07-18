import { styled, keyframes } from 'styled-components';

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

const slideCard = keyframes`
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0%);
  }
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
  box-shadow: 5px 5px 15px 0px #a6bcdd;
  animation: ${slideCard} 500ms;
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
