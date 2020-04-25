import React from "react";
// import Counter from "./Hooks/Counter";
// import Login from "./Hooks/Login";
// import CounterClass from "./withClasses/Counter";
// import LoginClass from './withClasses/Login';
// import ExampleUseEffectClass from "./withClasses/SideEffects";
// import ExampleUseEffect from "./Hooks/SideEffects";
// import ExampleUseEffect from "./Hooks/SideEffectsWithDependencies";
import PassingProps from "./Hooks/PassingProps";

import Moviehall from "./Hooks/Moviehall";
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
      {/* <ExampleUseEffect /> */}
      {/* <Moviehall /> */}
      <PassingProps />
    </div>
  );
}
