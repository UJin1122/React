const btnBg = {
  gray: 'bg-gray-500',
  blue: 'bg-blue-500',
  red: 'bg-red-500',
  white: 'bg-white-500',
} as const; // 모든 속성 Readonly/ 각 속성의 타입이 리터럴로 추론(stringX)

const btnColor = {
  black: 'text-black',
  red: 'text-red',
  blue: 'text-blue',
  white: 'text-white',
} as const;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  // bg?: 'gray' | 'blue' | 'red' | 'white';
  // btnBg의 타입의 키들을 유니온으로 반환
  bg?: keyof typeof btnBg;
  color?: keyof typeof btnColor;
}

function Button({ children, type='button', bg='gray', color='black', ...rest }: ButtonProps){
  return (
    <button type={ type } 
    className={`
      ${btnBg[bg]} 
      border 
      border-black/30
      rounded-md
      text-center
      no-underline
      py-2
      px-4
      my-1
      mx-0.5
      inline-block
      text-base
      ${btnColor[color]}`}
    { ...rest }>
    { children }
    </button>
  );
}

export default Button;