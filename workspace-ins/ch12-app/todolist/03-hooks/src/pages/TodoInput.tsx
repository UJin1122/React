import { useRef, useState, type KeyboardEvent } from "react";

interface TodoInputProps {
  addItem: (title: string) => void;
}

// TODO 1. useRef를 사용해 새로운 아이템이 추가된 후 input 요소에 포커스가 갈수 있게 처리
function TodoInput({ addItem }: TodoInputProps){
  console.log('\t\tTodoInput 렌더링');

  const [title, setTitle] = useState('');

  const titleElem = useRef<HTMLInputElement>(null); // { current: null } 객체를 반환

  // 추가 버튼 클릭 이벤트 핸들러
  const handleAdd = () => {
    if(title.trim() !== ''){
      addItem(title);
      setTitle('');
      titleElem.current?.focus();
    }
  };

  // 엔터 이벤트 핸들러
  const handleAddKeydown = (event: KeyboardEvent) => {
    if(event.nativeEvent.isComposing) return; // 글자가 완성되지 않았을 경우 무시한다.(Mac 사용자)
    if(event.key === 'Enter') handleAdd();
  };

  return (
    <div className="todoinput">
      <input ref={ titleElem } type="text" autoFocus value={ title } onChange={ (e) => setTitle(e.target.value) } onKeyDown={ handleAddKeydown } />
      <button type="button" onClick={ handleAdd }>추가</button>
    </div>
  );
}

export default TodoInput;