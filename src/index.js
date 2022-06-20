import React, { useState } from "react";
import styles from "./index.module.css";

export const SimpleCounterComponent = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1 className={styles.red}>Counter Component</h1>
      <div>{counter}</div>
      <button onClick={() => setCounter((prev) => prev + 1)}>increment</button>
    </div>
  );
};
