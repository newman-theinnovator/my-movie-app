import React, { useEffect, useState } from 'react';
import axios from '../apiConfig'; // Import your Axios configuration

function MovieSearch() {
  const [movies, setMovies] = useState([]); // State to store fetched movies

  useEffect(() => {
    // Function to fetch top-rated movies
    const fetchTopRatedMovies = async () => {
      try {
        const response = await axios.get('/movie/top_rated');
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching top-rated movies:', error);
      }
    };

    // Call the fetch function when the component mounts
    fetchTopRatedMovies();
  }, []);

  return (
    <div>
      <h2>Top Rated Movies</h2>
      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieSearch;
