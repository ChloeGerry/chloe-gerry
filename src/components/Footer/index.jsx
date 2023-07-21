import { FooterStyled, LinksWrapper, GitHubLogo } from './footer.style';
import { useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';

const Footer = () => {
  const { isDarkTheme, dark, light } = useContext(ThemeContext);
  const theme = isDarkTheme ? dark : light;

  return (
    <FooterStyled id="contact" theme={theme}>
      <span>© Chloé Gerry</span>
      <LinksWrapper>
        <a href="https://linkedin.com/in/chloé-gerry-ab98a5264">
          <img src="/assets/linkedIn-logo.svg" />
        </a>
        <a href="https://github.com/ChloeGerry">
          {isDarkTheme ? (
            <GitHubLogo src="/assets/github-logo.svg" $filter="invert(1)" />
          ) : (
            <GitHubLogo src="/assets/github-logo.svg" />
          )}
        </a>
      </LinksWrapper>
    </FooterStyled>
  );
};

export default Footer;
