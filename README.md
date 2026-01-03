# SB Vision - Phone Store Website

A modern, responsive website for SB Vision (Suraj Electronics Nepal) - your trusted destination for latest smartphones and premium phone accessories in Kathmandu, Nepal.

## Features

- 🛍️ Product showcase with filtering and search
- 📱 Responsive design for all devices
- 🎨 Modern UI with smooth animations
- 🔍 SEO optimized for local search
- 📍 Location-based content (Kathmandu, Nepal)
- 🌐 Social media integration

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Wouter** - Routing
- **Zustand** - State management
- **React Query** - Data fetching
- **Radix UI** - Accessible components

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment on Vercel

This project is configured for Vercel deployment:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will automatically detect the Vite configuration
4. Deploy!

The `vercel.json` file is already configured with:
- Build command: `npm run build` (runs from client directory)
- Output directory: `dist`
- Framework: Vite
- SPA routing support

**Note**: The build runs from the `client` directory, so make sure your Vercel project root is set to the repository root (not the client folder).

## Project Structure

```
client/
├── public/          # Static assets
├── src/
│   ├── components/  # React components
│   ├── hooks/       # Custom hooks
│   ├── pages/       # Page components
│   ├── data/        # Mock data
│   └── lib/         # Utilities
```

## Contact Information

- **Location**: Khahare Khola, Kathmandu 44600, Nepal
- **Phone**: 9841759119, 01-4535346
- **Facebook**: [Suraj Electronics Nepal](https://www.facebook.com/SurajElectronicsNepal)
- **Instagram**: [@gogripp](https://www.instagram.com/reel/DSZuqPaj5XU/)

## License

MIT

