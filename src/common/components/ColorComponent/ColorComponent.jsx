/* eslint-disable react/prop-types */
import { useState } from "react";
import InputSelect from "../InputSelect/InputSelect";
import styles from "../../../modules/CreateProductPage/CreateProduct/CreateProduct.module.scss";
import styles2 from "./ColorComponent.module.scss";
import { unitOptions } from "../../constants/options";

function ColorComponent({
  color,
  colorsArray,
  setColorsArray,
  logColorsArray,
}) {
  const [unit, setUnit] = useState("");

  const [sizes, setSizes] = useState([]);
  const [currentSize, setCurrentSize] = useState("");
  const [currentQuantity, setCurrentQuantity] = useState("");

  const addSize = () => {
    if (currentSize !== "" && currentQuantity !== "") {
      setSizes([...sizes, { size: currentSize, quantity: currentQuantity }]);

      setColorsArray([
        ...colorsArray,
        {
          name: color,
          properties: [
            ...sizes,
            { size: currentSize, quantity: currentQuantity },
          ],
        },
      ]);

      logColorsArray({
        name: color,

        properties: [
          ...sizes,
          { size: currentSize, quantity: currentQuantity },
        ],
      });

      setCurrentSize("");
      setCurrentQuantity("");
    }
  };

  const removeSize = (colorInd) => {
    const newSizes = sizes.filter((size, index) => index !== colorInd);
    setSizes(newSizes);

    setColorsArray([
      ...colorsArray,
      {
        name: color,
        properties: newSizes,
      },
    ]);

    logColorsArray({
      name: color,

      properties: newSizes,
    });
  };

  return (
    <div>
      {" "}
      <div className={styles.colorSection}>
        <p className={styles.colorHeading}>Color </p>

        <div className={styles.colorUnit}>
          <div>
            <div
              className={styles.color}
              style={{ backgroundColor: `${color}` }}
            ></div>
          </div>
          <div className={styles.selectInputContainer}>
            <InputSelect
              label="Unit"
              options={unitOptions}
              handleSelect={setUnit}
            />
          </div>
        </div>
      </div>
      <div className={styles.sizeQuantityHeading}>
        <div className={styles.colorHeadingContainer}>
          <p className={styles.colorHeading}>Size</p>
        </div>
        <div className={styles.colorHeadingContainer}>
          <p className={styles.colorHeading}>Quantity</p>
        </div>
      </div>
      {sizes.length !== 0 &&
        sizes.map((size, index) => (
          <div className={styles2.sizeQuantityValue} key={index}>
            <div className={styles2.sizeValueContainer}>
              <p>
                {size.size}
                {unit}
              </p>
            </div>
            <div className={styles2.quantityValueContainer}>
              <p>{size.quantity}</p>
            </div>

            <div
              className={styles2.cancel}
              onClick={() => {
                removeSize(index);
              }}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="11" cy="11" r="11" fill="#322F37" />
                <path
                  d="M9 9L13 13M13 9L9 13"
                  stroke="white"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        ))}
      <div className={styles.sizeQuantityInput}>
        <div className={styles.sizeInputContainer}>
          <input
            type="text"
            className={styles2.inputSize}
            placeholder="41UK"
            value={currentSize}
            onChange={(e) => {
              setCurrentSize(e.target.value);
            }}
          />
        </div>
        <div className={styles.quantityInputContainer}>
          <input
            type="text"
            className={styles2.inputSize}
            placeholder="0"
            value={currentQuantity}
            onChange={(e) => {
              setCurrentQuantity(e.target.value);
            }}
          />
        </div>
      </div>
      <div
        className={styles.addButton}
        onClick={() => {
          addSize();
        }}
      >
        <p>Add Size</p>
      </div>
      <div className={styles.mdContainer}>
        <div className={styles.horizontalRule}></div>
      </div>
      <div className={styles.productSection}>
        <div className={styles.mdContainer}></div>
      </div>
    </div>
  );
}

export default ColorComponent;
