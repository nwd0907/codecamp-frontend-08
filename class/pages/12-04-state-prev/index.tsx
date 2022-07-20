import { useState } from "react";

export default function CounterStatePage() {
  const [count, setCount] = useState(1);

  function counterUp() {
    // setCount(1)
    // setCount(count + 1)
    // setCount(count + 1)
    // setCount(count + 1)

    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  }

  return (
    <>
      <div>{count}</div>
      <button onClick={counterUp}>카운트 올리기!!!</button>
    </>
  );
}
