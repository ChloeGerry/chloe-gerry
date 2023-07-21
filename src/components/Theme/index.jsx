import { useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';
import { ThemeToggleStyled, ThemeIcons } from './theme.style';
import Button from '../Button';

const ThemeToggle = () => {
  const { toggleLightTheme, toogleDarkTheme } = useContext(ThemeContext);

  return (
    <ThemeToggleStyled>
      <Button onClick={toggleLightTheme}>
        <ThemeIcons className="fa-solid fa-sun"></ThemeIcons>
      </Button>
      <Button onClick={toogleDarkTheme}>
        <ThemeIcons className="fa-solid fa-moon"></ThemeIcons>
      </Button>
    </ThemeToggleStyled>
  );
};

export default ThemeToggle;
