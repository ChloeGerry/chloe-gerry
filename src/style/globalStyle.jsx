import { createGlobalStyle } from 'styled-components';

const StyledGlobalStyle = createGlobalStyle`
    :root {
      margin: 0 auto;
    }

    body {
      font-family: 'Inconsolata', monospace;
        margin: 0 auto;
    }

    a {
      text-decoration: none;
      color: black;
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
  return <StyledGlobalStyle />;
};

export default GlobalStyle;
