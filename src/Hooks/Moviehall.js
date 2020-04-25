import React, { useState, useEffect } from "react";

function SideEffectsWithDependencies() {
  const [isMovieHallOpen, setIsMovieHallOpen] = useState(false);
  const [isProjectorOn, setIsProjectorOn] = useState(true);
  const [admitNewBatch, setAdmitNewBatch] = useState(1);

  useEffect(() => {
    console.log("Verify Projector Status");
  });

  // useEffect(() => {
  //   console.log("in side Use Effect - For Logged In User");
  // });
  // console.log("Just Before Render");
  return (
    <div>
      Hello User, Movie Hall is now :{" "}
      <b> {isMovieHallOpen ? "Open" : "Closed"} </b>
      <button
        onClick={() => {
          // const hallStatus = loggedInUser === "Guest" ? "Prime" : "Guest";
          // setIsLoggedIn(!isLoggedIn);
          // setloggedInUser(userName);
          setIsMovieHallOpen(!isMovieHallOpen);
          setIsProjectorOn(!isProjectorOn);
        }}
      >
        {isMovieHallOpen ? "Close" : "Open"} Movie Hall
      </button>
      <br /> <br />
      <button onClick={() => setAdmitNewBatch(admitNewBatch + 1)}>
        Admit Batch - {admitNewBatch}
      </button>
      <br /> <br /> <br /> <br />
    </div>
  );
}

export default React.memo(SideEffectsWithDependencies);
