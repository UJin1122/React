import styled from 'styled-components';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  $color?: string;
  $bg?: string;
  variant?: 'basic' | 'cancel' | 'submit';
}

const BasicButtonStyle = styled.button<ButtonProps>`
  background-color: ${(props)=> props.$bg || 'gray'};
  border: 1px solid rgba(0, 0, 0, 0.3);
  color: ${(props)=> props.$color || 'black'};
  padding: 6px 18px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 6px;
`;

// 취소 버튼
const CancelButtonStyle = styled(BasicButtonStyle)`
  background-color: red;
  color: white;
`;

// 승인 버튼
const SubmitButtonStyle = styled(BasicButtonStyle)`
  background-color: blue;
  color: white;
`;

function Button({ children, type='button', variant='basic', $bg, $color, ...rest }: ButtonProps){
  const styledProps = { $bg, $color };
  switch(variant){
    case 'cancel':
      return <CancelButtonStyle type={ type }{ ...rest }{ ...styledProps }>{ children }</CancelButtonStyle>
    case 'submit':
      return <SubmitButtonStyle type={ type }{ ...rest }{ ...styledProps }>{ children }</SubmitButtonStyle>
    default:
      return <BasicButtonStyle type={ type }{ ...rest }{ ...styledProps }>{ children }</BasicButtonStyle>
  }
  
}

export default Button;