import { useState, useEffect } from 'react';

const TechStackCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
      "assets/nextjs.png",
      "assets/notion.svg",
      "assets/typescript.png",
      // Add more image paths as needed
    ];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000); // Change image every 3 seconds
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="relative w-full h-[276px] overflow-hidden">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`tech-stack-${index + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>
    );
  };

export default TechStackCarousel;
