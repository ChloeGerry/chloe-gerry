import { styled } from 'styled-components';

export const ButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.background};
  border: ${({ theme }) => theme.border};
  border-radius: 5px;
  padding: 8px;
  width: 50px;
  cursor: pointer;
`;
