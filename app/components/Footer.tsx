'use client'

import Link from 'next/link'
import { Github, Twitter, Linkedin, Mail } from 'lucide-react'
import styles from './Footer.module.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer-content}>
          <div className={styles.footer-section}>
            <h3 className={styles.footer-title}>DANDALI</h3>
            <p className={styles.footer-description}>
              Discover apps, manage device tools, and access mobile utilities from one clean interface.
            </p>
            <div className={styles.social-links}>
              <a href="#" aria-label="GitHub" className={styles.social-link}>
                <Github size={20} />
              </a>
              <a href="#" aria-label="Twitter" className={styles.social-link}>
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className={styles.social-link}>
                <Linkedin size={20} />
              </a>
              <a href="mailto:support@dandali.com" aria-label="Email" className={styles.social-link}>
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className={styles.footer-section}>
            <h4 className={styles.footer-section-title}>Quick Links</h4>
            <ul className={styles.footer-links}>
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

          <div className={styles.footer-section}>
            <h4 className={styles.footer-section-title}>Legal</h4>
            <ul className={styles.footer-links}>
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

          <div className={styles.footer-section}>
            <h4 className={styles.footer-section-title}>Newsletter</h4>
            <p className={styles.newsletter-text}>
              Get updates on new apps and tools
            </p>
            <form className={styles.newsletter-form}>
              <input
                type="email"
                placeholder="Your email"
                className={styles.newsletter-input}
                required
              />
              <button type="submit" className={styles.newsletter-button}>
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className={styles.footer-bottom}>
          <p>&copy; {currentYear} DANDALI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
