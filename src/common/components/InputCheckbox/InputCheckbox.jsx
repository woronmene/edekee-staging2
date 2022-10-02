import PropTypes from "prop-types";
import styles from "./InputCheckbox.module.scss";

// eslint-disable-next-line react/prop-types
function InputCheckbox({ type, checked, name, value }) {
  return (
    <div
      className={`${styles.inputCheckbox} ${
        type === "square" ? styles.square : styles.circle
      }`}
    >
      <input
        name={name}
        value={value}
        checked={checked}
        // onChange={() => toggleCheck()}
        type="checkbox"
      />
      <span
        className={`${styles.checkMark} ${
          type === "square" ? styles.square : styles.circle
        }`}
      />
    </div>
  );
}

InputCheckbox.propsType = {
  checked: PropTypes.bool.isRequired,
  toggleCheck: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default InputCheckbox;
