import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

const ThemeContext =
  createContext();

export function ThemeProvider({
  children,
}) {

  const [theme, setTheme] =
    useState(() => {

      return (
        localStorage.getItem(
          "devscope-theme"
        ) || "light"
      );

    });

  useEffect(() => {

    localStorage.setItem(
      "devscope-theme",
      theme
    );

  }, [theme]);

  const toggleTheme = () => {

    setTheme(
      (prev) =>
        prev === "light"
          ? "dark"
          : "light"
    );

  };

  return (

    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >

      <div
        className={`theme-${theme} app-theme`}
      >

        {children}

      </div>

    </ThemeContext.Provider>

  );

}

export const useTheme = () =>
  useContext(
    ThemeContext
  );