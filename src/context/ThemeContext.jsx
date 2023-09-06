import { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [isDarkTheme, setTheme] = useState(true);

  const light = {
    text: '#000',
    title: '#fff',
    background: '#fff',
    border: '1px solid #000',
    borderImage: '1px solid #fff',
    filter: 'invert(0)',
  };

  const dark = {
    text: '#fff',
    title: '#fff',
    background: '#000',
    border: '1px solid #fff',
    borderImage: '1px solid #fff',
    filter: 'invert(1)',
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
