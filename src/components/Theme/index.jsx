import { useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';
import { ThemeToggleStyled } from './theme.style';
import Button from '../Button';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const ThemeToggle = () => {
  const { toggleTheme, isDarkTheme } = useContext(ThemeContext);

  return (
    <ThemeToggleStyled>
      <Button onClick={toggleTheme}>
        {isDarkTheme ? <LightModeIcon /> : <DarkModeIcon />}
      </Button>
    </ThemeToggleStyled>
  );
};

export default ThemeToggle;
