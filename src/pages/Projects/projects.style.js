import { styled, keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';

const fadeIn = keyframes`
  0% {
    opacity: 0.1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

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
  @media (max-width: 400px) {
    margin: 0 40px;
  }
`;

export const CardWrapper = styled.article`
  background-color: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  padding: 24px;
  border: 1px solid #000;
  border-radius: 15px;
  width: 40%;
  height: 648px;
  align-items: center;
  justify-content: space-between;
  animation: ${fadeIn} 0.3s ease;

  @media (max-width: 1300px) {
    height: 1000px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 800px;
  }
  @media (max-width: 400px) {
    padding: 16px;
    height: 900px;
  }
`;

export const ListContainer = styled.ul`
  display: flex;
  padding: 0;
  margin: 0 0 16px 0;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const IconesCredits = styled.p`
  text-align: center;
  font-size: 1rem;
  font-style: italic;
  margin: 32px 8px 0px 8px;
`;

export const PaginationWrapper = styled.nav`
  display: flex;
  justify-content: center;
  margin-top: 16px;
  gap: 24px;
  font-size: 24px;
  align-items: center;
`;

export const Pagination = styled(NavLink)`
  cursor: pointer;
  &.isSelected {
    font-weight: bold;
  }
`;
