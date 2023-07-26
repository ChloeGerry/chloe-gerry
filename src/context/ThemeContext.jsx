import { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [isDarkTheme, setTheme] = useState(true);

  const light = {
    text: '#000',
    background: '#fff',
    border: '1px solid #000',
    filterBackground: 'invert(1)',
    filterForeground: 'invert(0)',
  };

  const dark = {
    text: '#fff',
    background: '#000',
    border: '1px solid #fff',
    filterBackground: 'invert(0)',
    filterForeground: 'invert(1)',
  };

  const toggleTheme = () => {
    setTheme(!isDarkTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        isDarkTheme,
        light,
        dark,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
