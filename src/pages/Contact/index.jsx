import { useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';
import { ContactWrapper, LinksWrapper, GitHubLogo } from './contact.style';

const Contact = () => {
  const { isDarkTheme, dark, light } = useContext(ThemeContext);
  const theme = isDarkTheme ? dark : light;

  return (
    <ContactWrapper id="contact" theme={theme}>
      <h2>Me contacter</h2>
      <LinksWrapper>
        <a href="https://linkedin.com/in/chloé-gerry-ab98a5264" target="_blank">
          <img
            src="assets/linkedIn-logo.svg"
            alt="Lien du LinkedIn de Chloé Gerry"
          />
        </a>
        <a href="https://github.com/ChloeGerry" target="_blank">
          <GitHubLogo
            src="assets/github-logo.svg"
            alt="Lien du GitHub de Chloé Gerry"
            theme={theme}
          />
        </a>
      </LinksWrapper>
    </ContactWrapper>
  );
};

export default Contact;
