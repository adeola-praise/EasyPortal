import FooterLogo from "../../assets/images/footerLogo.svg";
import Button from "../Button/Button";
import styles from "./Footer.module.css";
import { Facebook, Youtube, Twitter, Pinterest, Instagram } from "../../assets";

const socials = [
  {
    logo: Facebook,
    appName: "Facebook",
  },
  {
    logo: Youtube,
    appName: "Youtube",
  },
  {
    logo: Twitter,
    appName: "Twitter",
  },
  {
    logo: Pinterest,
    appName: "Pinterest",
  },
  {
    logo: Instagram,
    appName: "Instagram",
  },
];

const navLinks = [
  {
    name: "About Us",
    href: "#",
  },
  {
    name: "Careers",
    href: "#",
  },
  {
    name: "Contact",
    href: "#",
  },
  {
    name: "Support",
    href: "#",
  },
  {
    name: "Blog",
    href: "#",
  },
  {
    name: "Privacy Policy",
    href: "#",
  },
];

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.logoLinks}>
        <img src={FooterLogo} alt="logo"></img>
        <div className={styles.socials}>
          {socials.map((app) => (
            <img src={app.logo} key={app.appName}></img>
          ))}
        </div>
      </div>
      <div className={styles.footerLink}>
        {navLinks.map((link) => (
          <a href={link.href} key={link.name}>
            {link.name}
          </a>
        ))}
      </div>
      <div className={styles.copyRight}>
        <Button>Request Invite</Button>
        <p>@ Easybank.All Rights Reserved</p>
      </div>
    </div>
  );
}
