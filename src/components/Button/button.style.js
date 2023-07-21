import { styled } from 'styled-components';

export const ButtonStyled = styled.button`
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.background};
  border: ${({ theme }) => theme.border};
  padding: 8px;
  border: none;
  border-radius: 5px;
  width: 50px;
  cursor: pointer;
`;
