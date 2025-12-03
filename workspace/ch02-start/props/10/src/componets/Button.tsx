interface ButtonProps{
  children: React.ReactNode,
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  type?:  'button' | 'submit' | 'reset' ,
  color?: string
}

function Button({ children, onClick, type='button', color="#0000000c" }:ButtonProps){
  console.log("\tButton 랜더링")
  return(
  <button onClick={ onClick }
    style={{ background: color  }}
    className="my-button"
    type={ type }>
    { children }
    
  </button>);
}
export default Button;