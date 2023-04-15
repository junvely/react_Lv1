import React from "react";
import "components/input/input.scss";

export default function Input({ children, name }) {
  return (
    <div className="input-con">
      <label htmlFor={name}>{children}</label>
      <input type="text" id={name} className={`input input-${name}`}></input>
    </div>
  );
}
