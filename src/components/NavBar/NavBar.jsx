import logo from "../../assets/images/logo.svg";
import Button from "../Button/Button";
import styles from "./NavBar.module.css";

const navLinks = [
  {
    name: "Home",
    href: "#",
  },
  {
    name: "About",
    href: "#",
  },
  {
    name: "Contact",
    href: "#",
  },
  {
    name: "Blog",
    href: "#",
  },
  {
    name: "Careers",
    href: "#",
  },
];

export default function ArticleSection() {
  return (
    <div className={styles.navContainer}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
      </div>

      <div className={styles.navLinkContainer}>
        {navLinks.map((link) => (
          <a
            href={`/link.href`}
            key={link.name}
            className={`${styles.navLink} flex`}
          >
            {link.name}
          </a>
        ))}
      </div>

      <Button>Request Invite</Button>
    </div>
  );
}
