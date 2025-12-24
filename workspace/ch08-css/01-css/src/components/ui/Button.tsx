import './Button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  bg?: string;
  color?: string;
}

function Button({ children, type='button', bg, color, ...rest }: ButtonProps){
  return (
    <button type={ type } className={`button bg-${bg}-text-${color}`} { ...rest } >{ children }</button>
  );
}

export default Button;