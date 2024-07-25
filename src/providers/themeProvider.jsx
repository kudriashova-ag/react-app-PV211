import React, { useEffect, useState } from "react";
import { ThemeContext } from "../contexts/themeContext";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const current = localStorage.getItem("theme") || "dark";
    setTheme(current);
    document.body.className = `theme-${current}`;
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const current = theme === "dark" ? "light" : "dark";
    setTheme(current);
    document.body.className = `theme-${current}`;
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
