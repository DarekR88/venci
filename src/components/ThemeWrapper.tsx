"use client";

import React, { useState } from 'react';

interface ThemeWrapperProps {
  children: React.ReactNode;
}

const ThemeWrapper: React.FC<ThemeWrapperProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      {/* Pass theme state and methods to children */}
      {React.Children.map(children, child => {
        return React.cloneElement(child as React.ReactElement<any>, { isDarkMode, toggleTheme });
      })}
    </div>
  );
};

export default ThemeWrapper;