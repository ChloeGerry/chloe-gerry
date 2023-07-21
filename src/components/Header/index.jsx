import { Navigation, Anchor } from './header.style';
import ThemeToggle from '../Theme';
import { useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';

const Header = () => {
  const { isDarkTheme, light, dark } = useContext(ThemeContext);
  const theme = isDarkTheme ? dark : light;
  return (
    <header>
      <ThemeToggle />
      <Navigation theme={theme}>
        <Anchor theme={theme} href="#home">
          Accueil
        </Anchor>
        <Anchor theme={theme} href="#experience">
          Mon expérience
        </Anchor>
        <Anchor theme={theme} href="#projects">
          Mes projets
        </Anchor>
        <Anchor theme={theme} href="#contact">
          Me contacter
        </Anchor>
      </Navigation>
    </header>
  );
};

export default Header;
