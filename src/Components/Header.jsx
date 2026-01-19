import React from 'react'
import investment from "../assets/investment-calculator-logo.png";

const Header = () => {
  return (
    <>
    <div id="header">
        <img src={investment} />
        <h1>React Investment Calculator</h1>
      </div>
    </>
  )
}

export default Header