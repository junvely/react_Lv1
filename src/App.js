import "styles/css/app.css";
import InputBar from "components/inputBar/InputBar";
import TodoList from "components/todoList/TodoList";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "리액트 공부 OK",
      text: "리액트 공부 했습니다.",
      done: true,
    },
    {
      id: 2,
      title: "리액트 공부 No",
      text: "리액트 공부 안했습니다.",
      done: false,
    },
  ]);

  const addTodo = (title, text) => {
    const newTodos = {
      id: Date.now(),
      title,
      text,
      done: false,
    };
    setTodos([...todos, newTodos]);
  };

  const deleteTodo = (id) => {
    const deletedTodo = todos.filter((todo) => todo.id !== id);
    setTodos(deletedTodo);
  };

  const doneToggleChange = (id) => {
    const changedDoneTodo = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          done: !todo.done,
        };
      }
      return todo;
    });
    setTodos(changedDoneTodo);
  };

  return (
    <div className="wrap">
      <nav>
        <ul className="nav">
          <li>My Todo List</li>
          <li>React</li>
        </ul>
      </nav>
      <InputBar addTodo={addTodo}></InputBar>
      <section>
        <TodoList
          todos={todos}
          type={"not-yet"}
          deleteTodo={deleteTodo}
          doneToggleChange={doneToggleChange}
        >
          Working🔥
        </TodoList>
        <TodoList
          todos={todos}
          type={"done"}
          deleteTodo={deleteTodo}
          doneToggleChange={doneToggleChange}
        >
          Done🎉
        </TodoList>
      </section>
    </div>
  );
}

export default App;
