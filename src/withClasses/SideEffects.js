import React from "react";

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    document.title = this.state.count;
  }

  // componentDidUpdate() {
  //   document.title = this.state.count;
  // }

  render() {
    return (
      <div>
        <h1>Example Use Effect - Using Classes</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          {this.state.count}
        </button>
      </div>
    );
  }
}
