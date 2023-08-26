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
  color: ${({ theme }) => theme.title};
  @media (max-width: 768px) {
    margin: 0;
  }
`;

export const Subtitle = styled.h2`
  color: ${({ theme }) => theme.title};

  @media (max-width: 688px) {
    margin: 0;
  }

  @media (max-width: 400px) {
    text-align: center;
  }
`;

export const ProfilePicture = styled.img`
  width: 112px;
  height: 149px;
  object-fit: contain;
  border-radius: 10px;
  position: absolute;
  left: 2%;
  bottom: 4%;
  cursor: pointer;
  border: ${({ theme }) => theme.borderImage};

  @media (max-width: 688px) {
    width: 90px;
    height: 120px;
  }
`;

export const ModalWrapper = styled.dialog`
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  border-radius: 10px;
  padding-bottom: 48px;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.background};
  @media (max-width: 320px) {
    bottom: -250px;
  }
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
