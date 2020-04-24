import React from "react";
export default class CounterClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }
  increment = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };
  render() {
    const { counter } = this.state;
    return (
      <div>
        <button onClick={this.increment}>{counter}</button>
      </div>
    );
  }
}
