'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className={styles.navbar}>
      <div className="container">
        <div className={styles.navContent}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoIcon}>📱</span>
            <span className={styles.logoText}>DANDALI</span>
          </Link>

          <button
            className={styles.menuButton}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
            <Link href="/apps" className={styles.navLink}>
              Apps
            </Link>
            <Link href="/tools" className={styles.navLink}>
              Device Tools
            </Link>
            <Link href="/utilities" className={styles.navLink}>
              Utilities
            </Link>
            <Link href="/about" className={styles.navLink}>
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
