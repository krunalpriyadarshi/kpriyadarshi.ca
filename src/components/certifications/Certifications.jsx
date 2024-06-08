import React, { useState, useEffect, useCallback } from 'react';
import './Certifications.css';

const Certifications = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        "https://via.placeholder.com/800x600.png?text=Certification+1",
        "https://via.placeholder.com/800x600.png?text=Certification+2",
        "https://via.placeholder.com/800x600.png?text=Certification+3",
        "https://via.placeholder.com/800x600.png?text=Certification+1",
        "https://via.placeholder.com/800x600.png?text=Certification+2",
        "https://via.placeholder.com/800x600.png?text=Certification+3",
        // Add more image URLs as needed
    ];

    const nextSlide = useCallback(() => {
        setCurrentSlide(prev => (prev < slides.length - 1 ? prev + 1 : 0));
    }, [slides.length]);

    const prevSlide = () => {
        setCurrentSlide(prev => (prev > 0 ? prev - 1 : slides.length - 1));
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    useEffect(() => {
        const slideInterval = setInterval(nextSlide, 5000); // Change slide every 3 seconds

        return () => clearInterval(slideInterval);
    }, [nextSlide]);

    return (
        <div className="certifications-container">
            <div className="certifications-carousel" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {slides.map((slide, index) => (
                    <div key={index} className={`certifications-slide ${index === currentSlide ? 'active' : ''}`}>
                        <img src={slide} alt="{`Certification ${index + 1}`}" onClick={() => window.location.href = 'https://www.google.com'} />
                    </div>
                ))}
            </div>
            <button 
                className={`certifications-nav-button certifications-prev ${currentSlide === 0 ? 'hidden' : ''}`} 
                onClick={prevSlide}
                id="prevBtn"
            >
                &#10094;
            </button>
            <button 
                className={`certifications-nav-button certifications-next ${currentSlide === slides.length - 1 ? 'hidden' : ''}`} 
                onClick={nextSlide}
                id="nextBtn"
            >
                &#10095;
            </button>
            <div className="certifications-nav-dots">
                {slides.map((_, index) => (
                    <span 
                        key={index} 
                        className={`certifications-dot ${index === currentSlide ? 'active' : ''}`} 
                        onClick={() => goToSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Certifications;
