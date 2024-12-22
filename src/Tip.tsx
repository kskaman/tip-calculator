import tipStyles from "./styles/Tip.module.css";

interface Props {
  val: "5%" | "10%" | "15%" | "25%" | "50%" | "Custom";
  selected: boolean;
  onSelect: (val: "5%" | "10%" | "15%" | "25%" | "50%" | "Custom") => void;
}

const Tip = ({ val, selected, onSelect }: Props) => {
  return (
    <button
      className={`${tipStyles.tipDiv} ${
        val === "Custom" ? tipStyles.customTip : ""
      } ${selected === true ? tipStyles.selected : ""}`}
      onClick={() => onSelect(val)}
      aria-label={`Select tip : ${val}`}
    >
      {val}
    </button>
  );
};

export default Tip;
