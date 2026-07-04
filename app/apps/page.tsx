'use client'

import { useState } from 'react'
import { Search, Filter } from 'lucide-react'
import styles from './apps.module.css'

export default function AppsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const apps = [
    { id: 1, name: 'Photo Editor Pro', category: 'Photography', rating: 4.8, downloads: '1.2M', icon: '🖼️', description: 'Professional photo editing tools' },
    { id: 2, name: 'Music Stream', category: 'Music', rating: 4.7, downloads: '2.5M', icon: '🎵', description: 'Stream millions of songs' },
    { id: 3, name: 'Video Maker', category: 'Video', rating: 4.6, downloads: '980K', icon: '🎬', description: 'Create amazing videos' },
    { id: 4, name: 'Note Taking', category: 'Productivity', rating: 4.9, downloads: '3.1M', icon: '📝', description: 'Smart note-taking app' },
    { id: 5, name: 'Fitness Tracker', category: 'Health', rating: 4.5, downloads: '1.8M', icon: '💪', description: 'Track your fitness goals' },
    { id: 6, name: 'Weather Alert', category: 'Weather', rating: 4.6, downloads: '2.2M', icon: '⛅', description: 'Real-time weather updates' },
    { id: 7, name: 'Translation Hub', category: 'Productivity', rating: 4.4, downloads: '850K', icon: '🌍', description: 'Translate 50+ languages' },
    { id: 8, name: 'Podcast Player', category: 'Music', rating: 4.7, downloads: '1.5M', icon: '🎙️', description: 'Listen to your favorite podcasts' },
    { id: 9, name: 'Game Hub', category: 'Games', rating: 4.8, downloads: '5.2M', icon: '🎮', description: 'Play amazing games' },
    { id: 10, name: 'Banking App', category: 'Finance', rating: 4.9, downloads: '4.1M', icon: '🏦', description: 'Secure banking on the go' },
    { id: 11, name: 'Recipe Finder', category: 'Food', rating: 4.6, downloads: '1.1M', icon: '🍳', description: 'Discover new recipes' },
    { id: 12, name: 'Meditation Guide', category: 'Health', rating: 4.9, downloads: '2.8M', icon: '🧘', description: 'Daily meditation sessions' },
  ]

  const categories = ['all', 'Photography', 'Music', 'Video', 'Productivity', 'Health', 'Weather', 'Games', 'Finance', 'Food']

  const filteredApps = apps.filter(app => {
    const matchesSearch = app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || app.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className={styles.apps-page}>
      <div className={styles.header}>
        <div className="container">
          <h1 className={styles.title}>Discover Apps</h1>
          <p className={styles.subtitle}>Browse thousands of amazing apps for your mobile device</p>
        </div>
      </div>

      <div className="container">
        <div className={styles.filters-section}>
          <div className={styles.search-bar}>
            <Search size={20} className={styles.search-icon} />
            <input
              type="text"
              placeholder="Search apps..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.search-input}
            />
          </div>

          <div className={styles.category-filters}>
            <Filter size={20} className={styles.filter-icon} />
            <div className={styles.category-buttons}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`${styles.category-button} ${selectedCategory === cat ? styles.active : ''}`}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.results-info}>
          <p>Found <span className={styles.count}>{filteredApps.length}</span> apps</p>
        </div>

        {filteredApps.length > 0 ? (
          <div className={styles.apps-grid}>
            {filteredApps.map((app) => (
              <div key={app.id} className={styles.app-item}>
                <div className={styles.app-icon}>{app.icon}</div>
                <h3 className={styles.app-title}>{app.name}</h3>
                <p className={styles.app-description}>{app.description}</p>
                <div className={styles.app-meta}>
                  <div className={styles.rating}>
                    <span className={styles.star}>⭐</span>
                    <span className={styles.rating-text}>{app.rating}</span>
                  </div>
                  <span className={styles.downloads}>{app.downloads}</span>
                </div>
                <button className={styles.download-button}>
                  Install
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.empty-state}>
            <p className={styles.empty-message}>No apps found matching your search</p>
          </div>
        )}
      </div>
    </div>
  )
}
