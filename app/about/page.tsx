import { Users, Target, Heart, Zap } from 'lucide-react'
import Link from 'next/link'
import styles from './about.module.css'

export default function AboutPage() {
  const values = [
    {
      icon: <Target size={40} />,
      title: 'User-Focused',
      description: 'Everything we build is designed with you in mind'
    },
    {
      icon: <Zap size={40} />,
      title: 'Performance',
      description: 'Fast, responsive, and optimized for your device'
    },
    {
      icon: <Heart size={40} />,
      title: 'Quality',
      description: 'We care deeply about every detail'
    },
    {
      icon: <Users size={40} />,
      title: 'Community',
      description: 'Built by and for our amazing users'
    },
  ]

  const team = [
    { name: 'Sarah Chen', role: 'Founder & CEO', emoji: '👩‍💼' },
    { name: 'Michael Rodriguez', role: 'Lead Developer', emoji: '👨‍💻' },
    { name: 'Emily Watson', role: 'Design Lead', emoji: '👩‍🎨' },
    { name: 'David Kim', role: 'Product Manager', emoji: '👨‍📊' },
  ]

  return (
    <div className={styles.aboutPage}>
      <div className={styles.header}>
        <div className="container">
          <h1 className={styles.title}>About DANDALI</h1>
          <p className={styles.subtitle}>
            Our mission is to simplify mobile app discovery and device management
          </p>
        </div>
      </div>

      <div className="container">
        <section className={styles.section}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>Our Story</h2>
            <p className={styles.paragraph}>
              DANDALI was born from a simple observation: managing mobile devices and discovering the right apps shouldn't be complicated. We noticed that users were spending too much time jumping between different platforms, tools, and stores to find what they needed.
            </p>
            <p className={styles.paragraph}>
              In 2020, our team came together with a vision to create a unified platform that brings together app discovery, device management tools, and useful utilities in one beautiful, intuitive interface. Today, millions of users trust DANDALI to help them get more from their devices.
            </p>
          </div>
        </section>

        <section className={styles.valuesSection}>
          <h2 className={styles.sectionTitle}>Our Values</h2>
          <div className={styles.valuesGrid}>
            {values.map((value, idx) => (
              <div key={idx} className={styles.valueCard}>
                <div className={styles.valueIcon}>
                  {value.icon}
                </div>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDescription}>{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>By The Numbers</h2>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>50M+</div>
              <div className={styles.statLabel}>Active Users</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>500K+</div>
              <div className={styles.statLabel}>Apps Listed</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>180+</div>
              <div className={styles.statLabel}>Countries</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>100+</div>
              <div className={styles.statLabel}>Device Tools</div>
            </div>
          </div>
        </section>

        <section className={styles.teamSection}>
          <h2 className={styles.sectionTitle}>Meet Our Team</h2>
          <p className={styles.teamDescription}>
            Behind DANDALI is a diverse team of passionate engineers, designers, and innovators dedicated to making mobile devices easier to use.
          </p>
          <div className={styles.teamGrid}>
            {team.map((member, idx) => (
              <div key={idx} className={styles.teamCard}>
                <div className={styles.teamAvatar}>{member.emoji}</div>
                <h3 className={styles.teamName}>{member.name}</h3>
                <p className={styles.teamRole}>{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>Ready to Explore?</h2>
          <p className={styles.ctaText}>
            Join millions of users who are already discovering amazing apps and managing their devices with DANDALI.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/apps" className={styles.primaryButton}>
              Browse Apps
            </Link>
            <Link href="/tools" className={styles.secondaryButton}>
              View Tools
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
