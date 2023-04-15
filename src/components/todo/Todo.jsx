import Button from "components/button/Button";
import "styles/css/todo.css";

export default function Todo() {
  return (
    <div className="todo-con">
      <h4>리액트 공부하기</h4>
      <p>리액트 기초를 공부해봅시다.</p>
      <div className="buttons">
        <Button name="delete">삭제하기</Button>
        <Button name="cancel">취소</Button>
      </div>
    </div>
  );
}
