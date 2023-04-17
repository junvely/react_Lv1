import React, { useState } from "react";
import Input from "components/input/Input";
import Button from "components/button/Button";
import styles from "./inputBar.module.scss";

export default function InputBar({ addTodo }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const addTodoHandler = () => {
    addTodo(title, text);
    setTitle("");
    setText("");
  };

  return (
    <div className={styles.inputBar}>
      <div className={styles.inputs}>
        <Input type="title" value={title} setValue={setTitle} addTodo={addTodo}>
          제목
        </Input>
        <Input type="text" value={text} setValue={setText} addTodo={addTodo}>
          내용
        </Input>
      </div>
      <Button type="add" onclick={addTodoHandler}>
        추가하기
      </Button>
    </div>
  );
}
