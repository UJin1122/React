interface ButtonProps{
  children: React.ReactNode,
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

// children prop은 특별히 예약된 이름으로, 
// 컴포넌트 사이에 넣는 모든 요소나 텍스트가 자동으로 전달됨
function Button({ children, onClick }: ButtonProps){
  console.log('\t\tButton 렌더링.');
  return (
    <button type="button" onClick={ onClick }>{ children }</button>
  );
}

export default Button;