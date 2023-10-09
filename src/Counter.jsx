import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const incriment = () => setCount(count + 1);
  const decriment = () => setCount(count - 1);

  // コールバック関数
  // const incriment = () => setCount((priv) => priv + 1);
  // const decriment = () => setCount((priv) => priv - 1);

  return (
    <>
      <p>value: {count}</p>
      <button onClick={incriment}>+</button>
      <button onClick={decriment}>-</button>
    </>
  );
};
