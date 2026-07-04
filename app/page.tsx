import { Star, Zap, Smartphone, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  const features = [
    {
      icon: <Smartphone className={styles.feature-icon} />,
      title: 'Discover Apps',
      description: 'Browse and find the best apps for your mobile device'
    },
    {
      icon: <Zap className={styles.feature-icon} />,
      title: 'Device Tools',
      description: 'Manage system settings and device utilities easily'
    },
    {
      icon: <Star className={styles.feature-icon} />,
      title: 'Useful Utilities',
      description: 'Access handy tools and utilities in one place'
    }
  ]

  const topApps = [
    { id: 1, name: 'Photo Editor Pro', category: 'Photography', rating: 4.8, icon: '🖼️' },
    { id: 2, name: 'Music Stream', category: 'Music', rating: 4.7, icon: '🎵' },
    { id: 3, name: 'Video Maker', category: 'Video', rating: 4.6, icon: '🎬' },
    { id: 4, name: 'Note Taking', category: 'Productivity', rating: 4.9, icon: '📝' },
    { id: 5, name: 'Fitness Tracker', category: 'Health', rating: 4.5, icon: '💪' },
    { id: 6, name: 'Weather Alert', category: 'Weather', rating: 4.6, icon: '⛅' },
  ]

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.hero-content}>
            <div className={styles.hero-text}>
              <h1 className={styles.hero-title}>
                Discover, Manage & Explore
                <span className={styles.highlight}> Your Mobile World</span>
              </h1>
              <p className={styles.hero-subtitle}>
                DANDALI brings together app discovery, device management tools, and mobile utilities in one beautiful, intuitive interface.
              </p>
              <div className={styles.hero-buttons}>
                <Link href="/apps" className={styles.primary-button}>
                  Explore Apps
                  <ArrowRight size={18} />
                </Link>
                <Link href="/about" className={styles.secondary-button}>
                  Learn More
                </Link>
              </div>
            </div>
            <div className={styles.hero-image}>
              <div className={styles.phone-mockup}>
                <div className={styles.phone-notch}></div>
                <div className={styles.phone-content}>
                  <div className={styles.app-icon}>📱</div>
                  <div className={styles.app-icon}>🎵</div>
                  <div className={styles.app-icon}>📸</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <div className="container">
          <h2 className={styles.section-title}>Why Choose DANDALI?</h2>
          <div className={styles.features-grid}>
            {features.map((feature, idx) => (
              <div key={idx} className={styles.feature-card}>
                <div className={styles.feature-icon-wrapper}>
                  {feature.icon}
                </div>
                <h3 className={styles.feature-title}>{feature.title}</h3>
                <p className={styles.feature-description}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.top-apps}>
        <div className="container">
          <div className={styles.section-header}>
            <div>
              <h2 className={styles.section-title}>Trending Apps</h2>
              <p className={styles.section-subtitle}>Check out the most popular apps right now</p>
            </div>
            <Link href="/apps" className={styles.view-all-link}>
              View All <ArrowRight size={16} />
            </Link>
          </div>
          <div className={styles.apps-grid}>
            {topApps.map((app) => (
              <div key={app.id} className={styles.app-card}>
                <div className={styles.app-icon-large}>{app.icon}</div>
                <h3 className={styles.app-name}>{app.name}</h3>
                <p className={styles.app-category}>{app.category}</p>
                <div className={styles.app-rating}>
                  <span className={styles.stars}>⭐</span>
                  <span className={styles.rating-value}>{app.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className="container">
          <div className={styles.cta-content}>
            <h2 className={styles.cta-title}>Ready to get started?</h2>
            <p className={styles.cta-subtitle}>Join thousands of users discovering their favorite apps and tools</p>
            <Link href="/apps" className={styles.primary-button}>
              Start Exploring Now
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
