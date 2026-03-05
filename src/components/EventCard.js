'use client';

import { useState } from 'react';
import { Calendar, MapPin } from './Icons';

export default function EventCard({ isPlaceholder = false, title = "Run for Education", category = "#Sustainability" }) {
    const [imgError, setImgError] = useState(false);

    const handleRedirect = (e) => {
        if (isPlaceholder) return;
        e.stopPropagation();
        window.open('https://skillbloomer.com/events/run-for-education', '_blank', 'noopener,noreferrer');
    };

    return (
        <article
            className="event-card"
            onClick={handleRedirect}
            tabIndex={0}
            role={isPlaceholder ? "article" : "button"}
            aria-label={isPlaceholder ? "Upcoming event" : "View Run for Education event details"}
            onKeyDown={(e) => { if (e.key === 'Enter') handleRedirect(e); }}
            style={isPlaceholder ? { cursor: 'default' } : { cursor: 'pointer' }}
        >
            <div className="card-img-wrap">
                {!imgError && !isPlaceholder ? (
                    <img
                        src="https://skillbloomer.com/uploads/events/1770985327_698f176f3b880_featured.jpg"
                        alt="Run for Education event"
                        loading="lazy"
                        onError={() => setImgError(true)}
                    />
                ) : (
                    <div className="card-img-fallback-wrap" style={{ width: '100%', height: '100%' }}>
                        <div className="card-img-fallback" style={isPlaceholder ? { fontSize: '2rem', fontWeight: '900', letterSpacing: '0.1em', color: 'var(--lime)', opacity: 0.8 } : {}}>
                            {isPlaceholder ? 'UPCOMING' : 'ES'}
                        </div>
                    </div>
                )}
                <div className="card-img-overlay"></div>
                {!isPlaceholder && <span className="card-date-badge">22 MAR</span>}
                {!isPlaceholder && <span className="card-cat-badge">{category}</span>}
            </div>

            <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <div className="card-org">
                    <div className="card-org-avatar">ES</div>
                    <span>Estah Society</span>
                </div>

                <div className="card-meta">
                    <div className="meta-item">
                        <Calendar size={14} />
                        <span>{isPlaceholder ? 'To Be Announced' : 'March 22, 2026'}</span>
                    </div>
                    <div className="meta-item">
                        <MapPin size={14} />
                        <span>{isPlaceholder ? 'TBA' : 'Hyderabad'}</span>
                    </div>
                </div>

                <p className="card-desc">
                    {isPlaceholder
                        ? 'We are planning more exciting initiatives. Stay tuned as we finalize the details for our next impactful event.'
                        : 'An initiative by WE HEAL THE EARTH — run for a child\'s future, equal opportunities, and a better tomorrow.'}
                </p>

                <div className="card-divider"></div>

                <div className="card-footer">
                    {isPlaceholder ? (
                        <>
                            <span className="sold-out-badge" style={{ background: 'var(--surface2)', color: 'var(--muted)', borderColor: 'rgba(255,255,255,0.1)' }}>COMING SOON</span>
                            <span className="view-details" style={{ color: 'var(--muted)', fontWeight: '600' }}>
                                Stay Tuned
                            </span>
                        </>
                    ) : (
                        <>
                            <span className="sold-out-badge">SOLD OUT</span>
                            <span className="view-details">
                                View Details <span className="arrow">→</span>
                            </span>
                        </>
                    )}
                </div>
            </div>
        </article>
    );
}
