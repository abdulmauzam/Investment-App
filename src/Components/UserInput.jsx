import React, { useState } from "react";

const UserInput = () => {
 /* const [initialInvestment, setInitialInvestment] = useState();
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
  }*/

  const [UserInput,setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 2000 ,
    duration: 100,
})


function handleChange(inputIdentifier, newValue){
setUserInput(
    prevUserInput => 
      {return{...prevUserInput, [inputIdentifier]:newValue}}
)
}
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input type='number' required onChange={(event)=>handleChange('initialInvestment', event.target.value)} value={UserInput.initialInvestment}/>
        </p>
        <p>
          <label>Annual Investment</label>
          <input type='number' required  onChange={(event)=>handleChange('annualInvestment', event.target.value)} value={UserInput.annualInvestment}/>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input type='number' required  onChange={(event)=>handleChange('expectedReturn', event.target.value)} value={UserInput.expectedReturn}/>
        </p>
        <p>
          <label>Duration</label>
          <input type='number' required  onChange={(event)=>handleChange('duration', event.target.value)} value={UserInput.duration}/>
        </p>
      </div>
    </section>
  );
};

export default UserInput;
