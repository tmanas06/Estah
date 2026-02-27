'use client';

import { useState } from 'react';

const images = [
    { src: 'https://skillbloomer.com/uploads/events/1770985327_698f176f3b880_featured.jpg', category: 'Events', alt: 'Run for Education' },
    { src: 'https://skillbloomer.com/uploads/store/uploads/organizers/RftXZ9cnL1Y5016F259HAtWHqJ76qhAU5w1eXltf.jpg', category: 'Community', alt: 'Community Meetup' },
    { src: 'https://skillbloomer.com/uploads/events/1770985327_698f176f3b880_featured.jpg', category: 'Programs', alt: 'Scholarship Exam' },
    { src: 'https://skillbloomer.com/uploads/store/uploads/organizers/RftXZ9cnL1Y5016F259HAtWHqJ76qhAU5w1eXltf.jpg', category: 'Events', alt: 'Sustainability Workshop' },
    { src: 'https://skillbloomer.com/uploads/events/1770985327_698f176f3b880_featured.jpg', category: 'Community', alt: 'Youth Fellowship' },
    { src: 'https://skillbloomer.com/uploads/store/uploads/organizers/RftXZ9cnL1Y5016F259HAtWHqJ76qhAU5w1eXltf.jpg', category: 'Programs', alt: 'Classroom Impact' }
];

export default function GalleryGrid() {
    const [filter, setFilter] = useState('All');
    const categories = ['All', 'Events', 'Programs', 'Community'];

    const filteredImages = filter === 'All'
        ? images
        : images.filter(img => img.category === filter);

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
                    {filteredImages.map((img, i) => (
                        <div key={i} className="gallery-item">
                            <img src={img.src} alt={img.alt} loading="lazy" />
                            <div className="item-overlay">
                                <span className="item-cat">{img.category}</span>
                                <p className="item-title">{img.alt}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
