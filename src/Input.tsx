import inputStyles from "./styles/Input.module.css";

interface Props {
  tag: string;
  icon: string;
  value: string;
  mode: "numeric" | "decimal";
  setValue: (value: string) => void;
  warning?: boolean;
}

const Input = ({
  tag,
  icon,
  mode,
  value,
  setValue,
  warning = false,
}: Props) => {
  // Handler for keydown events to prevent invalid key presses
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = event;

    // Allow: Backspace, Delete, Tab, Escape, Enter, Arrow keys, etc.
    if (
      key === "Backspace" ||
      key === "Delete" ||
      key === "Tab" ||
      key === "Escape" ||
      key === "Enter" ||
      key === "ArrowLeft" ||
      key === "ArrowRight" ||
      key === "Home" ||
      key === "End"
    ) {
      return;
    }

    if (mode === "numeric") {
      if (!/^[0-9]$/.test(key)) {
        event.preventDefault();
      }
    } else if (mode === "decimal") {
      if (!/^[0-9.]$/.test(key)) {
        event.preventDefault();
      }

      // Prevent more than one decimal point
      if (key === "." && value.includes(".")) {
        event.preventDefault();
      }

      // Prevent more than two decimal places
      const decimalIndex = value !== null ? value.indexOf(".") : -1;
      if (decimalIndex !== -1 && value.length - decimalIndex > 2) {
        event.preventDefault();
      }
    }
  };

  // Handler for change events to manage input value
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    if (mode === "numeric") {
      // Allow only positive integers
      if (/^[0-9]*$/.test(inputValue)) {
        setValue(inputValue);
      }
    } else if (mode === "decimal") {
      // Allow numbers with up to two decimal places
      if (/^\d*\.?\d{0,2}$/.test(inputValue)) {
        setValue(inputValue);
      }
    }
  };

  return (
    <div
      className={`${inputStyles.inputDiv} ${
        tag === "custom" ? inputStyles.customTip : ""
      }`}
    >
      {tag !== "custom" && (
        <label className={inputStyles.inputLabel}>
          <span>{tag}</span>
          {warning && (
            <span className={inputStyles.warningTag}>Can't be zero</span>
          )}
        </label>
      )}
      <div className={inputStyles.inputWrapper}>
        <img className={inputStyles.inputIcon} src={icon} alt="Input Icon" />
        <input
          className={`${inputStyles.inputElement} ${
            warning ? inputStyles.warningInput : ""
          }`}
          placeholder="0"
          inputMode={mode === "numeric" ? "numeric" : "decimal"}
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
};

export default Input;
