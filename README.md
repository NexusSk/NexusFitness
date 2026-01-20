# Nexus Fitness - Premium Gym Website

A modern, reactive website for Nexus Fitness, showcasing two premium gym locations in Bratislava with smooth animations, interactive maps, and a complete subscription system.

## Features

- 🗺️ **Interactive Map** - View both gym locations in Bratislava using Leaflet maps
- 💰 **Flexible Pricing** - Different pricing plans for each gym (Monthly, Yearly, One-Time Entry)
- 🏋️ **Gym Information** - Detailed equipment and amenities for each location
- 👤 **Account System** - Login and signup functionality with subscription selection
- 📖 **Our Story** - Engaging narrative about the gym's creation
- ✨ **Smooth Animations** - Beautiful transitions and reactive interactions
- 📱 **Fully Responsive** - Works perfectly on all devices

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Leaflet** - Interactive maps
- **React Leaflet** - React bindings for Leaflet

## Project Structure

```
src/
├── components/
│   ├── Navigation.jsx    # Top navigation bar
│   ├── Hero.jsx          # Hero section with motivational content
│   ├── GymMap.jsx        # Interactive map component
│   ├── GymInfo.jsx       # Gym details and amenities
│   ├── Pricing.jsx       # Pricing plans for both gyms
│   ├── About.jsx         # Story section
│   └── LoginModal.jsx    # Login/signup modal
├── App.jsx               # Main app component
├── main.jsx              # Entry point
└── index.css             # Global styles
```

## Gym Locations

1. **Nexus Fitness Center** (Large)
   - Location: Hlavná 15, Bratislava
   - Size: 3,500 sqm
   - Premium amenities including sauna, steam room, jacuzzi

2. **Nexus Fitness Express** (Medium)
   - Location: Námestie SNP 10, Bratislava
   - Size: 1,200 sqm
   - Essential amenities including sauna

## License

This project is created for demonstration purposes.

