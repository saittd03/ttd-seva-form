import React from "react";
import "./MovingImages.css";

const imageUrls = [
  "https://yourdomain.com/image1.jpg",
  "https://yourdomain.com/image2.jpg",
  "https://yourdomain.com/image3.jpg",
  "https://yourdomain.com/image4.jpg",
  "https://yourdomain.com/image5.jpg",
  "https://yourdomain.com/image6.jpg",
  "https://yourdomain.com/image7.jpg",
];

const MovingImages = () => {
  return (
    <div className="moving-container">
      {imageUrls.map((url, index) => (
        <img key={index} src={url} className="moving-img" alt={`moving ${index + 1}`} />
      ))}
    </div>
  );
};

export default MovingImages;