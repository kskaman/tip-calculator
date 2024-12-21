import inputStyles from "./styles/Input.module.css";

interface Props {
  tag: string;
  icon: string;
  mode: "numeric" | "decimal";
}
const Input = ({ tag, icon, mode }: Props) => {
  // const [value, setValue] = useState("");

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const inputValue = event.target.value;

  //   // Allow only positive integers
  //   if (/^[0-9]*$/.test(inputValue)) {
  //     setValue(inputValue); // Update state only for valid input
  //   }
  // };

  // const [value, setValue] = useState("");

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const inputValue = event.target.value;

  //   // Allow only numbers and decimals
  //   if (/^\d*\.?\d*$/.test(inputValue)) {
  //     setValue(inputValue); // Update state only for valid input
  //   }
  // };

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
