import { styled } from 'styled-components';

export const CardPreviewImage = styled.img`
  width: 90%;
  object-fit: contain;
  height: ${({ $height }) => $height};
  @media (max-width: 1300px) {
    height: 20%;
  }
  @media (max-width: 768px) {
    height: auto;
  }
`;

export const CardPreviewTitle = styled.h3`
  font-size: 1.3rem;
  text-align: center;
`;

export const CardPreviewText = styled.p`
  text-align: justify;
  @media (max-width: 768px) {
    height: auto;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding-top: 16px;
`;

export const Icon = styled.i`
  font-size: 45px;
  filter: ${({ theme }) => theme.filter};
`;
