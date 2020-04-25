import React, { useState, useEffect } from "react";
export default function SideEffectsWithDependencies() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setloggedInUser] = useState("Guest");

  useEffect(() => {
    console.log("inside Use Effect - Is Logged In");
  }, [isLoggedIn]);

  useEffect(() => {
    console.log("in side Use Effect - For Logged In User");
  });

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
