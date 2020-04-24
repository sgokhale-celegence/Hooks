import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: "Guest",
      isLoggedIn: false
    };
  }

  setIsLoggedIn = () => {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn
    });
  };

  setloggedInUser = () => {
    const userName = this.state.loggedInUser === "Guest" ? "Prime" : "Guest";

    this.setState({
      loggedInUser: userName
    });
  };

  render() {
    const {
      setIsLoggedIn,
      setloggedInUser
      // loginAndUpdateUser
    } = this;
    const { isLoggedIn, loggedInUser } = this.state;
    return (
      <div>
        Hello : {loggedInUser} <br />
        <button
          onClick={() => {
            setIsLoggedIn(!isLoggedIn);
            setloggedInUser("Prime");
          }}
          // onClick={loginAndUpdateUser}
        >
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>
    );
  }
}

// loginAndUpdateUser = () => {
//   const userName = this.state.loggedInUser === "Guest" ? "Prime" : "Guest";
//   alert("Hello.. " + userName);

//   this.setState({
//     isLoggedIn: !this.state.isLoggedIn,
//     loggedInUser: userName
//   });
// };
