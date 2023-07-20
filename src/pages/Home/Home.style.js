import { styled } from 'styled-components';

export const HomeSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  transform-style: preserve-3d;
  z-index: -1;
`;

export const HomeImage = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: -1;
  transform: ${({ $transform }) => $transform};
`;

export const MainTitle = styled.h1`
  font-size: 3rem;
  color: white;
  text-shadow: 0 0 5px black;
`;

export const Subtitle = styled.h2`
  color: white;
  text-shadow: 0 0 5px black;
`;

export const ProfilePicture = styled.img`
  width: 113px;
  height: 150px;
  object-fit: contain;
  border-radius: 10px;
  position: absolute;
  left: 2%;
  bottom: 3%;
  cursor: pointer;
  border: 2px solid white;
`;

export const ModalWrapper = styled.dialog`
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  border-radius: 10px;
  padding-bottom: 48px;
`;

export const CloseIconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const CloseIcon = styled.i`
  cursor: pointer;
`;

export const ModalTitle = styled.h2`
  margin: 24px 8px 24px 8px;
`;
