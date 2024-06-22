import React from "react";

function ButtonRandom({ handleRandom }) {
  return (
    <button id="btn" onClick={handleRandom}>
      RANDOMIZE!
    </button>
  );
}
export default ButtonRandom;
