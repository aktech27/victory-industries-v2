"use client";

import { createContext, useState, useEffect, FC, ReactNode } from "react";

type Theme = "light" | "dark";

interface IThemeProps {
  theme: Theme;
  setTheme: (newTheme: Theme) => void;
}

export const ThemeContext = createContext<null | IThemeProps>(null);

const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return <ThemeContext value={{ theme, setTheme }}>{children}</ThemeContext>;
};

export default ThemeProvider;
