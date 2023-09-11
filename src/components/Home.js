import React, { useEffect, useState } from 'react';
import axios from '../apiConfig'; // Import your Axios configuration

function Home() {
  const [featuredMovies, setFeaturedMovies] = useState([]);

  useEffect(() => {
    // Function to fetch featured movies
    const fetchFeaturedMovies = async () => {
      try {
        const response = await axios.get('/movie/popular'); // Replace with the appropriate API endpoint
        setFeaturedMovies(response.data.results.slice(0, 5)); // Display the first 5 movies as featured
      } catch (error) {
        console.error('Error fetching featured movies:', error);
      }
    };

    // Call the fetch function when the component mounts
    fetchFeaturedMovies();
  }, []);

  return (
    <div>
      <h2>Featured Movies</h2>
      <div className="featured-movies">
        {featuredMovies.map((movie) => (
          <div key={movie.id} className="featured-movie">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
