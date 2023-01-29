import { useState } from "react";

function Button() {
  const [couter, setCounter] = useState(0);
  return (
    <div>
      <h1>{couter}</h1>
      <button onClick={() => setCounter(couter + 1)}>on up</button>
    </div>
  );
}
export default Button;
