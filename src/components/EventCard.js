'use client';

import { useState } from 'react';
import { Calendar, MapPin } from './Icons';

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
                    <div className="card-img-fallback"><Users size={40} /></div>
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
                    <div className="meta-item">
                        <Calendar size={14} />
                        <span>March 22, 2026</span>
                    </div>
                    <div className="meta-item">
                        <MapPin size={14} />
                        <span>Hyderabad</span>
                    </div>
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
        </article>
    );
}
