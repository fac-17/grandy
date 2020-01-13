import React from "react";
import { useState } from "react";
const Form = () => {
  const [morning, setMorning] = useState("");
  const [night, setNight] = useState("");

  const handleSubmit = () => {
    //read the current values of radio buttons and calculate output?
  };
  return (
    <form>
      <h3>Are you a morning person?</h3>
      <label for="morning">Morning</label>
      <input id="morning" type="radio" name="morningornight" value={morning} />
      <label for="night">Night</label>
      <input id="night" type="radio" name="morningornight" value={night} />
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
};

export default Form;
