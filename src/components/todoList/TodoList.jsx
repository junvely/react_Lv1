import Todo from "components/todo/Todo";
import "styles/css/todoList.css";

export default function TodoList({ children }) {
  return (
    <div className="todo-list-con">
      <h3>{children}</h3>
      {<Todo></Todo>}
    </div>
  );
}
