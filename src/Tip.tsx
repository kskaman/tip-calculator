import tipStyles from "./styles/Tip.module.css";

interface Props {
  val: "5%" | "10%" | "15%" | "25%" | "50%" | "Custom";
}

const Tip = ({ val }: Props) => {
  return (
    <button
      className={`${tipStyles.tipDiv} ${
        val === "Custom" ? tipStyles.customTip : ""
      }`}
    >
      {val}
    </button>
  );
};

export default Tip;
