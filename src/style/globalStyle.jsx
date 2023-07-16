import { createGlobalStyle } from 'styled-components';

const StyledGlobalStyle = createGlobalStyle`
    :root {
      margin: 0 auto;
    }

    body {
      /* font-family: 'Playfair Display', serif; */
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
`;

const GlobalStyle = () => {
  return <StyledGlobalStyle />;
};

export default GlobalStyle;