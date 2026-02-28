'use client';

import { useEffect, useRef, useCallback, useState } from 'react';
import { Calendar, MapPin, Ticket, Trophy, Star, Leaf, Building2, Ban } from './Icons';

export default function EventModal({ isOpen, onClose }) {
    const overlayRef = useRef(null);
    const closeRef = useRef(null);
    const [orgImgError, setOrgImgError] = useState(false);
    const [heroImgError, setHeroImgError] = useState(false);

    // Close on ESC
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
            // Focus close button
            setTimeout(() => closeRef.current?.focus(), 100);
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [isOpen, onClose]);

    // Count-up animation
    useEffect(() => {
        if (!isOpen) return;
        const els = document.querySelectorAll('.impact-num');
        els.forEach((el) => {
            const target = parseInt(el.dataset.target);
            const duration = 1500;
            const start = performance.now();
            el.textContent = '0';

            function update(now) {
                const elapsed = now - start;
                const progress = Math.min(elapsed / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                const val = Math.floor(eased * target);

                if (target >= 1000000) el.textContent = (val / 1000000).toFixed(1) + 'M+';
                else if (target >= 10000) el.textContent = Math.floor(val / 1000).toLocaleString() + 'K+';
                else el.textContent = val.toLocaleString() + '+';

                if (progress < 1) requestAnimationFrame(update);
            }
            requestAnimationFrame(update);
        });
    }, [isOpen]);

    const handleOverlayClick = useCallback(
        (e) => {
            if (e.target === overlayRef.current) onClose();
        },
        [onClose]
    );

    if (!isOpen) return null;

    return (
        <div
            className="modal-overlay open"
            ref={overlayRef}
            onClick={handleOverlayClick}
            role="dialog"
            aria-modal="true"
            aria-label="Event details"
        >
            <div className="modal" role="document">
                <div
                    className="modal-hero"
                    style={heroImgError ? { background: 'linear-gradient(135deg, #1A1A0D, #2A2000)' } : {}}
                >
                    {!heroImgError && (
                        <img
                            src="https://skillbloomer.com/uploads/events/1770985327_698f176f3b880_featured.jpg"
                            alt="Run for Education"
                            onError={() => setHeroImgError(true)}
                        />
                    )}
                    <div className="modal-hero-overlay"></div>
                    <button
                        className="modal-close"
                        onClick={onClose}
                        ref={closeRef}
                        aria-label="Close modal"
                    >
                        ✕
                    </button>
                    <h2 className="modal-title-overlay">Run for Education</h2>
                </div>

                <div className="modal-body">
                    {/* Info Chips */}
                    <div className="modal-chips">
                        <div className="modal-chip">
                            <span className="chip-icon"><Calendar size={20} /></span>
                            <div>
                                <div className="chip-label">Date &amp; Time</div>
                                <div className="chip-value">March 22, 2026 · 12:00 PM – 4:00 PM</div>
                            </div>
                        </div>
                        <div className="modal-chip">
                            <span className="chip-icon"><MapPin size={20} /></span>
                            <div>
                                <div className="chip-label">Venue</div>
                                <div className="chip-value">Gachibowli Stadium, Hyderabad</div>
                            </div>
                        </div>
                        <div className="modal-chip">
                            <span className="chip-icon"><Ticket size={20} /></span>
                            <div>
                                <div className="chip-label">Entry</div>
                                <div className="chip-value">Free · 0 Tickets Remaining</div>
                            </div>
                        </div>
                    </div>

                    {/* About */}
                    <div className="modal-section">
                        <h3 className="modal-section-title">About This Event</h3>
                        <p>
                            Run for Education is a heartfelt initiative by Events MVP to support
                            children&apos;s learning and spread awareness about the value of education.
                            This event brings together students, parents, teachers, and community members
                            to stand for one common purpose — ensuring every child gets the opportunity to
                            learn, grow, and dream big.
                        </p>
                        <p>
                            Through this run, we encourage unity, hope, and social responsibility. The
                            support received helps us conduct scholarship exams, provide learning
                            resources, and create educational opportunities for deserving students who
                            need encouragement the most.
                        </p>
                        <p>
                            Run for Education is not just about running; it is about running for a
                            child&apos;s future, for equal opportunities, and for a better tomorrow.
                        </p>
                        <div className="mission-box">
                            <p>
                                Our Mission: To inspire sustainable, solution-based educational practices
                                that transform communities and create lasting impact.
                            </p>
                        </div>
                    </div>

                    {/* Impact Numbers */}
                    <div className="modal-section">
                        <h3 className="modal-section-title">Impact Numbers</h3>
                        <div className="impact-grid">
                            <div className="impact-chip">
                                <div className="impact-num" data-target="70">0</div>
                                <div className="impact-label">Active Participants</div>
                            </div>
                            <div className="impact-chip">
                                <div className="impact-num" data-target="2500">0</div>
                                <div className="impact-label">Students Impacted</div>
                            </div>
                            <div className="impact-chip">
                                <div className="impact-num" data-target="25">0</div>
                                <div className="impact-label">Partner Institutions</div>
                            </div>
                            <div className="impact-chip">
                                <div className="impact-num" data-target="40000">0</div>
                                <div className="impact-label">Jobs Targeted</div>
                            </div>
                            <div className="impact-chip">
                                <div className="impact-num" data-target="4000000">0</div>
                                <div className="impact-label">Lives to Impact</div>
                            </div>
                        </div>
                    </div>

                    {/* Award Categories */}
                    <div className="modal-section">
                        <h3 className="modal-section-title">2025 Award Categories</h3>
                        <div className="awards-grid">
                            <div className="award-card">
                                <span className="award-icon"><Trophy size={18} /></span> Education Innovator of the Year
                            </div>
                            <div className="award-card">
                                <span className="award-icon"><Star size={18} /></span> Youth Changemaker Award
                            </div>
                            <div className="award-card">
                                <span className="award-icon"><Leaf size={18} /></span> Sustainability Champion in Education
                            </div>
                            <div className="award-card">
                                <span className="award-icon"><Building2 size={18} /></span> Sustainable Education Institution of the Year
                            </div>
                            <div className="award-card">
                                <span className="award-icon"><Users size={18} /></span> Corporate Leadership in Education
                            </div>
                        </div>
                    </div>

                    {/* Organizer */}
                    <div className="modal-section">
                        <h3 className="modal-section-title">Organizer</h3>
                        <div className="organizer-card">
                            {!orgImgError && (
                                <img
                                    src="https://skillbloomer.com/uploads/store/uploads/organizers/RftXZ9cnL1Y5016F259HAtWHqJ76qhAU5w1eXltf.jpg"
                                    alt="Events MVP"
                                    onError={() => setOrgImgError(true)}
                                />
                            )}
                            <div className="organizer-info">
                                <h4>Events MVP</h4>
                                <p>
                                    Events MVP is a community-driven platform empowering communities
                                    through education, entrepreneurship, and sustainability under the WE HEAL
                                    THE EARTH framework. With a vision for India 2047, Events MVP is
                                    committed to creating lasting impact through innovative practices and
                                    community engagement.
                                </p>
                                <a
                                    href="https://skillbloomer.com/events/run-for-education"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="org-link"
                                >
                                    View on SkillBloomer →
                                </a>
                            </div>
                        </div>
                    </div>

                    <button
                        className="modal-cta sold-out"
                        disabled
                        aria-label="Sold out, no tickets available"
                    >
                        <Ban size={20} style={{ marginRight: '8px' }} /> Sold Out — No Tickets Available
                    </button>
                </div>
            </div>
        </div>
    );
}
