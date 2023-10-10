import React, { createContext, ReactNode, useState } from 'react';

interface WindowContext {
  windowTheme: boolean;
  handleWindowTheme: () => void;
}

const defaultValue: WindowContext = {
  windowTheme: true,
  handleWindowTheme: () => {},
};

const WindowContext = createContext(defaultValue);

const WindowProvider = ({ children }: { children: ReactNode }) => {
  const [windowTheme, setWindowTheme] = useState<boolean>(true);

  const handleWindowTheme = () => {
    setWindowTheme(!windowTheme);
  };

  const contextValue = {
    windowTheme,
    handleWindowTheme,
  };
  return (
    <WindowContext.Provider value={contextValue}>
      {children}
    </WindowContext.Provider>
  );
};

export { WindowContext, WindowProvider };
