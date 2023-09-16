import { useState } from "react";
import styles from "./style.module.css";

export const Effect = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.center}>
      <span>{count}</span>
      <div>
        <button onClick={() => setCount(count + 1)}>+1</button>
        <button onClick={() => setCount(count - 1)}>-1</button>
      </div>
    </div>
  );
};
