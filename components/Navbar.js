import { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navLinks = [
    { href: "/", label: "HOME", description: "Pure Light" },
    {
      href: "/sustainability",
      label: "SUSTAINABILITY",
      description: "Pure Commitment",
    },
    {
      href: "/our-responsibility",
      label: "OUR RESPONSIBILITY",
      description: "Pure Purpose",
    },
    {
      href: "/the-footprints",
      label: "THE FOOTPRINTS",
      description: "Pure Traceability",
    },
    { href: "/diamond", label: "DIAMOND", description: "Pure Art" },
    {
      href: "/craftsmanship",
      label: "CRAFTSMANSHIP",
      description: "Pure Science",
    },
    {
      href: "/srk-grading-system",
      label: "SRK GRADING SYSTEM (SGS)",
      description: "Pure Transparency",
    },
    { href: "/jewelry", label: "JEWELRY", description: "Pure Luxury" },
    { href: "/about-srk", label: "ABOUT SRK", description: "Pure Trust" },
    {
      href: "/facets-of-timeless-excellence",
      label: "FACETS OF TIMELESS EXCELLENCE",
      description: "Pure Impact Stories",
    },
    { href: "/career", label: "CAREER", description: "Pure Human Capital" },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={`${styles.bar} ${menuOpen ? styles.change : ""}`}></div>
        <div className={`${styles.bar} ${menuOpen ? styles.change : ""}`}></div>
        <div className={`${styles.bar} ${menuOpen ? styles.change : ""}`}></div>
      </div>
      <div className={styles.logo}>SRK</div>
      {menuOpen && (
        <nav
          className={`${styles.navMenu} ${menuOpen ? styles.navMenuOpen : ""}`}
        >
          {navLinks.map(({ href, label, description }) => (
            <div style={{ padding: "5px" }} key={href}>
              <Link href={href}>{label}</Link>
              {/* <p>{description}</p> */}
            </div>
          ))}
        </nav>
      )}
      <Link href="/login">
        <button className={styles.loginButton}>Login</button>
      </Link>
    </header>
  );
}
