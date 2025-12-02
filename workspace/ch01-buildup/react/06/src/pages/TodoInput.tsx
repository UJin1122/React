import { useState } from "react";

interface TodoInputProps{
  addItem: (title:string) => void;
}

function TodoInput({ addItem }:TodoInputProps){
  // 할일 제목
  const [ title, setTitle ] = useState('');    
  console.log("제목 변경됨",title);
  // 추가 버튼 클릭 이벤트 핸들러
      const handleAdd = () => {
        console.log('추가 버튼 클릭');
        // 입력한 제목 꺼내기
        if(title.trim() !== ''){ // 빈 문자열만 입력한게 아니라면
          addItem(title.trim());
          setTitle('');
        }
      };

      // 엔터 이벤트 핸들러
      const handleAddKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
        // console.log('keyup', event.currentTarget.value);
        if(event.key === 'Enter') handleAdd();
      };

      return (
        <div className="todoinput" style={{display:"flex", justifyContent:"center", padding:"10px"}}>
          <input style={{borderRadius:" 10px 0 0 10px", border:"1px solid gray"}} 
          type="text" value={ title } onChange={(e) => setTitle(e.target.value)} autoFocus onKeyUp={ handleAddKeyUp } />
          <button style={{borderRadius:" 0 10px 10px 0", border:"1px solid gray", cursor: "pointer" }} 
           type="button" onClick={ handleAdd }>추가</button>
        </div>
      );
}

export default TodoInput;