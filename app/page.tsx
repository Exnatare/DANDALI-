import { Star, Zap, Smartphone, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  const features = [
    {
      icon: <Smartphone className={styles.featureIcon} />,
      title: 'Discover Apps',
      description: 'Browse and find the best apps for your mobile device'
    },
    {
      icon: <Zap className={styles.featureIcon} />,
      title: 'Device Tools',
      description: 'Manage system settings and device utilities easily'
    },
    {
      icon: <Star className={styles.featureIcon} />,
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
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>
                Discover, Manage & Explore
                <span className={styles.highlight}> Your Mobile World</span>
              </h1>
              <p className={styles.heroSubtitle}>
                DANDALI brings together app discovery, device management tools, and mobile utilities in one beautiful, intuitive interface.
              </p>
              <div className={styles.heroButtons}>
                <Link href="/apps" className={styles.primaryButton}>
                  Explore Apps
                  <ArrowRight size={18} />
                </Link>
                <Link href="/about" className={styles.secondaryButton}>
                  Learn More
                </Link>
              </div>
            </div>
            <div className={styles.heroImage}>
              <div className={styles.phoneMockup}>
                <div className={styles.phoneNotch}></div>
                <div className={styles.phoneContent}>
                  <div className={styles.appIcon}>📱</div>
                  <div className={styles.appIcon}>🎵</div>
                  <div className={styles.appIcon}>📸</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Why Choose DANDALI?</h2>
          <div className={styles.featuresGrid}>
            {features.map((feature, idx) => (
              <div key={idx} className={styles.featureCard}>
                <div className={styles.featureIconWrapper}>
                  {feature.icon}
                </div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.topApps}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div>
              <h2 className={styles.sectionTitle}>Trending Apps</h2>
              <p className={styles.sectionSubtitle}>Check out the most popular apps right now</p>
            </div>
            <Link href="/apps" className={styles.viewAllLink}>
              View All <ArrowRight size={16} />
            </Link>
          </div>
          <div className={styles.appsGrid}>
            {topApps.map((app) => (
              <div key={app.id} className={styles.appCard}>
                <div className={styles.appIconLarge}>{app.icon}</div>
                <h3 className={styles.appName}>{app.name}</h3>
                <p className={styles.appCategory}>{app.category}</p>
                <div className={styles.appRating}>
                  <span className={styles.stars}>⭐</span>
                  <span className={styles.ratingValue}>{app.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to get started?</h2>
            <p className={styles.ctaSubtitle}>Join thousands of users discovering their favorite apps and tools</p>
            <Link href="/apps" className={styles.primaryButton}>
              Start Exploring Now
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
