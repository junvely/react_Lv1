import React from "react";
import Input from "components/input/Input";
import Button from "components/button/Button";
import "styles/css/inputBar.css";

export default function InputBar() {
  return (
    <div className="input-bar">
      <div className="inputs">
        <Input name="title">제목</Input>
        <Input name="contents">내용</Input>
      </div>
      <Button name="add">추가하기</Button>
    </div>
  );
}
