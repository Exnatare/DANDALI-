'use client'

import { useState } from 'react'
import { Battery, Wifi, HardDrive, Settings, Volume2, Sun, Download, Trash2, Lock, Power } from 'lucide-react'
import styles from './tools.module.css'

export default function ToolsPage() {
  const [toggles, setToggles] = useState({
    wifi: true,
    bluetooth: false,
    darkMode: false,
    airplane: false,
  })

  const tools = [
    {
      icon: <Battery size={32} />,
      name: 'Battery Saver',
      description: 'Optimize battery usage and extend battery life',
      color: 'color-green'
    },
    {
      icon: <Wifi size={32} />,
      name: 'Network Manager',
      description: 'Manage WiFi and mobile data connections',
      color: 'color-blue'
    },
    {
      icon: <HardDrive size={32} />,
      name: 'Storage Cleaner',
      description: 'Clean up unused files and free up space',
      color: 'color-purple'
    },
    {
      icon: <Settings size={32} />,
      name: 'System Settings',
      description: 'Access and customize device settings',
      color: 'color-orange'
    },
    {
      icon: <Volume2 size={32} />,
      name: 'Sound Manager',
      description: 'Control volume and sound settings',
      color: 'color-pink'
    },
    {
      icon: <Sun size={32} />,
      name: 'Display Control',
      description: 'Adjust brightness and display settings',
      color: 'color-yellow'
    },
    {
      icon: <Download size={32} />,
      name: 'Download Manager',
      description: 'Manage downloads and transfer files',
      color: 'color-indigo'
    },
    {
      icon: <Trash2 size={32} />,
      name: 'Cache Cleaner',
      description: 'Remove app cache and temporary files',
      color: 'color-red'
    },
    {
      icon: <Lock size={32} />,
      name: 'Security Center',
      description: 'Enhance device security and privacy',
      color: 'color-teal'
    },
    {
      icon: <Power size={32} />,
      name: 'Power Control',
      description: 'Restart, shutdown, or reboot device',
      color: 'color-cyan'
    },
  ]

  const toggleTool = (tool: keyof typeof toggles) => {
    setToggles(prev => ({
      ...prev,
      [tool]: !prev[tool]
    }))
  }

  return (
    <div className={styles.toolsPage}>
      <div className={styles.header}>
        <div className="container">
          <h1 className={styles.title}>Device Tools</h1>
          <p className={styles.subtitle}>Manage and optimize your device settings and performance</p>
        </div>
      </div>

      <div className="container">
        <div className={styles.quickToggles}>
          <h2 className={styles.sectionTitle}>Quick Controls</h2>
          <div className={styles.togglesGrid}>
            <div className={styles.toggleItem}>
              <div className={styles.toggleLabel}>WiFi</div>
              <button
                className={`${styles.toggleSwitch} ${toggles.wifi ? styles.on : ''}`}
                onClick={() => toggleTool('wifi')}
              >
                <span className={styles.toggleCircle}></span>
              </button>
            </div>
            <div className={styles.toggleItem}>
              <div className={styles.toggleLabel}>Bluetooth</div>
              <button
                className={`${styles.toggleSwitch} ${toggles.bluetooth ? styles.on : ''}`}
                onClick={() => toggleTool('bluetooth')}
              >
                <span className={styles.toggleCircle}></span>
              </button>
            </div>
            <div className={styles.toggleItem}>
              <div className={styles.toggleLabel}>Dark Mode</div>
              <button
                className={`${styles.toggleSwitch} ${toggles.darkMode ? styles.on : ''}`}
                onClick={() => toggleTool('darkMode')}
              >
                <span className={styles.toggleCircle}></span>
              </button>
            </div>
            <div className={styles.toggleItem}>
              <div className={styles.toggleLabel}>Airplane Mode</div>
              <button
                className={`${styles.toggleSwitch} ${toggles.airplane ? styles.on : ''}`}
                onClick={() => toggleTool('airplane')}
              >
                <span className={styles.toggleCircle}></span>
              </button>
            </div>
          </div>
        </div>

        <div className={styles.toolsSection}>
          <h2 className={styles.sectionTitle}>All Tools</h2>
          <div className={styles.toolsGrid}>
            {tools.map((tool, idx) => (
              <div key={idx} className={`${styles.toolCard} ${styles[tool.color]}`}>
                <div className={styles.toolIcon}>
                  {tool.icon}
                </div>
                <h3 className={styles.toolName}>{tool.name}</h3>
                <p className={styles.toolDescription}>{tool.description}</p>
                <button className={styles.toolButton}>
                  Open Tool
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.infoSection}>
          <h2 className={styles.sectionTitle}>Device Information</h2>
          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <div className={styles.infoLabel}>Storage Used</div>
              <div className={styles.infoValue}>45.2 GB</div>
              <div className={styles.infoBar}>
                <div className={styles.infoProgress} style={{ width: '45%' }}></div>
              </div>
              <div className={styles.infoDetail}>45.2 GB of 128 GB</div>
            </div>
            <div className={styles.infoCard}>
              <div className={styles.infoLabel}>Battery Level</div>
              <div className={styles.infoValue}>87%</div>
              <div className={styles.infoBar}>
                <div className={styles.infoProgress} style={{ width: '87%' }}></div>
              </div>
              <div className={styles.infoDetail}>Good battery health</div>
            </div>
            <div className={styles.infoCard}>
              <div className={styles.infoLabel}>RAM Usage</div>
              <div className={styles.infoValue}>6.1 GB</div>
              <div className={styles.infoBar}>
                <div className={styles.infoProgress} style={{ width: '61%' }}></div>
              </div>
              <div className={styles.infoDetail}>6.1 GB of 10 GB</div>
            </div>
            <div className={styles.infoCard}>
              <div className={styles.infoLabel}>Temperature</div>
              <div className={styles.infoValue}>36°C</div>
              <div className={styles.infoBar}>
                <div className={styles.infoProgress} style={{ width: '36%' }}></div>
              </div>
              <div className={styles.infoDetail}>Normal operating temp</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
