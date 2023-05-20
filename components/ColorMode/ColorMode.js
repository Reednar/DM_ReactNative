import React, { createContext, useState } from 'react';

export const ColorModeContext = createContext({
  isDarkMode: false,
  toggleColorMode: () => {},
});

// Change color of app
export const ColorMode = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleColorMode = () => {
    console.log('toggleColorMode : ', isDarkMode ? 'light' : 'dark');
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ColorModeContext.Provider value={{ isDarkMode, toggleColorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
};
