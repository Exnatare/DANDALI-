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
        <div className={styles.nav-content}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logo-icon}>📱</span>
            <span className={styles.logo-text}>DANDALI</span>
          </Link>

          <button
            className={styles.menu-button}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className={`${styles.nav-links} ${isOpen ? styles.open : ''}`}>
            <Link href="/apps" className={styles.nav-link}>
              Apps
            </Link>
            <Link href="/tools" className={styles.nav-link}>
              Device Tools
            </Link>
            <Link href="/utilities" className={styles.nav-link}>
              Utilities
            </Link>
            <Link href="/about" className={styles.nav-link}>
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
