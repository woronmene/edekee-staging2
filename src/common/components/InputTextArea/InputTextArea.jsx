/* eslint-disable react/prop-types */
import styles from "./InputTextArea.module.scss";

// eslint-disable-next-line react/prop-types
function InputTextArea({
                           type, handleChange, readonly, register, required, field,
                           label,
                           name,
                           id,
                           value,
                           height,
                           form: {touched, errors},
                           ...props
                       }) {
                      
    return (
        <div>
      <textarea
          cols={100}
          rows={100}
          className={`${styles.inputTextArea}`}
          id={id}
          placeholder={label}
          // value={value}
          // onChange={(e) => handleChange(e)}
          // name={name}
          {...field}
          {...props}
          autoComplete="off"
          readOnly={readonly}
          style={{height: `${height}px`}}
      />
            {touched[field.name] && errors[field.name] && (
                <div className="error">
                    {errors[field.name]}
                </div>
            )}
        </div>
    );
}

InputTextArea.defaultProps = {
    height: 100,
};

export default InputTextArea;
