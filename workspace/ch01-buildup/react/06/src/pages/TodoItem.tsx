export interface TodoItemType{
  num: number,
  title: string,
  done: boolean,
}

interface TodoItemProps{
  item: TodoItemType,
  toggleDone: (num: number)=> void,
  deleteItem: (num:number)=> void,
}

function TodoItem({ item, toggleDone, deleteItem }:TodoItemProps){
      
  return (
        <li style={{ maxWidth:"500px",minWidth:"auto",}}>
          <span style={{fontSize:20, margin:"0 10px"}}>{ item.num }.</span>
          <span onClick={ () => toggleDone(item.num) }>{ item.done ? <s>{ item.title }</s> : item.title }</span>
          <button style={{borderRadius:10, color:"gray", border:"1px", padding:"0 7px", margin:"0 10px",
        cursor: "pointer",}} onClick={ () => deleteItem(item.num) } type="button">삭제</button>
        </li>
      );
}

export default TodoItem;