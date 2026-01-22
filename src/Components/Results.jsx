import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment";

const Results = ({ input }) => {
  const calculation = calculateInvestmentResults(input);

  console.log(calculation);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {calculation.map((item) => {
          const totalInterest = item.valueEndOfYear-item.annualInvestment*item.year
          return (
           <tr key={item.year}>
            <td>{item.year}</td>
            <td>{formatter.format(item.valueEndOfYear)}</td>
            <td>{formatter.format(item.interest)}</td>
            <td>{formatter.format(item.valueEndOfYear)}</td>
            <td>{formatter.format(totalInterest)}</td>

        </tr>
        )
        }
        
       
      )}
      </tbody>
      
    </table>
  );
};

export default Results;
