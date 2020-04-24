import React, { useState } from "react";
export default function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setloggedInUser] = useState("Guest");
  return (
    <div>
      Hello : {loggedInUser} <br />
      <button
        onClick={() => {
          const userName = loggedInUser === "Guest" ? "Prime" : "Guest";
          setIsLoggedIn(!isLoggedIn);
          setloggedInUser(userName);
        }}
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}
