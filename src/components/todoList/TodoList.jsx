import Todo from "components/todo/Todo";
import styles from "./todoList.module.scss";

export default function TodoList({
  children,
  todos,
  type,
  deleteTodo,
  doneToggleChange,
}) {
  return (
    <div className={styles.todoListCon}>
      <h3>{children}</h3>
      <div className={styles.todos}>
        {type === "not-yet" &&
          todos
            .filter((item) => !item.done)
            .map((item) => {
              return (
                <Todo
                  key={item.id}
                  todo={item}
                  type={false}
                  deleteTodo={deleteTodo}
                  doneToggleChange={doneToggleChange}
                ></Todo>
              );
            })}
        {type === "done" &&
          todos
            .filter((item) => item.done)
            .map((item) => {
              return (
                <Todo
                  key={item.id}
                  todo={item}
                  type={true}
                  deleteTodo={deleteTodo}
                  doneToggleChange={doneToggleChange}
                ></Todo>
              );
            })}
      </div>
    </div>
  );
}
