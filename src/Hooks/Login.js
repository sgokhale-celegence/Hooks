import React, { useState } from "react";
export default function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setloggedInUser] = useState("Guest");
  return (
    <div>
      Hello : {loggedInUser} <br />
      <button
        onClick={() => {
          setIsLoggedIn(!isLoggedIn);
          setloggedInUser("Prime");
        }}
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}
