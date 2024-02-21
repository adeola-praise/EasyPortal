/* eslint-disable react/prop-types */
import styles from "./Service.module.css";

export default function Service({ icon, title, descr }) {
  return (
    <div className={styles.service}>
      <img src={icon} alt={title}></img>
      <h4>{title}</h4>
      <p>{descr}</p>
    </div>
  );
}
