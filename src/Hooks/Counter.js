import React, { useState } from "react";
export default function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>{counter}</button>
    </div>
  );
}
