import { styled } from 'styled-components';

export const CardPreviewImage = styled.img`
  width: 90%;
  object-fit: contain;
  height: ${({ $height }) => $height};
`;

export const CardPreviewTitle = styled.h3`
  font-size: 1.3rem;
`;

export const CardPreviewText = styled.p`
  text-align: center;
  height: 25%;
`;

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.i`
  font-size: 45px;
  padding-right: 16px;
`;

export const GitHubLogo = styled.img`
  filter: ${({ $filter }) => $filter};
`;
