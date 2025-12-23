import { createContext, useState, useEffect } from "react";

type Theme = 'light' | 'dark'
interface ThemeContextType{
  theme: Theme;
  toggleTheme: () => void;
}

// 1. Context 객체 생성
const ThemeContext = createContext<ThemeContextType | null>(null);

// 2. Provider 컴포넌트를 만들어 export
export function ThemeProvider({ children }:{ children: React.ReactNode}){

  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [theme]);


  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const context = { theme, toggleTheme };

  return (
    <ThemeContext value={ context }>
      { children }
    </ThemeContext>
  );

}

export default ThemeContext;