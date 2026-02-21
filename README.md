# Diana Marcus - Portfolio

A modern, responsive portfolio website built with React and Vite, showcasing my work experience, education, projects, and skills.

## Features

- 🎨 Modern, clean UI design
- 📱 Fully responsive layout
- ⚡ Fast performance with Vite
- 🚀 Ready for Vercel deployment
- ♿ Accessible and SEO-friendly

## Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with custom properties
- **HTML5** - Semantic markup

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
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

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

## Deployment to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com) and sign in
3. Click "New Project" and import your repository
4. Vercel will automatically detect the Vite configuration
5. Click "Deploy"

The `vercel.json` file is already configured for optimal Vercel deployment.

## Project Structure

```
portfolio/
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── WorkExperience.jsx
│   │   ├── Education.jsx
│   │   ├── Projects.jsx
│   │   ├── Volunteer.jsx
│   │   ├── Skills.jsx
│   │   └── Contact.jsx
│   ├── App.jsx          # Main app component
│   ├── App.css
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html
├── package.json
├── vite.config.js
└── vercel.json
```

## Customization

To update your information:

1. Edit the component files in `src/components/` to update your content
2. Modify `src/index.css` to change color scheme and styling
3. Update social media links in `Hero.jsx` and `Contact.jsx`

## License

This project is open source and available under the MIT License.
