/* eslint-disable react/prop-types */
// import { useState } from "react";
import styles from "./InputText.module.scss";

// eslint-disable-next-line react/prop-types
function InputText({
  theme,
  type,
 
  readonly,

  field,
  label,
  id,
  value,
  form: { touched, errors },
  ...props
}) {
  return (
    <div className="" style={{ width: "100%", marginBottom: "40px" }}>
      <div className={`${styles.inputText} `}>
        <input
          id={id}
          // value={value}
          // onChange={(e) => handleChange(e)}
          // name={name}
          type={type}
          {...field}
          {...props}
          autoComplete="off"
          readOnly={readonly}
          className={`${theme === "dark" ? styles.dark : styles.light}`}
          // className={styles.dark}
        />
        <label className={`${value ? styles.active : ""}`} htmlFor={id}>
          {label}
        </label>
      </div>
      {touched[field.name] && errors[field.name] && (
        <div className="error">{errors[field.name]}</div>
      )}
      {/* <p>Error Message</p> */}
    </div>
  );
}

InputText.defaultProps = {
  readonly: false,
};

export default InputText;
