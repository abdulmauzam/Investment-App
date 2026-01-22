import Header from "./Components/Header";
import Results from "./Components/Results";
import UserInput from "./Components/UserInput";
import React, { useState } from "react";

function App() {

const [userInput,setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 2000 ,
    duration: 100,
})

const durationInput = userInput.duration >= 1;
function handleChange(inputIdentifier, newValue){
setUserInput(
    prevUserInput => 
      {return{...prevUserInput, [inputIdentifier]:newValue}}
)
}

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange}/>
     {durationInput ? <Results input={userInput}/> : "Please enter a correct Value"} 
    </>
  );
}

export default App;
