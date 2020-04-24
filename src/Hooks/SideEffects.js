import React, { useEffect } from "react";
export default function ExampleUseEffect() {
  const [counter, setCounter] = React.useState(0);

  useEffect(() => {
    document.title = counter;
  });

  return (
    <>
      <h1>Example Use Effect</h1>
      <button onClick={() => setCounter(counter + 1)}>{counter}</button>
    </>
  );
}
