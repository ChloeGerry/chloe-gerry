import { styled } from 'styled-components';

export const Presentation = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

export const MainTitle = styled.h1`
  font-size: 3rem;
`;

export const HomeWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HomeImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
