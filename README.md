# MoviesFlex

MoviesFlex is a responsive OTT clone webpage that simulates the style of an online streaming platform. It allows users to browse movies, view detailed data, and select movies from a grid layout. Please note that this is a **dummy application**—you cannot watch movies here. It is designed purely for showcasing the OTT-style user interface.

The project uses the TMDB API to fetch movie data and is built with React, React Router, Tailwind CSS, and plain CSS. The project also incorporates Embla Carousel for smooth scrolling through movie selections.

## Features

- Browse a wide range of movies in a grid format.
- View movie details such as title, release date, ratings, and overview.
- Select a movie to view more information.
- Responsive design that works on both desktop and mobile devices.
- **Note**: This is a dummy project and does not allow you to stream or watch movies.

## Tech Stack

- **Frontend**: React, React Router, Tailwind CSS, Plain CSS
- **API**: TMDB API
- **Carousel**: Embla Carousel

## Installation

To run the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/vishalpsj/MoviesFlex.git
   ```

2. Navigate into the project directory:

   ```bash
   cd MoviesFlex
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Get your TMDB API key by following these steps:
   - Go to [TMDB API](https://www.themoviedb.org/documentation/api) and sign up/log in.
   - Once logged in, go to the "API" section and generate your API key.

5. Create a `.env` file in the root directory of your project and add your TMDB API key like this:

   ```plaintext
   REACT_APP_TMDB_API_KEY=your_api_key_here
   ```

6. Start the development server:

   ```bash
   npm start
   ```

7. Your project should now be running at [http://localhost:3000](http://localhost:3000).

## Direct URL

- **https://moviesflex-vsp.netlify.app/**  


## Contributing

This project is not currently open for contributions.

## License

This project does not have a specific license.

## Acknowledgments

- [TMDB API](https://www.themoviedb.org/documentation/api) for providing the movie data.
- [Embla Carousel](https://www.embla-carousel.com/) for the carousel functionality.
