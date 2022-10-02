;
import styles from "./SelectedImage.module.scss";

function SelectedImage({ imgUrl, imageIndex, removePhoto }) {
  return (
    <div
      className={styles.selectedImage}
      style={{ backgroundImage: `url(${imgUrl})` }}
    >
      <div
        className={styles.cancel}
        onClick={() => {
          removePhoto(imageIndex);
        }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="11" cy="11" r="11" fill="#322F37" />
          <path d="M9 9L13 13M13 9L9 13" stroke="white" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
}

export default SelectedImage;
