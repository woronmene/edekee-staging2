import styles from "./ActionButton.module.scss";

export default function ActionButton({ label, onDivClick }) {
  return (
    <div className={`${styles.actionButton} text3`} onClick={onDivClick}>
      <img src="/icon/open.svg" alt=" " />
      <p>{label}</p>
    </div>
  );
}