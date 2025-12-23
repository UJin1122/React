import './ThemeToggle.css';
import { useEffect, use } from "react";
import ThemeContext from '@/contexts/ThemeContext';

function ThemeToggle(){
  useEffect(()=>{
    console.log("## ThemeToggle 렌더링.");
  });

  const { theme, toggleTheme } = use(ThemeContext);

  return(<button
    className="theme-toggle"
    onClick={ toggleTheme }
  >{ theme === 'dark' ? '☀️라이트 모드' : '🌙다크 모드' }</button>);
}
export default ThemeToggle;