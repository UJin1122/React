import styled from 'styled-components';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  $color?: string;
  $bg?: string;
}

const BasicButtonStyle = styled.button<ButtonProps>`
  background-color: ${ (props) => props.$bg || 'gray' };
  border: 1px solid rgba(0, 0, 0, 0.3);
  color: ${ (props) => props.$color || 'black' };
  padding: 6px 18px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 6px;
`;

function Button({ children, type='button', $bg, $color, ...rest }: ButtonProps){
  const styledProps = { $bg, $color };

  return (
    <BasicButtonStyle type={ type } { ...rest } { ...styledProps }>{ children }</BasicButtonStyle>
  );
}

export default Button;