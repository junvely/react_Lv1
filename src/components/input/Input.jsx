import styles from "./input.module.scss";

export default function Input({ children, type, value, setValue }) {
  return (
    <div className={styles.inputCon}>
      <label htmlFor={type}>{children}</label>
      <input
        type="text"
        id={type}
        className={styles.input}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></input>
    </div>
  );
}
