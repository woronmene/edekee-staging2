/* eslint-disable react/prop-types */
import{ useState } from "react";
import styles from "./InputSelect.module.scss";

function InputSelect({ label, options, handleSelect }) {
  const [showOptions, setShowOptions] = useState(false);
  const [currentValue, setCurrentValue] = useState(label);
  return (
    <div className={styles.inputSelect}>
      <div
        className={styles.selectedValue}
        onClick={() => {
          setShowOptions(!showOptions);
        }}
      >
        <p className={styles.defaultText}>{currentValue}</p>
        <svg
          width="13"
          height="7"
          viewBox="0 0 13 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L4.98818 4.86355C5.8381 5.68691 7.19468 5.66503 8.0176 4.81467L11.7092 1"
            stroke="#181614"
            strokeWidth="1.6582"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div
        className={`${styles.optionsSection} ${showOptions && styles.active}`}
      >
        {options.map((option) => (
          <div
            className={styles.option}
            onClick={() => {
              setCurrentValue(option.name);
              handleSelect(option.id);
              setShowOptions(false);
            }}
            key={option.id}
          >
            {/* <div className={styles.img}></div> */}
            <p>{option.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InputSelect;
