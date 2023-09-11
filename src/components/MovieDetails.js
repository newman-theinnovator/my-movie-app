import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../apiConfig'; // Import your Axios configuration

function MovieDetails() {
  const { id } = useParams(); // Get the movie ID from the route parameter
  const [movieDetails, setMovieDetails] = useState(null); // State to store movie details

  useEffect(() => {
    // Function to fetch movie details by ID
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`/movie/${id}`);
        setMovieDetails(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    // Call the fetch function when the component mounts
    fetchMovieDetails();
  }, [id]);

  return (
    <div>
      <h2>Movie Details</h2>
      {movieDetails ? (
        <div>
          <h3>{movieDetails.title}</h3>
          <p>Release Date: {movieDetails.release_date}</p>
          <p>Runtime: {movieDetails.runtime} minutes</p>
          <p>{movieDetails.overview}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default MovieDetails;
