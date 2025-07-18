# React Movie App 🎬

A modern, responsive movie discovery application built with React and Vite. Browse popular movies, search for specific titles, and manage your favorite movies list.

## Features

- 🎥 Browse popular movies
- 🔍 Search for movies by title
- ❤️ Add/remove movies to/from favorites
- 💾 Persistent favorites storage using localStorage
- 📱 Responsive design for all devices
- ⚡ Fast development with Vite and Hot Module Replacement (HMR)

## Tech Stack

- **Frontend:** React 19.1.0
- **Build Tool:** Vite 6.3.5
- **Routing:** React Router DOM 7.6.3
- **API:** The Movie Database (TMDB) API
- **Styling:** CSS Modules
- **Linting:** ESLint

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── MovieCard.jsx   # Individual movie display component
│   └── NavBar.jsx      # Navigation component
├── contexts/           # React Context providers
│   └── MovieContext.jsx # Favorites management context
├── css/               # Styling files
│   ├── App.css
│   ├── Favorities.css
│   ├── Home.css
│   ├── index.css
│   ├── MovieCard.css
│   └── Navbar.css
├── pages/             # Main page components
│   ├── Favorites.jsx  # Favorites page
│   └── Home.jsx       # Home page with search
├── services/          # API services
│   └── api.js         # TMDB API integration
├── App.jsx            # Main app component
└── main.jsx           # App entry point
```

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn
- TMDB API key

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd React-Movie-App
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   - Copy `.env.example` to `.env`:
     ```bash
     cp .env.example .env
     ```
   - Get your API key from [The Movie Database (TMDB)](https://www.themoviedb.org/settings/api)
   - Update `.env` with your API key:
     ```env
     VITE_TMDB_API_KEY=your_actual_api_key_here
     ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key_here
```

**Note:** The `.env` file is ignored by git for security. Never commit your actual API keys to version control.

## API Integration

This app uses [The Movie Database (TMDB) API](https://www.themoviedb.org/documentation/api) to fetch movie data:

- **Popular Movies:** Fetches trending and popular movies
- **Search Movies:** Allows users to search for specific movies by title

## Features in Detail

### Home Page
- Displays popular movies in a grid layout
- Real-time search functionality
- Loading states and error handling

### Favorites Page
- Shows user's favorite movies
- Persistent storage using localStorage
- Easy add/remove functionality

### Movie Cards
- Movie poster images
- Title and release year
- Favorite toggle button
- Responsive design

## Deployment

### Vercel Deployment

1. **Connect your GitHub repository to Vercel**
2. **Set environment variables in Vercel dashboard:**
   - Go to your project settings
   - Add `VITE_TMDB_API_KEY` with your API key
3. **Deploy:**
   ```bash
   npm run build
   ```

### Other Platforms

For other deployment platforms, ensure you:
1. Set the `VITE_TMDB_API_KEY` environment variable
2. Build the project with `npm run build`
3. Serve the `dist` folder

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- [The Movie Database (TMDB)](https://www.themoviedb.org/) for providing the movie data API
- [React](https://reactjs.org/) team for the amazing framework
- [Vite](https://vitejs.dev/) for the lightning-fast build tool
# React-movie
