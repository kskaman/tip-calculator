import iconDollar from "./assets/icons/icon-dollar.svg";

import tipPadStyles from "./styles/TipPad.module.css";

import Tip from "./Tip";
import Input from "./Input";

import { useState } from "react";

interface Props {
  tipValue: "5%" | "10%" | "15%" | "25%" | "50%" | "Custom" | string; // Tip value from parent
  onTipChange: (tip: "5%" | "10%" | "15%" | "25%" | "50%" | string) => void;
  tipType: "5%" | "10%" | "15%" | "25%" | "50%" | "Custom" | "";
  setTipType: (
    tipType: "5%" | "10%" | "15%" | "25%" | "50%" | "Custom" | ""
  ) => void;
}

const TipPad = ({ tipValue, onTipChange, tipType, setTipType }: Props) => {
  const tips: Array<"5%" | "10%" | "15%" | "25%" | "50%" | "Custom"> = [
    "5%",
    "10%",
    "15%",
    "25%",
    "50%",
    "Custom",
  ];

  const [customTip, setCustomTip] = useState<string>(""); // Custom tip input

  const handleSelectTip = (
    tip: "5%" | "10%" | "15%" | "25%" | "50%" | "Custom"
  ) => {
    if (tip === tipValue) {
      onTipChange("");
      setTipType("");
    } else if (tip !== "Custom") {
      setTipType(tip);
      setCustomTip("");
      onTipChange(tip);
    } else {
      setTipType("Custom");
    }
  };

  const handleCustomSubmit = (value: string) => {
    const numericValue = parseFloat(value);
    if (isNaN(numericValue) || numericValue < 0) {
      return;
    }

    setCustomTip(value);
    if (
      typeof customTip === "string" ||
      ["5%", "10%", "15%", "25%", "50%"].includes(customTip)
    ) {
      onTipChange(customTip);
    }
  };

  return (
    <div className={tipPadStyles.tipPadDiv}>
      <div className={tipPadStyles.tipPadHeader}>Select Tip %</div>
      <div className={tipPadStyles.tipsContainer}>
        {tips.map((tip) =>
          tip === "Custom" && tipType === "Custom" ? (
            <Input
              key="custom"
              tag="custom"
              icon={iconDollar}
              mode="decimal"
              value={customTip}
              setValue={handleCustomSubmit} // Pass input value to custom tip handler
            />
          ) : (
            <Tip
              key={tip}
              val={tip}
              selected={tip === tipType}
              onSelect={handleSelectTip}
            />
          )
        )}
      </div>
    </div>
  );
};

export default TipPad;
