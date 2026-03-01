'use client';

import { useState, useEffect } from 'react';
import { TreeLoader } from './TreeLoader';

export default function GalleryGrid() {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filter, setFilter] = useState('All');

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch('/api/gallery');
                if (!response.ok) throw new Error('Failed to load gallery');
                const data = await response.json();
                setImages(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchImages();
    }, []);

    const categories = ['All', ...new Set(images.map(img => img.category))];

    const filteredImages = filter === 'All'
        ? images
        : images.filter(img => img.category === filter);

    if (loading) {
        return (
            <div className="gallery-status">
                <TreeLoader size={80} />
                <p className="loading-text">Curating our impact journey...</p>
                <style jsx>{`
                    .gallery-status {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        padding: 120px 20px;
                        color: var(--text);
                        text-align: center;
                        animation: fadeIn 0.5s ease-out;
                    }
                    .loading-text {
                        margin-top: 30px;
                        font-family: var(--font-outfit);
                        font-weight: 600;
                        letter-spacing: 0.02em;
                        opacity: 0.8;
                    }
                    @keyframes fadeIn {
                        from { opacity: 0; transform: translateY(10px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                `}</style>
            </div>
        );
    }

    if (error) {
        return (
            <div className="gallery-status">
                <p className="error-msg">Failed to load media: {error}</p>
                <button onClick={() => window.location.reload()} className="retry-btn">Retry</button>
                <style jsx>{`
                    .gallery-status { padding: 80px; text-align: center; }
                    .error-msg { color: #ff6b6b; margin-bottom: 20px; font-weight: 600; }
                    .retry-btn { 
                        padding: 10px 20px; 
                        background: var(--lime); 
                        color: var(--text-dark); 
                        border-radius: 8px; 
                        font-weight: 800;
                    }
                `}</style>
            </div>
        );
    }

    return (
        <>
            <div className="gallery-filter-bar">
                {categories.map(cat => (
                    <button
                        key={cat}
                        className={`filter-pill ${filter === cat ? 'active' : ''}`}
                        onClick={() => setFilter(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <section className="gallery-section">
                <div className="gallery-grid">
                    {filteredImages.length > 0 ? (
                        filteredImages.map((img, i) => (
                            <div key={i} className="gallery-item">
                                <img src={img.src} alt={img.alt} loading="lazy" />
                                <div className="item-overlay">
                                    <span className="item-cat">{img.category}</span>
                                    <p className="item-title">{img.alt}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="no-images">No images found in this category.</p>
                    )}
                </div>
            </section>
        </>
    );
}
