import React, { useState } from 'react';
import './ImageCarousel.scss';

type ImageCarouselProps = {
  images: string[];
};

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      {images && images.length > 0 ? (
        <div className="carousel">
          <button className="carousel-btn prev" onClick={prevImage}>
            ‹
          </button>

          <img
            src={images[currentIndex]}
            alt={`Imagen ${currentIndex + 1}`}
            className="carousel-image"
          />

          <button className="carousel-btn next" onClick={nextImage}>
            ›
          </button>

          <span className="caroulse-images-length">{images.length}</span>
        </div>
      ) : null}
    </>
  );
};

export default ImageCarousel;
