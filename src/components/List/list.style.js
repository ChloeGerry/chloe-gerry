import { styled } from 'styled-components';

export const ListWrapper = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  filter: ${({ $filter }) => $filter};
  width: 60px;
  height: 60px;
  padding-left: ${({ $padding }) => $padding};
`;

export const Text = styled.span`
  font-size: 1.2rem;
  padding-top: 8px;
`;
