import React, { useState } from "react";

interface ImageGalleryProps {
    images: string[];
}

function ImageGallery({ images }: ImageGalleryProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // This adds possibility to switch images pressing '>' 
    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // This adds '<' previous image
    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    // This will add and display the mini clickable images (gallery)
    const handleThumbnailClick = (index: number) => {
        setCurrentImageIndex(index);
    };

    return (
        <div className="image-gallery">
            <div className="main-image-container">
                <button className="image-arrow prev" onClick={handlePrevImage} disabled={images.length <= 1}>
                    &lt;
                </button>
                <img
                    className="product-image"
                    src={images[currentImageIndex]}
                    alt={`Image ${currentImageIndex + 1}`}
                />
                <button className="image-arrow next" onClick={handleNextImage} disabled={images.length <= 1}>
                    &gt;
                </button>
            </div>
            <div className="image-thumbnails">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className={`image-thumbnail ${index === currentImageIndex ? 'active':''}`}
                        onClick={() => handleThumbnailClick(index)}
                    />
                ))}
            </div>
        </div>
    );
}

export default ImageGallery;