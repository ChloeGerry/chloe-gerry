import { createGlobalStyle } from 'styled-components';
import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext';

const StyledGlobalStyle = createGlobalStyle`
  #root {
    margin: 0;
  }

  body {
    font-family: 'Lato', sans-serif;
    margin: 0;
    background-color: ${({ theme }) => theme.background};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.text};
  }

  h2 {
    font-size: 3.4rem;

    @media (max-width: 768px) {
    font-size: 2.4rem;
  }
  }

  h3 {
    font-size: 2.1rem;

    @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  }

  p {
    font-size: 1.2rem;
  }
`;

const GlobalStyle = () => {
  const { isDarkTheme, light, dark } = useContext(ThemeContext);
  const theme = isDarkTheme ? dark : light;

  return <StyledGlobalStyle theme={theme} />;
};

export default GlobalStyle;
