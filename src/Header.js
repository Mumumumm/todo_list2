import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToDo } from "./TodoSlice";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <h1>할 일 리스트</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        const text = e.target.todo.value.trim();
        if (text) {
          dispatch(addToDo(text));
          e.target.todo.value = "";
          navigate('/todolist');
        }
      }}>
        <input type="text" name="todo" placeholder="할 일을 적으세요"></input>
        <input type="submit" value='추가하기'></input>
      </form>

    </>
  );
}