import { createGlobalStyle } from 'styled-components';
import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext';

const StyledGlobalStyle = createGlobalStyle`
  #root {
    margin: 0;
  }

  body {
    font-family: 'Inconsolata', monospace;
    margin: 0;
    background-color: ${({ theme }) => theme.background};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.text};
  }

  h2 {
    font-size: 2.4rem;
  }

  h3 {
    font-size: 2.1rem;
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
