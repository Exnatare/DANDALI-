# DANDALI

A modern web application for discovering apps, managing device tools, and accessing mobile utilities all in one beautiful interface.

## Features

- 🔍 **App Discovery** - Browse thousands of apps across multiple categories
- 🛠️ **Device Tools** - Manage system settings, battery, storage, and more
- ⚡ **Mobile Utilities** - Quick access to helpful tools and calculators
- 🎨 **Modern Design** - Clean, intuitive, and responsive interface
- 📱 **Mobile Optimized** - Works seamlessly on all devices

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: CSS Modules
- **Icons**: Lucide React
- **Package Manager**: npm

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
app/
├── components/
│   ├── Navbar.tsx
│   ├── Navbar.module.css
│   ├── Footer.tsx
│   └── Footer.module.css
├── apps/
│   ├── page.tsx
│   └── apps.module.css
├── tools/
│   ├── page.tsx
│   └── tools.module.css
├── utilities/
│   ├── page.tsx
│   └── utilities.module.css
├── about/
│   ├── page.tsx
│   └── about.module.css
├── layout.tsx
├── page.tsx
├── page.module.css
└── globals.css
```

## Pages

- **Home** (`/`) - Landing page with featured apps and overview
- **Apps** (`/apps`) - Browse and search apps by category
- **Tools** (`/tools`) - Device management and system tools
- **Utilities** (`/utilities`) - Quick utilities and helpful features
- **About** (`/about`) - Company information and team

## Features

### Apps Page
- Search functionality
- Category filtering
- App ratings and download counts
- Install buttons

### Tools Page
- Quick control toggles (WiFi, Bluetooth, etc.)
- Tool cards with descriptions
- Device information dashboard
- System status monitoring

### Utilities Page
- Featured utilities grid
- Category browsing
- Usage tips and tutorials

## Styling

The project uses CSS Modules for component-specific styling with a global color scheme:

- Primary Color: `#6366f1` (Indigo)
- Secondary Color: `#ec4899` (Pink)
- Success Color: `#10b981` (Green)
- Dark Color: `#1f2937` (Dark Gray)

## Customization

All styling can be modified in the CSS module files. The global variables in `globals.css` control the overall theme.

## License

MIT
