interface ButtonProps{
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
  color?: 'red' | 'gray' | 'green';
}

// children prop은 특별히 예약된 이름으로, 
// 컴포넌트 사이에 넣는 모든 요소나 텍스트가 자동으로 전달됨
function Button({ children, onClick, type='button', color="green" }: ButtonProps){
  console.log('\t\tButton 렌더링.');
  return (
    <button 
      type={ type } 
      onClick={ onClick }
      className="rounded-button"
      style={{ backgroundColor: color }}
    >
      { children }
    </button>
  );
}

export default Button;