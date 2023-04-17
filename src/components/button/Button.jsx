import styles from "./button.module.scss";

export default function Button({ children, type, onclick, width }) {
  return (
    <button
      style={{ width: width }}
      className={`${styles.button} ${type === "delete" && styles.delete} ${
        type === true && styles.done
      } ${type === false && styles.notYet} 
      } `}
      onClick={onclick}
    >
      {children}
    </button>
  );
}
