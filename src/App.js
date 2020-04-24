import React from "react";
// import Counter from "./Hooks/Counter";
// import Login from "./Hooks/Login";
// import CounterClass from "./withClasses/Counter";
// import LoginClass from './withClasses/Login';

import ExampleUseEffect from "./Hooks/SideEffects";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {/* <Counter />
      <hr />
      <CounterClass />
      <hr />
      <Login />
      <hr />
      <LoginClass /> */}
      <ExampleUseEffect />
    </div>
  );
}
