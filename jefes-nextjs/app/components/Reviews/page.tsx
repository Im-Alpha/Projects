import React from 'react';
import GoogleReviews from './google_reviews';

const App = () => {
  const apiKey = ''; // Replace with your Google API key
  const placeId = ''; // Replace with the Google Place ID of the location

  return (
    <div>
      <h1>Google Reviews</h1>
      <GoogleReviews apiKey={process.env.GOOGLE_API_KEY} placeId={process.env.PLACE_ID_KEY} />
    </div>
  );
};

export default App;
