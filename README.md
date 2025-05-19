# VideosHub

A React-based web application for searching and watching YouTube videos, built with modern web technologies.

## Features

- Search videos by typing or voice input
- Auto-complete search suggestions
- View trending/popular videos
- Watch videos with embedded YouTube player
- View video descriptions and comments
- Responsive design for all devices

## Tech Stack

- **Frontend:** 
  - React 19
  - Redux Toolkit for state management
  - React Router for navigation
  - TailwindCSS for styling

- **APIs:**
  - YouTube Data API v3 for videos and comments
  - Google Suggest API (via proxy) for search suggestions

- **Build Tools:**
  - Vite for fast development and optimized builds
  - ESLint for code quality

## Project Structure

```
src
├── api                 # API calls and configuration
├── components          # Reusable components (e.g., Header, Footer, VideoCard)
├── features            # Redux slices for state management
├── pages                # Page components (e.g., Home, SearchResults, VideoPlayer)
├── styles              # Global styles and TailwindCSS configuration
├── utils               # Utility functions and constants
└── App.jsx             # Main app component
```

## Installation and Setup

1. Clone the repository: `git clone https://github.com/yourusername/VideosHub.git`
2. Navigate to the project directory: `cd VideosHub`
3. Install dependencies: `npm install`
4. Set up environment variables for API keys (refer to `.env.example`)
5. Start the development server: `npm run dev`

## Contributing

1. Fork the repository
2. Create a new branch: `git checkout -b feature/YourFeature`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/YourFeature`
5. Create a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

_This README was generated with ❤️ by [Amarnath-18](https://github.com/Amarnath-18)_

