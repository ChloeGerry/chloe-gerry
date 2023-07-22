import { useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';
import { ButtonStyled } from './button.style';

const Button = ({ children, onClick }) => {
  const { isDarkTheme, light, dark } = useContext(ThemeContext);
  const theme = isDarkTheme ? dark : light;

  return (
    <ButtonStyled type="button" theme={theme} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
