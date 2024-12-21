import tipPadStyles from "./styles/TipPad.module.css";
import Tip from "./Tip";

const TipPad = () => {
  const tips: Array<"5%" | "10%" | "15%" | "25%" | "50%" | "Custom"> = [
    "5%",
    "10%",
    "15%",
    "25%",
    "50%",
    "Custom",
  ];

  return (
    <div className={tipPadStyles.tipPadDiv}>
      <div className={tipPadStyles.tipPadHeader}>Select Tip %</div>
      <div className={tipPadStyles.tipsContainer}>
        {tips.map((tip) => (
          <Tip key={tip} val={tip} />
        ))}
      </div>
    </div>
  );
};

export default TipPad;
