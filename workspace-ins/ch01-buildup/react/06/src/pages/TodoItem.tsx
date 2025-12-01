export interface TodoItemType {
  num: number;
  title: string;
  done: boolean;
}

interface TodoItemProps {
  item: TodoItemType;
  toggleDone: (num: number) => void;
  deleteItem: (num: number) => void;
}

function TodoItem({ item, toggleDone, deleteItem }: TodoItemProps){
  return (
    <li>
      <span>{ item.num }</span>
      <span onClick={ () => toggleDone(item.num) }>{ item.done ? <s>{ item.title }</s> : item.title }</span>
      <button onClick={ () => deleteItem(item.num) } type="button">삭제</button>
    </li>
  );
}

export default TodoItem;