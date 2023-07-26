import { useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';
import { ThemeToggleStyled, ThemeIcons } from './theme.style';
import Button from '../Button';

const ThemeToggle = () => {
  const { toggleTheme, isDarkTheme } = useContext(ThemeContext);

  return (
    <ThemeToggleStyled>
      <Button onClick={toggleTheme}>
        {isDarkTheme ? (
          <ThemeIcons className="fa-solid fa-sun"></ThemeIcons>
        ) : (
          <ThemeIcons className="fa-solid fa-moon"></ThemeIcons>
        )}
      </Button>
    </ThemeToggleStyled>
  );
};

export default ThemeToggle;
