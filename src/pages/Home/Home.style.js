import { styled } from 'styled-components';

export const HomeSection = styled.section`
  filter: ${({ $blur }) => $blur};
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
