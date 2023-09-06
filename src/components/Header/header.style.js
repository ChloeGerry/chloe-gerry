import { styled } from 'styled-components';

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  position: absolute;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 40px;
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.background};
  border-radius: 5px;
  position: fixed;
  top: 24px;
  right: 32px;
  z-index: 1;
  font-size: 1.2rem;
  border: ${({ theme }) => theme.border};

  @media (max-width: 768px) {
    top: 100px;
    width: 91%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @media (max-width: 400px) {
    flex-wrap: wrap;
    justify-content: center;
    padding: 8px;
    gap: 16px;
  }
`;

export const Anchor = styled.a`
  color: ${({ theme }) => theme.text};

  &:hover {
    text-decoration: underline;
  }
`;
