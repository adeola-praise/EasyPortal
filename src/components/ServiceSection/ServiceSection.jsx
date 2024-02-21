import {
  IconOnline,
  IconOnboarding,
  IconBudgeting,
  IconApi,
} from "../../assets";
import Service from "../Service/Service";
import styles from "./ServiceSection.module.css";
/* eslint-disable react/prop-types */
const services = [
  {
    icon: IconOnline,
    title: "Online Banking",
    details:
      "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
  },
  {
    icon: IconBudgeting,
    title: "Simple Budgetting",
    details:
      "See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.",
  },
  {
    icon: IconOnboarding,
    title: "Fast Onboarding",
    details:
      "We don't do branches. Open your account in minutes online and start taking control of your finances right away.",
  },
  {
    icon: IconApi,
    title: "Open API",
    details:
      "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
  },
];

export default function ServiceSection() {
  return (
    <div className={styles.serviceSection}>
      <div className={styles.serviceHeading}>
        <h3>Why choose Easybank?</h3>
        <p>
          We leverage Open Banking to turn your bank account into your financial
          hub. <br></br> Control your finances like never before.
        </p>
      </div>

      <div className={styles.serviceContainer}>
        {services.map((item) => (
          <Service
            key={item.title}
            icon={item.icon}
            title={item.title}
            descr={item.details}
          ></Service>
        ))}
      </div>
    </div>
  );
}
