import { createContext, useState } from "react";

type Theme = 'light' | 'dark'
interface ThemeContextType{
  theme: Theme;
  toggleTheme: () => void;
}

// 1. Context 객체 생성
const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () =>{},
});

// 2. Provider 컴포넌트를 만들어 export
export function ThemeProvider({ children }:{ children: React.ReactNode}){

  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    const newTheme = (theme === 'dark' ? 'light' : 'dark');
    setTheme(newTheme);
    document.body.classList.toggle('dark');
  };
  
  return (
    <ThemeContext value={{ theme, toggleTheme }}>
      { children }
    </ThemeContext>
  );

}

export default ThemeContext;