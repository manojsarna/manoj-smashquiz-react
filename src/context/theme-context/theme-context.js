import { createContext, useContext, useEffect, useState } from "react";
const ThemeContext = createContext();

const useTheme = () => useContext(ThemeContext);

function ThemeProvider({ children }) {
  const localStorageTheme = localStorage.getItem("data-theme");
  const [theme, setTheme] = useState(localStorageTheme ?? "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("data-theme", theme);
  }, [theme]);

  const toggleLightDarkTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleLightDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider, useTheme };
