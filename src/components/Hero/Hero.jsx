import Button from "../Button/Button";
import styles from "./Hero.module.css";
import bg_intro_desktop from "../../assets/images/bg-intro-desktop.svg";
import mockups from "../../assets/images/image-mockups.png";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.headline}>
        <h2>Next generation digital banking</h2>
        <p>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <Button>Request Invite</Button>
      </div>
      <div className={styles["bg_images"]}>
        <div className={styles.imgDiv}>
          <img src={bg_intro_desktop} className={styles.bg_intro} alt="" />
        </div>
        <img src={mockups} className={styles.mockup} alt="" />
      </div>
    </div>
  );
}
