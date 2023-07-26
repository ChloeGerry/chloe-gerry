import { FooterStyled } from './footer.style';
import { useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';

const Footer = () => {
  const { isDarkTheme, dark, light } = useContext(ThemeContext);
  const theme = isDarkTheme ? dark : light;

  return (
    <FooterStyled theme={theme}>
      <span>© Chloé Gerry</span>
    </FooterStyled>
  );
};

export default Footer;
