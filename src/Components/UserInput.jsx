import React, { useState } from "react";

const UserInput = () => {
  const [initialInvestment, setInitialInvestment] = useState();
  const [annualInvestment, setannualInvestment] = useState();
  const [expectedReturn, setexpectedReturn] = useState();
  const [duration, setduration] = useState();

  function initialChange(event) {
    setInitialInvestment(event.target.value);
  }
  function annualChange(event) {
    setannualInvestment(event.target.value);
  }
  function expectedChange(event) {
    setexpectedReturn(event.target.value);
  }
  function durationChange(event) {
    setduration(event.target.value);
  }
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input onChange={initialChange} />
        </p>
        <p>
          <label>Annual Investment</label>
          <input onChange={annualChange}></input>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input onChange={expectedChange}></input>
        </p>
        <p>
          <label>Duration</label>
          <input onChange={durationChange}></input>
        </p>
      </div>
    </section>
  );
};

export default UserInput;
