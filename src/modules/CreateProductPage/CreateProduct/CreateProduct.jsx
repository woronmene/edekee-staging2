/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react";

import { HexColorPicker } from "react-colorful";

import SelectedImage from "../../../common/components/SelectedImage/SelectedImage";
import ShopButton from "../../../common/components/ShopButton/ShopButton";
import styles from "./CreateProduct.module.scss";

import ColorComponent from "../../../common/components/ColorComponent/ColorComponent";
import toast, { toastConfig } from "react-simple-toasts";

function CreateProduct({
  pictureFiles,
  setPictureFiles,
  videoFile,
  setVideoFile,
  setCurrentPage,
  setColors,
}) {
  const inputRef = useRef();
  const addPhotosRef = useRef();
  const videoInputRef = useRef();

  const [currentSelectedColor, setCurrentSelectedColor] = useState("");
  const [selectedColorsArray, setSelectedColorsArray] = useState([]);
  const [colorsArray, setColorsArray] = useState([]);
  const [currentColorsArray, setCurrentColorsArray] = useState([]);
  const [showColorpicker, setShowColorpicker] = useState(false);

  toastConfig({
    time: 6000,
  });

  useEffect(() => {
    setCurrentColorsArray(colorsArray);
  }, [colorsArray]);

  const handleChoose = () => {
    inputRef.current.click();
  };

  const handleChooseNew = () => {
    addPhotosRef.current.click();
  };
  const handleVideoChoose = () => {
    videoInputRef.current.click();
  };
  const handleColorChoose = () => {
    setShowColorpicker(!showColorpicker);
  };

  const handleFileChange = (event) => {
    const { files } = event.target;
    setPictureFiles([...files]);
  };
  const handleNewFileChange = (event) => {
    const { files } = event.target;
    setPictureFiles([...pictureFiles, ...files]);
  };

  const handleVideoFileChange = (event) => {
    //  const { files } = event.target;
    const file = event.target.files[0];
    setVideoFile(file);
  };
  const removePhoto = (selectedIndex) => {
    const newPictures = pictureFiles.filter(
      (image, index) => index !== selectedIndex
    );
    setPictureFiles(newPictures);
  };

  const onInputKeyUp = (colorValue) => {
    setCurrentSelectedColor(colorValue);
  };

  const addColor = () => {
    if (currentSelectedColor !== "") {
      setSelectedColorsArray([...selectedColorsArray, currentSelectedColor]);
      setShowColorpicker(false);
      setCurrentSelectedColor("");
    }
  };

  const logColorsArray = (val) => {
    const newArr = colorsArray.filter((item) => {
      return item.name !== val.name;
    });

    setColorsArray([...newArr, val]);
  };

  return (
    <div className={styles.createProduct}>
      <div className={styles.mdContainer}>
        <div className={styles.mainHeading}>
          <p className={styles.heading}>Create a Product.</p>
        </div>
      </div>
      <div className={styles.uploadPhotosSection}>
        <div className={styles.mdContainer}>
          <div className={styles.uploadPhotosText}>
            <p className={styles.uploadPhotosHeading}>
              Upload at least 4 photos.
            </p>

            <p className={styles.uploadPhotosInfo}>
              Upload at least 4 photos of your product from all sides.
            </p>
          </div>
        </div>

        {pictureFiles.length === 0 ? (
          <>
            <div className={styles.mdContainer}>
              <div className={styles.upload}>
                <input
                  ref={inputRef}
                  className={styles.selectInput}
                  accept=".jpg, .jpeg, .png, .svg"
                  type="file"
                  multiple
                  onChange={(e) => {
                    handleFileChange(e);
                  }}
                />
                <svg
                  width="88"
                  height="82"
                  viewBox="0 0 88 82"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1"
                    y="1"
                    width="80"
                    height="80"
                    rx="40"
                    fill="white"
                    stroke="#212121"
                    strokeOpacity="0.6"
                    strokeWidth="0.930556"
                    strokeDasharray="3.1 3.1"
                  />
                  <rect
                    x="62.2002"
                    y="55.3999"
                    width="25.8"
                    height="25.8"
                    rx="12.9"
                    fill="#A271FF"
                  />
                  <path
                    d="M75.5015 63.7847V73.4597M80.2609 68.5388H70.5859"
                    stroke="white"
                    strokeOpacity="0.8"
                    strokeWidth="1.6125"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <ShopButton
                  size="small"
                  label="Select Photos"
                  handleClick={() => {
                    handleChoose();
                  }}
                />
              </div>
            </div>
          </>
        ) : (
          <div className={styles.mdContainer}>
            <input
              ref={addPhotosRef}
              className={styles.selectInput}
              accept=".jpg, .jpeg, .png, .svg"
              type="file"
              multiple
              onChange={(e) => {
                handleNewFileChange(e);
              }}
            />
            <div className={styles.selectedImagesSection}>
              {pictureFiles &&
                pictureFiles.map((image, index) => (
                  <SelectedImage
                    key={image}
                    imgUrl={URL.createObjectURL(image)}
                    imageIndex={index}
                    removePhoto={removePhoto}
                  />
                ))}
            </div>
            <div className={styles.addPhotosButton}>
              <ShopButton
                size="small"
                label="Add Photos"
                handleClick={() => {
                  handleChooseNew();
                }}
              />
            </div>
          </div>
        )}
      </div>
      <div className={styles.mdContainer}>
        <div className={styles.horizontalRule}></div>
      </div>
      <div className={styles.mdContainer}>
        <div className={styles.uploadVideoSection}>
          {!videoFile ? (
            <>
              {" "}
              <div className={styles.uploadPhotosText}>
                <p className={styles.uploadPhotosHeading}>
                  Upload a 360 video.
                </p>

                <p className={styles.uploadPhotosInfo}>
                  Make a 360 video of your product and upload.
                </p>
              </div>
              <div className={styles.upload}>
                <input
                  ref={videoInputRef}
                  className={styles.selectInput}
                  accept="video/mp4,video/x-m4v,video/*"
                  type="file"
                  onChange={(e) => {
                    handleVideoFileChange(e);
                  }}
                />
                <svg
                  width="77"
                  height="53"
                  viewBox="0 0 77 53"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="14.8652"
                    y="2.41309"
                    width="48.0817"
                    height="47.9699"
                    fill="#C7C0D0"
                  />
                  <path
                    d="M60.5688 0H16.4097C12.7948 0 9.86426 2.9305 9.86426 6.54546V45.5C9.86426 49.115 12.7948 52.0455 16.4097 52.0455H60.5688C64.1838 52.0455 67.1143 49.115 67.1143 45.5V6.54545C67.1143 2.9305 64.1838 0 60.5688 0Z"
                    fill="#322F37"
                  />
                  <path
                    d="M32.3564 32.7655L32.3596 19.8867C32.3598 19.595 32.4375 19.3088 32.5846 19.0586C32.7316 18.8084 32.9425 18.6035 33.1947 18.4658C33.4469 18.3282 33.7311 18.2628 34.0168 18.2767C34.3026 18.2907 34.5793 18.3834 34.8175 18.545L44.298 24.986C44.5146 25.1333 44.6922 25.3328 44.815 25.5669C44.9379 25.8009 45.0022 26.0623 45.0022 26.3277C45.0022 26.5932 44.9379 26.8546 44.815 27.0886C44.6922 27.3227 44.5146 27.5222 44.298 27.6695L34.8143 34.1073C34.5762 34.2689 34.2995 34.3616 34.0137 34.3755C33.7279 34.3895 33.4438 34.3241 33.1916 34.1864C32.9393 34.0487 32.7285 33.8439 32.5814 33.5937C32.4343 33.3434 32.3566 33.0572 32.3564 32.7655Z"
                    fill="#C7C0D0"
                  />
                  <path
                    d="M69.6093 23.897C74.6701 26.1462 75.9353 30.0692 74.881 31.9802C73.0066 35.3774 63.1492 41.4691 38.6824 41.4691C9.51236 41.4691 0.0239231 32.683 1.078 28.4657C1.39542 27.1957 2.97579 25.0216 7.75541 23.897"
                    stroke="#C7C0D0"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M68.0016 24.0085C67.7251 23.7407 67.8421 23.2741 68.2122 23.1684L70.5295 22.5072C70.8997 22.4016 71.2453 22.7363 71.1517 23.1096L70.5657 25.4471C70.4721 25.8205 70.0094 25.9525 69.7329 25.6847L68.0016 24.0085Z"
                    fill="#C7C0D0"
                  />
                </svg>

                <ShopButton
                  size="small"
                  label="Select Video"
                  handleClick={() => {
                    handleVideoChoose();
                  }}
                />
              </div>
            </>
          ) : (
            <div className={styles.selectedVideoContainer}>
              <input
                ref={videoInputRef}
                className={styles.selectInput}
                accept="video/mp4,video/x-m4v,video/*"
                type="file"
                onChange={(e) => {
                  handleVideoFileChange(e);
                }}
              />
              <div className={styles.selectedVideo}>
                <div className={styles.playIcon}>
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="11" cy="11" r="10.5" stroke="white" />
                    <path
                      d="M8.9834 14.336V7.69995L14.8501 11.3546L8.9834 14.336Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <video src={URL.createObjectURL(videoFile)}></video>
              </div>
              <ShopButton
                size="small"
                label="Replace Video"
                handleClick={() => {
                  handleVideoChoose();
                }}
              />
            </div>
          )}
        </div>
      </div>
      <div className={styles.mdContainer}>
        <div className={styles.horizontalRule}></div>
      </div>

      <div className={styles.productSection}>
        <div className={styles.mdContainer}>
          <div className={styles.uploadPhotosText}>
            <p className={styles.uploadPhotosHeading}>Product Specs.</p>

            <p className={styles.uploadPhotosInfo}>
              Specify the product colors available, their sizes and quantity.
            </p>
          </div>

          {selectedColorsArray.length !== 0 &&
            selectedColorsArray.map((selectedColor, index) => (
              <ColorComponent
                key={index}
                color={selectedColor}
                colorsArray={colorsArray}
                setColorsArray={setColorsArray}
                logColorsArray={logColorsArray}
              />
            ))}

          <div className={styles.colorPickerSection}>
            {showColorpicker && (
              <div className={styles.hexColorpicker}>
                <HexColorPicker onChange={onInputKeyUp} />
              </div>
            )}
            <div
              className={styles.colorPicker}
              onClick={() => {
                handleColorChoose();
              }}
            ></div>
            <div
              className={styles.addButton}
              onClick={() => {
                addColor();
              }}
            >
              <p>Add Color</p>
            </div>
          </div>

          <div className={styles.buttonSection}>
            <ShopButton
              size="large"
              label="Create Product"
              handleClick={() => {
                if (pictureFiles.length < 4) {
                  toast("select at least 4 photos");
                  return;
                }
                if (videoFile === null) {
                  toast("select a video");
                  return;
                }

                setColors(currentColorsArray);
                setCurrentPage(2);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateProduct;
