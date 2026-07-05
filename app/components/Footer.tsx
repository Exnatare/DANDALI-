'use client'

import Link from 'next/link'
import { Github, Twitter, Linkedin, Mail } from 'lucide-react'
import styles from './Footer.module.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>DANDALI</h3>
            <p className={styles.footerDescription}>
              Discover apps, manage device tools, and access mobile utilities from one clean interface.
            </p>
            <div className={styles.socialLinks}>
              <a href="#" aria-label="GitHub" className={styles.socialLink}>
                <Github size={20} />
              </a>
              <a href="#" aria-label="Twitter" className={styles.socialLink}>
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className={styles.socialLink}>
                <Linkedin size={20} />
              </a>
              <a href="mailto:support@dandali.com" aria-label="Email" className={styles.socialLink}>
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerSectionTitle}>Quick Links</h4>
            <ul className={styles.footerLinks}>
              <li>
                <Link href="/apps">Apps</Link>
              </li>
              <li>
                <Link href="/tools">Device Tools</Link>
              </li>
              <li>
                <Link href="/utilities">Utilities</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerSectionTitle}>Legal</h4>
            <ul className={styles.footerLinks}>
              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms">Terms of Service</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4 className={styles.footerSectionTitle}>Newsletter</h4>
            <p className={styles.newsletterText}>
              Get updates on new apps and tools
            </p>
            <form className={styles.newsletterForm}>
              <input
                type="email"
                placeholder="Your email"
                className={styles.newsletterInput}
                required
              />
              <button type="submit" className={styles.newsletterButton}>
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; {currentYear} DANDALI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
