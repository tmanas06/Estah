'use client';

import { useState, useEffect } from 'react';

const sliderImages = [
    { url: '/slider-1.png', alt: 'Healing the Earth' },
    { url: '/slider-2.png', alt: 'Education Impact' },
    { url: '/slider-3.png', alt: 'Community Empowerment' },
    { url: '/slider-4.png', alt: 'Vision 2047' },
];

export default function PhotoSlider() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % sliderImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="photo-slider">
            {sliderImages.map((image, idx) => (
                <div
                    key={idx}
                    className={`slider-slide ${idx === current ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${image.url})` }}
                />
            ))}
            <div className="slider-overlay" />

            <style jsx>{`
                .photo-slider {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 0;
                    overflow: hidden;
                }
                .slider-slide {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-size: cover;
                    background-position: center;
                    opacity: 0;
                    transition: opacity 1.5s ease-in-out, transform 6s linear;
                    transform: scale(1.1);
                }
                .slider-slide.active {
                    opacity: 0.4;
                    transform: scale(1);
                }
                .slider-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: radial-gradient(circle at center, transparent 0%, var(--bg) 90%);
                    z-index: 1;
                }
            `}</style>
        </div>
    );
}
