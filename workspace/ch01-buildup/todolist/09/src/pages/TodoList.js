import TodoItem from "./TodoItem.js";
import Reaction from '../../../reaction.js';

function TodoList({ itemList, toggleDone, deleteItem }){
      // list = [ li, li, li ]
      const list = itemList.map(item => {
        return TodoItem({ item, toggleDone, deleteItem });
      });
      return (
        Reaction.createElement('ul', { class: 'todolist' }, list)
      );
}

export default TodoList;