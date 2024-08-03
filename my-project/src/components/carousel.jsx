import React, { useState } from 'react';
import './CustomCarousel.css'; // Import custom CSS

const slides = [
    { id: 1, name: 'John Doe', description: 'I like food', image: 'path_to_john_image' },
    { id: 2, name: 'Jane Doe', description: 'I love hiking', image: 'path_to_jane_image' },
    { id: 3, name: 'Sam Smith', description: 'Music enthusiast', image: 'path_to_sam_image' }
    // Add more slides as needed
];

function CustomCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    return (
        <div className="carousel-container">
            <div className="carousel-slide">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
                    >
                        <img src={slide.image} alt={slide.name} className="carousel-image" />
                        <div className="carousel-caption">
                            <h2>{slide.name}</h2>
                            <p>{slide.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button className="carousel-prev" onClick={prevSlide}>
                &lt;
            </button>
            <button className="carousel-next" onClick={nextSlide}>
                &gt;
            </button>
        </div>
    );
}

export default CustomCarousel;
