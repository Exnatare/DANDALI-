'use client'

import { Calculator, Clock, Compass, Palette, Zap, Share2, QrCode, Smartphone } from 'lucide-react'
import styles from './utilities.module.css'

export default function UtilitiesPage() {
  const utilities = [
    {
      icon: <Calculator size={40} />,
      name: 'Calculator',
      description: 'Perform quick calculations with ease',
      badge: 'Essential'
    },
    {
      icon: <Clock size={40} />,
      name: 'Timer & Alarm',
      description: 'Set timers, alarms, and reminders',
      badge: 'Popular'
    },
    {
      icon: <Compass size={40} />,
      name: 'GPS & Maps',
      description: 'Navigate with built-in GPS and maps',
      badge: 'Essential'
    },
    {
      icon: <Palette size={40} />,
      name: 'Color Picker',
      description: 'Extract colors from images',
      badge: 'Creative'
    },
    {
      icon: <Zap size={40} />,
      name: 'Quick Actions',
      description: 'Fast shortcuts for common tasks',
      badge: 'Popular'
    },
    {
      icon: <Share2 size={40} />,
      name: 'File Share',
      description: 'Share files wirelessly with devices',
      badge: 'Utility'
    },
    {
      icon: <QrCode size={40} />,
      name: 'QR Scanner',
      description: 'Scan and generate QR codes',
      badge: 'Tech'
    },
    {
      icon: <Smartphone size={40} />,
      name: 'Screen Mirror',
      description: 'Mirror your screen to other devices',
      badge: 'Entertainment'
    },
  ]

  const categories = [
    { name: 'Essential', count: 12, color: 'color-blue' },
    { name: 'Popular', count: 24, color: 'color-green' },
    { name: 'Creative', count: 18, color: 'color-purple' },
    { name: 'Tech', count: 15, color: 'color-indigo' },
  ]

  return (
    <div className={styles.utilitiesPage}>
      <div className={styles.header}>
        <div className="container">
          <h1 className={styles.title}>Mobile Utilities</h1>
          <p className={styles.subtitle}>Handy tools and utilities to make your life easier</p>
        </div>
      </div>

      <div className="container">
        <div className={styles.categoriesSection}>
          <h2 className={styles.sectionTitle}>Browse by Category</h2>
          <div className={styles.categoriesGrid}>
            {categories.map((cat, idx) => (
              <div key={idx} className={`${styles.categoryCard} ${styles[cat.color]}`}>
                <div className={styles.categoryCount}>{cat.count}</div>
                <div className={styles.categoryName}>{cat.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.utilitiesSection}>
          <h2 className={styles.sectionTitle}>Featured Utilities</h2>
          <div className={styles.utilitiesGrid}>
            {utilities.map((util, idx) => (
              <div key={idx} className={styles.utilityCard}>
                <div className={styles.utilityIcon}>
                  {util.icon}
                </div>
                <h3 className={styles.utilityName}>{util.name}</h3>
                <p className={styles.utilityDescription}>{util.description}</p>
                <span className={styles.badge}>{util.badge}</span>
                <button className={styles.utilityButton}>
                  Use Now
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.tipsSection}>
          <h2 className={styles.sectionTitle}>Pro Tips</h2>
          <div className={styles.tipsGrid}>
            <div className={styles.tipCard}>
              <div className={styles.tipNumber}>1</div>
              <h3 className={styles.tipTitle}>Customize Your Tools</h3>
              <p className={styles.tipText}>
                Rearrange utilities on your home screen for quick access to your most-used tools.
              </p>
            </div>
            <div className={styles.tipCard}>
              <div className={styles.tipNumber}>2</div>
              <h3 className={styles.tipTitle}>Use Shortcuts</h3>
              <p className={styles.tipText}>
                Create custom shortcuts to combine multiple utilities into single-tap actions.
              </p>
            </div>
            <div className={styles.tipCard}>
              <div className={styles.tipNumber}>3</div>
              <h3 className={styles.tipTitle}>Share & Collaborate</h3>
              <p className={styles.tipText}>
                Use the file share utility to instantly share files with nearby devices.
              </p>
            </div>
            <div className={styles.tipCard}>
              <div className={styles.tipNumber}>4</div>
              <h3 className={styles.tipTitle}>Automation</h3>
              <p className={styles.tipText}>
                Set up automated tasks using quick actions and scheduling features.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
