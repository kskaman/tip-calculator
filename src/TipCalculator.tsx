import iconDollar from "./assets/icons/icon-dollar.svg";
import iconPerson from "./assets/icons/icon-person.svg";

import Input from "./Input";
import TipPad from "./TipPad";

import tipCalculatorStyles from "./styles/TipCalculator.module.css";
import Total from "./Total";
//import { useState } from "react";

const TipCalculator = () => {
  //   const [tipPerPerson, setTipPerPerson] = useState(0);
  //   const [totalPerPerson, setTotalPerPerson] = useState(0);
  const tipPerPerson = 0;
  const totalPerPerson = 0;

  return (
    <div className={tipCalculatorStyles.mainDiv}>
      <div className={tipCalculatorStyles.userDataDiv}>
        <Input tag="Bill" icon={iconDollar} mode="decimal" />
        <TipPad />
        <Input tag="Number of People" icon={iconPerson} mode="numeric" />
      </div>

      <div className={tipCalculatorStyles.resultDiv}>
        <div className={tipCalculatorStyles.presentResult}>
          <Total mainText="Tip Amount" amount={tipPerPerson} />
          <Total mainText="Total" amount={totalPerPerson} />
        </div>
        <button className={tipCalculatorStyles.resetButton}>RESET</button>
      </div>
    </div>
  );
};

export default TipCalculator;
