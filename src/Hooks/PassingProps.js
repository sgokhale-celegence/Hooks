import React, { useState, useEffect } from "react";

export default function PassingProps() {
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  return (
    <>
      Enter your First name :{" "}
      <input value={fname} onChange={e => setFName(e.target.value)} />
      <br />
      your Last name :{" "}
      <input value={lname} onChange={e => setLName(e.target.value)} />
      <br />
      <DisplayName fname={fname} lname={lname} />
    </>
  );
}
function DisplayName({ fname, lname }) {
  const [name, setName] = useState({
    fname,
    lname
  });

  useEffect(() => {
    setName(name => ({ ...name, fname: fname, lname: lname }));
  }, [fname, lname]);

  return (
    <>
      Hello: {name.fname} {name.lname}
    </>
  );
}
