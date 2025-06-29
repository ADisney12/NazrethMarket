# Nazreth Market Website

A modern, responsive website for Nazreth Market - an Ethiopian grocery store serving the Seattle community with authentic Ethiopian ingredients and cuisine.

## Features

- **Responsive Design**: Optimized for both desktop and mobile devices
- **Modern UI**: Built with React and Material-UI components
- **Ethiopian Theme**: Cultural design elements and authentic branding
- **Interactive Sections**: 
  - Hero section with animated elements
  - About Us section
  - Fresh Ingredients showcase
  - Cuisine gallery with animations
  - Location information
  - Contact details

## Tech Stack

- **Frontend**: React 18
- **Styling**: Material-UI (MUI) with custom CSS
- **Build Tool**: Vite
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd NazrethMarket
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Deployment

### Vercel Deployment

This project is configured for easy deployment on Vercel:

1. **Connect to Vercel**:
   - Push your code to GitHub/GitLab/Bitbucket
   - Connect your repository to Vercel
   - Vercel will automatically detect the Vite configuration

2. **Automatic Deployment**:
   - Every push to the main branch triggers a new deployment
   - Preview deployments are created for pull requests

3. **Manual Deployment**:
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Deploy
   vercel
   ```

### Build Configuration

The project includes:
- `vercel.json` - Vercel-specific configuration
- Optimized build settings for Vite
- Proper routing for Single Page Application (SPA)
- Asset caching headers for better performance

## Project Structure

```
src/
├── App.jsx              # Main application component
├── App.css              # Global styles
├── DesktopView.jsx      # Desktop-specific layout
├── MobileView.jsx       # Mobile-specific layout
├── PageBar.jsx          # Navigation component
├── Photos/              # Image assets
└── main.jsx             # Application entry point
```

## Customization

### Colors
The project uses Ethiopian-themed colors:
- Primary Gold: `#F7B60B`
- Secondary Gold: `#FFD700`
- Ethiopian Flag Colors: `#009A49`, `#FEDD00`, `#EF3340`

### Fonts
- **Lobster**: Used for main headings
- **Satisfy**: Used for section titles
- **Caveat**: Used for body text

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is private and proprietary to Nazreth Market.

## Contact

For questions about this website, contact Nazreth Market:
- Phone: (206) 555-0123
- Email: info@nazarethmarket.com
