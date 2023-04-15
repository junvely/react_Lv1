import React from "react";
import "styles/css/button.css";

export default function Button({ children, name }) {
  return <button className={`button button-${name}`}>{children}</button>;
}
