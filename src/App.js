import "styles/css/app.css";
import InputBar from "components/inputBar/InputBar";
import TodoList from "components/todoList/TodoList";

function App() {
  return (
    <div className="wrap">
      <nav>
        <ul className="nav">
          <li>My Todo List</li>
          <li>React</li>
        </ul>
      </nav>
      <InputBar></InputBar>
      <section>
        <TodoList>Working🔥</TodoList>
        <TodoList>Done🎉</TodoList>
      </section>
    </div>
  );
}

export default App;
