'use client';

import { useState } from 'react';
import EventCard from '@/components/EventCard';
import EventModal from '@/components/EventModal';

export default function EventsPage() {
    const [modalOpen, setModalOpen] = useState(false);
    const [activeFilter, setActiveFilter] = useState('All Events');

    const filters = ['All Events', 'This Month', 'Sustainability', 'Education', 'Free Events'];

    return (
        <>
            {/* Hero */}
            <section className="events-hero">
                <div className="hero-content">
                    <p className="eyebrow">Estah Society · Events 2026</p>
                    <h1 className="hero-title">
                        Upcoming <em>Events</em>
                    </h1>
                    <p className="hero-sub">
                        Join us in transforming communities through education, empowerment, and
                        sustainable action across India.
                    </p>
                </div>
            </section>

            {/* Filter Bar */}
            <div className="filter-bar" role="toolbar" aria-label="Event filters">
                {filters.map((f) => (
                    <button
                        key={f}
                        className={`filter-pill${activeFilter === f ? ' active' : ''}`}
                        onClick={() => setActiveFilter(f)}
                        aria-pressed={activeFilter === f}
                    >
                        {f}
                    </button>
                ))}
            </div>

            {/* Events Grid */}
            <section className="events-section">
                <p className="section-label">All Upcoming Events · 1 Result</p>
                <div className="events-grid">
                    <EventCard onOpenModal={() => setModalOpen(true)} />
                </div>
            </section>

            {/* Modal */}
            <EventModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        </>
    );
}
