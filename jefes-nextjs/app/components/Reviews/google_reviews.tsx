"use client";
import React, { useState, useEffect } from "react";

const GoogleReviews = ({ apiKey, placeId}:any) => {
  const [reviews, setReviews] = useState<any>([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,reviews&key=${apiKey}`
        );
        const data = await response.json();

        if (data.result && data.result.reviews) {
          setReviews(data.result.reviews);
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, [apiKey, placeId]);

  return (
    <div>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map((review:any) => (
            <li key={review.time}>
              <strong>{review.author_name}</strong>: {review.text}
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews available.</p>
      )}
    </div>
  );
};

export default GoogleReviews;
