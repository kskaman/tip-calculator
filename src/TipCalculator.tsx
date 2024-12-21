import iconDollar from "./assets/icons/icon-dollar.svg";
import Input from "./Input";

import tipCalculatorStyles from "./styles/TipCalculator.module.css";

const TipCalculator = () => {
  return (
    <div className={tipCalculatorStyles.mainDiv}>
      <div className={tipCalculatorStyles.userDataDiv}>
        <Input tag="Bill" icon={iconDollar} mode="decimal" />
      </div>
      <div className={tipCalculatorStyles.resultDiv}></div>
    </div>
  );
};

export default TipCalculator;
