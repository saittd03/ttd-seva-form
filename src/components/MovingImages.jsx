import React from "react";
import "./MovingImages.css";

const imageUrls = [
  "https://tirumalatirupatiyatra.in/wp-content/uploads/2024/07/Malayappa-Swamy-Saalakatla-Brahmotsavams-and-Navaratri-Brahmotsavams.jpg",
  "https://i.pinimg.com/736x/7a/33/f3/7a33f36196448a5d160327689537e6b8.jpg",
  "https://icctmemphis.org/wp-content/uploads/2024/10/Sesha_Vahanam.jpg",
  "https://templesofsouthindia.wordpress.com/wp-content/uploads/2013/06/kalpavriksha-vahanam-2012.jpg?w=584",
  "https://icctmemphis.org/wp-content/uploads/2024/10/Hanumath_Vahanam.jpg",
  "https://icctmemphis.org/wp-content/uploads/2024/10/Hamsa_Vahanam.jpg",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhNgKqvpn36ThYhADs5KSfqstQnH7RhQURPFUXp8GaaAFJjDqiFpGjPLsSFw4CLUrjy9yEQLdzQBT1jK0IvqXLFgL6xVgmh0XqE4_0Jg43t5yDaaYTKBg2WnZlZRBfTGRGzoOJvmUXwe58/s1280/119640793_1236250396726553_2163829448560762620_n.jpg",
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
