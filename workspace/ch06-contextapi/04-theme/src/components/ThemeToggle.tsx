import './ThemeToggle.css';
import { useEffect, use } from "react";
import ThemeContext from '@/contexts/ThemeContext';

function ThemeToggle(){
  useEffect(()=>{
    console.log("## ThemeToggle 렌더링.");
  });

  const theme = use(ThemeContext);

  return(<button
    className="theme-toggle"
    onClick={theme?.toggleTheme}
  >{theme?.isDark ? '라이트 모드' : '다크 모드'}</button>);
}
export default ThemeToggle;