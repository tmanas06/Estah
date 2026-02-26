'use client';

import { useState } from 'react';

export default function EventCard({ onOpenModal }) {
    const [imgError, setImgError] = useState(false);

    return (
        <article
            className="event-card"
            onClick={onOpenModal}
            tabIndex={0}
            role="button"
            aria-label="View Run for Education event details"
            onKeyDown={(e) => e.key === 'Enter' && onOpenModal()}
        >
            <div className="card-img-wrap">
                {!imgError ? (
                    <img
                        src="https://skillbloomer.com/uploads/events/1770985327_698f176f3b880_featured.jpg"
                        alt="Run for Education event"
                        loading="lazy"
                        onError={() => setImgError(true)}
                    />
                ) : (
                    <div className="card-img-fallback">🏃</div>
                )}
                <div className="card-img-overlay"></div>
                <span className="card-date-badge">22 MAR</span>
                <span className="card-cat-badge">#Sustainability</span>
            </div>

            <div className="card-body">
                <h3 className="card-title">Run for Education</h3>
                <div className="card-org">
                    <div className="card-org-avatar">ES</div>
                    <span>Events MVP</span>
                </div>

                <div className="card-meta">
                    <div className="card-meta-row">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#B8F03E" strokeWidth="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                        <span>Sun, 22 March 2026 · 12:00 PM – 4:00 PM</span>
                    </div>
                    <div className="card-meta-row">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#B8F03E" strokeWidth="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>
                        <span>Gachibowli Stadium, Hyderabad, Telangana</span>
                    </div>
                </div>

                <p className="card-desc">
                    An initiative by WE HEAL THE EARTH — run for a child&apos;s future, equal
                    opportunities, and a better tomorrow.
                </p>

                <div className="card-divider"></div>

                <div className="card-footer">
                    <span className="sold-out-badge">SOLD OUT</span>
                    <span className="view-details">
                        View Details <span className="arrow">→</span>
                    </span>
                </div>
            </div>
        </article>
    );
}
