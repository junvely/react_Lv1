import Button from "components/button/Button";
import styles from "./todo.module.scss";

export default function Todo({ todo, type, deleteTodo, doneToggleChange }) {
  return (
    <div className={styles.todoCon}>
      <h4>{todo.title}</h4>
      <p>{todo.text}</p>
      <div className={styles.buttons}>
        <Button
          type={"delete"}
          width={"45%"}
          onclick={() => deleteTodo(todo.id)}
        >
          삭제하기
        </Button>
        <Button
          type={type}
          width={"45%"}
          onclick={() => doneToggleChange(todo.id)}
        >
          {type === true ? "Done" : "Not yet"}
        </Button>
      </div>
    </div>
  );
}
