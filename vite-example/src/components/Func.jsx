import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
function Func({ name }) {
  const [state, setState] = useState("");

  useEffect(() => {
    console.log("first time");
  }, []);

  useEffect(() => {
    if (state) {
      console.log("State was changed");
    }
  }, [state]);

  const changeState = () => {
    setState("hello");
  };

  return (
    <div>
      Func: {name} State: {state}
      <button onClick={changeState}>Change State</button>
    </div>
  );
}

export default Func;
