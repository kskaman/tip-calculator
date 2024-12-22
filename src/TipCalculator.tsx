import iconDollar from "./assets/icons/icon-dollar.svg";
import iconPerson from "./assets/icons/icon-person.svg";

import Input from "./Input";
import TipPad from "./TipPad";

import tipCalculatorStyles from "./styles/TipCalculator.module.css";
import Total from "./Total";

import { useState, useEffect } from "react";

type TipValue = "5%" | "10%" | "15%" | "25%" | "50%" | "Custom" | string;

const TipCalculator = () => {
  const [tipPerPerson, setTipPerPerson] = useState<number>(0);
  const [totalPerPerson, setTotalPerPerson] = useState<number>(0);
  const [bill, setBill] = useState<string>("");
  const [tip, setTip] = useState<TipValue>("");
  const [personCount, setPersonCount] = useState<string>("");
  const [showWarning, setShowWarning] = useState(false);
  const [highlightReset, setHighlightReset] = useState(false);
  const [tipType, setTipType] = useState<
    "5%" | "10%" | "15%" | "25%" | "50%" | "Custom" | ""
  >("");

  useEffect(() => {
    const billNum = parseFloat(bill) || 0;
    const peopleNum = parseInt(personCount, 10) || 0;

    if (billNum > 0 && tip !== "" && tip !== "Custom") {
      if (peopleNum === 0) {
        setShowWarning(true);
        setTipPerPerson(0);
        setTotalPerPerson(0);
        setHighlightReset(false);
      } else {
        setShowWarning(false);

        // Calculate the tip
        let calculatedTip = 0;
        if (["5%", "10%", "15%", "25%", "50%"].includes(tip)) {
          const percentage = parseFloat(tip) / 100;
          calculatedTip = billNum * percentage;
        } else if (tip !== "Custom") {
          calculatedTip = parseFloat(tip) || 0;
        }

        setTipPerPerson(calculatedTip / parseInt(personCount));

        const totalBill = billNum + calculatedTip;
        setTotalPerPerson(totalBill / parseInt(personCount));

        setHighlightReset(true);
      }
    } else {
      setShowWarning(false);
      setTipPerPerson(0);
      setTotalPerPerson(0);
      setHighlightReset(false);
    }
  }, [bill, tip, personCount]);

  const handleTotalChange = (val: string) => {
    setBill(val);
  };

  const handlePersonChange = (val: string) => {
    setPersonCount(val);
  };

  const handleTipChange = (val: string) => {
    setTip(val);
  };

  const onReset = () => {
    setBill("");
    setTip("");
    setTipType("");
    setPersonCount("");
    setShowWarning(false);
  };

  return (
    <div className={tipCalculatorStyles.mainDiv}>
      <div className={tipCalculatorStyles.userDataDiv}>
        {/* Bill Input */}
        <Input
          tag="Bill"
          icon={iconDollar}
          mode="decimal"
          value={bill.toString()}
          setValue={handleTotalChange}
        />

        {/* Tip Pad */}
        <TipPad
          tipValue={tip}
          onTipChange={handleTipChange}
          tipType={tipType}
          setTipType={setTipType}
        />
        <Input
          tag="Number of People"
          icon={iconPerson}
          mode="numeric"
          value={personCount.toString()}
          setValue={handlePersonChange}
          warning={showWarning}
        />
      </div>

      <div className={tipCalculatorStyles.resultDiv}>
        <div className={tipCalculatorStyles.presentResult}>
          <Total mainText="Tip Amount" amount={tipPerPerson} />
          <Total mainText="Total" amount={totalPerPerson} />
        </div>
        <button
          className={`${tipCalculatorStyles.resetButton} ${
            highlightReset ? tipCalculatorStyles.highlightReset : ""
          }`}
          onClick={onReset}
        >
          RESET
        </button>
      </div>
    </div>
  );
};

export default TipCalculator;
