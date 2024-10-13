import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const FinancialCalculator = ({ carDetails }) => {
  //  Store : carPrice, interestRate, loanTerm, downpayment
  const [carPrice, setCarPrice] = useState();
  const [interestRate, setInterestRate] = useState();
  const [loanTerm, setLoanTerm] = useState();
  const [downpayment, setDownPayment] = useState();
  // monthly payment state
  const [monthlyPaymentAmount, setMonthlyPaymentAmount] = useState();
  // Claculate Monthly Payment
  function calculateMonthlyPayment() {
    const principal = carPrice - downpayment;
    const monthlyInterestRate = interestRate / 1200;
    const montlyPayment =
      (principal *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, loanTerm)) /
      (Math.pow(1 + monthlyInterestRate, loanTerm) - 1);
    console.log(montlyPayment);
    setMonthlyPaymentAmount(montlyPayment.toFixed(2));
  }
  return (
    <div className="p-10 border rounded-xl shadow-md mt-7">
      <h2 className="font-medium text-2xl">Financial Calculator</h2>

      {/* INPUT: price & rate  */}
      <div className="flex  gap-5 mt-5">
        {/* INPUT PRICE */}
        <div className="w-full">
          <label htmlFor="price">Price $</label>
          <Input
            type="number"
            id="price"
            onChange={(e) => setCarPrice(e.target.value)}
          />
        </div>
        {/* INPUT PRICE */}
        <div className="w-full">
          <label htmlFor="interest">Interest Rate</label>
          <Input
            type="number"
            id="interest"
            onChange={(e) => setInterestRate(e.target.value)}
          />
        </div>
      </div>
      {/* INPUT: price & rate  */}
      <div className="flex  gap-5 mt-5">
        {/* INPUT PRICE */}
        <div className="w-full">
          <label htmlFor="loan">Loan Term (Months) </label>
          <Input
            type="number"
            id="loan"
            onChange={(e) => setLoanTerm(e.target.value)}
          />
        </div>
        {/* INPUT PRICE */}
        <div className="w-full">
          <label htmlFor="downpayment">Down Payment</label>
          <Input
            type="number"
            id="downpayment"
            onChange={(e) => setDownPayment(e.target.value)}
          />
        </div>
      </div>

      {/* Show monthly payment amount */}
      {monthlyPaymentAmount >= 0 && (
        <h2 className="font-bold text-2xl mt-6">
          Your Monthly Payment Amount:
          <span className="text-[1.2em]">${monthlyPaymentAmount}</span>
        </h2>
      )}
      {/* Submit buttone */}
      <Button
        className="w-full mt-6"
        size="lg"
        onClick={calculateMonthlyPayment}
      >
        Calculate
      </Button>
    </div>
  );
};

export default FinancialCalculator;
