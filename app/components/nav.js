'use client';
import { useState } from 'react';
import styles from './Nav.module.css';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false); // tutup menu setelah klik
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}><span className={styles.nama}>Malvin</span> Pradhypta</div>
      <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
        <div className={menuOpen ? styles.bar1open : styles.bar1}></div>
        <div className={menuOpen ? styles.bar2open : styles.bar2}></div>
        <div className={menuOpen ? styles.bar3open : styles.bar3}></div>
      </div>

      <ul className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ''}`}>
        <li onClick={() => scrollToSection('home')}>Home</li>
        <li onClick={() => scrollToSection('about')}>About</li>
        <li onClick={() => scrollToSection('skills')}>Skills</li>
        <li onClick={() => scrollToSection('projects')}>projects</li>
      </ul>
    </nav>
  );
}
