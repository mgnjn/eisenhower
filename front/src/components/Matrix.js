import React from "react";
import Quadrant from "./Quadrant";
import Expiration from "./Expiration";

function Matrix() {
  return (
    <>
      <Expiration />
      <Quadrant id="q1" label="Important, Urgent" />
      <Quadrant id="q2" label="Important, Not Urgent" />
      <Quadrant id="q3" label="Not Important, Urgent" />
      <Quadrant id="q4" label="Not Important, Not Urgent" />
    </>
  );
}

export default Matrix;
