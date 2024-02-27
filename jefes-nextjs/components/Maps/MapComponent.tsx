"use client";
import React from "react";

const GoogleMap = () => {
  return (
    // basic bootstrap classes. you can change with yours.
    <div className="col-md-12">
      <div className="emdeb-responsive">
        <iframe
          width="600"
          height="450"
          style={{border: "0"}}
          loading="lazy"
          src={process.env.MAPS_API_KEY}
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMap;
