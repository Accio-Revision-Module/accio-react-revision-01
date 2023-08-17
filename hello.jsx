import React, { useState } from "react";
import "./styles.css";

function Controlled() {
  const [color, setColor] = useState(false);

  const changeColor = () => {
    setColor(!color);
  };

  const style = {
    color: color ? "blue" : "red",
    backgroundColor: "yellow",
  };
  return (
    <div style={style}>
      Jayesh
      <button onChange={changeColor}>Click me</button>
    </div>
  );
}

export default Controlled;

export function Uncontrolled() {
  return <h1 style={{ color: "red", backgroundColor: "yellow" }}>Hi</h1>;
}
