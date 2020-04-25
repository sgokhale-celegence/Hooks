import React, { useState, useEffect } from "react";

function SideEffectsWithDependencies() {
  const [isMovieHallOpen, setIsMovieHallOpen] = useState(false);
  const [isProjectorOn, setIsProjectorOn] = useState(false);

  useEffect(() => {
    console.log("Projector is On : -->" + isProjectorOn.toString());
    // return () => {
    //   console.log("Projector Cleaning Up");
    // };
  }, [isProjectorOn]);

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
      {isMovieHallOpen && <AdmitFans />}
      <br /> <br /> <br /> <br />
    </div>
  );
}

function AdmitFans() {
  const [admitNewBatch, setAdmitNewBatch] = useState(1);
  const [userId, setUserId] = useState("0");

  useEffect(() => {
    const URL = "https://jsonplaceholder.typicode.com/todos/" + admitNewBatch;
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        setUserId(data.id);
      })
      .catch(error => {
        console.error("Error:", error);
      });
    console.log("Admitted New Batch - For Logged In User");
    // return () => {
    //   console.log("Seating Cleaning Up");
    // };
  }, [admitNewBatch]);
  return (
    <>
      User ID (From Service) {userId}
      <button onClick={() => setAdmitNewBatch(admitNewBatch + 1)}>
        Admit Batch - {admitNewBatch}
      </button>
    </>
  );
}

export default React.memo(SideEffectsWithDependencies);
