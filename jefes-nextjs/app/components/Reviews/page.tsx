import React from 'react';
import GoogleReviews from './google_reviews';

const App = () => {
  const apiKey = 'AIzaSyClfOGrkQNRjDFzvnTk-W7Oeh-yyDNCXN0'; // Replace with your Google API key
  const placeId = 'ChIJQ-7Uc0BitocRQZASTWUyN04'; // Replace with the Google Place ID of the location

  return (
    <div>
      <h1>Google Reviews</h1>
      <GoogleReviews apiKey={apiKey} placeId={placeId} />
    </div>
  );
};

export default App;
