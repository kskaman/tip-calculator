import inputStyles from "./styles/InputStyles.module.css";

interface Props {
  tag: string;
  icon: string;
  mode: "numeric" | "decimal";
}
const Input = ({ tag, icon, mode }: Props) => {
  return (
    <div className={inputStyles.inputDiv}>
      <label className={inputStyles.inputLabel}>{tag}</label>
      <div className={inputStyles.inputWrapper}>
        <img className={inputStyles.inputIcon} src={icon} alt="Input Icon" />
        <input
          className={inputStyles.inputElement}
          placeholder="0"
          inputMode={mode}
        ></input>
      </div>
    </div>
  );
};

export default Input;
