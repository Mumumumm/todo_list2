import { useDispatch, useSelector } from "react-redux";
import { removeToDo } from "./TodoSlice";

export default function TodoList() {
  const todos = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();
  return (
    <>
      <ul>
        {todos.map(todo => (<li key={todo.id}>{todo.task}
          <button onClick={() => dispatch(removeToDo(todo.id))}>Delete</button>
        </li>))}
      </ul>
    </>
  );
}