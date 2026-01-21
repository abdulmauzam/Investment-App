

const UserInput = ({onChange, userInput}) => {
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

  



  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input type='number' required onChange={(event)=>onChange('initialInvestment', event.target.value)} value={userInput.initialInvestment}/>
        </p>
        <p>
          <label>Annual Investment</label>
          <input type='number' required  onChange={(event)=>onChange('annualInvestment', event.target.value)} value={userInput.annualInvestment}/>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input type='number' required  onChange={(event)=>onChange('expectedReturn', event.target.value)} value={userInput.expectedReturn}/>
        </p>
        <p>
          <label>Duration</label>
          <input type='number' required  onChange={(event)=>onChange('duration', event.target.value)} value={userInput.duration}/>
        </p>
      </div>
    </section>
  );
};

export default UserInput;
