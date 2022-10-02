/* eslint-disable react/prop-types */

import styles from "./InputSize.module.scss";

function InputSize({ label }) {
  return (
    <div>
      <input type="text" className={styles.inputSize} placeholder={label} />
    </div>
  );
}

export default InputSize;
