import { ArrowIcon } from './arrow.style';
import { useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';

const Arrow = () => {
  const { isDarkTheme, dark, light } = useContext(ThemeContext);
  const theme = isDarkTheme ? dark : light;

  return (
    <a href="#home">
      <ArrowIcon className="fa-solid fa-arrow-up" theme={theme}></ArrowIcon>
    </a>
  );
};

export default Arrow;
