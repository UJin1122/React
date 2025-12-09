import './Button.css';

interface ButtonProps {
  children: string;
  type?: 'button' | 'submit' | 'reset';
  onClick: () => void;
}

function Button({ children, type="button", onClick: handleClick }: ButtonProps) {
  return (
    <button 
      className="rounded-button"
      type={ type }
      onClick={ handleClick }
    >{ children }</button>
  );
}

export default Button;