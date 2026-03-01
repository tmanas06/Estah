'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import EventCard from '@/components/EventCard';
import { useToast } from '@/components/MobileToast';
import HeroBackground from '@/components/HeroBackground';

// Confetti explosion
function fireConfetti(canvas) {
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const colors = ['#4E8C6F', '#C9A84C', '#7CB5A0', '#8BA888', '#D4A843', '#E8E2D6'];
    const particles = [];

    for (let i = 0; i < 120; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: -20 - Math.random() * 200,
            w: 6 + Math.random() * 6,
            h: 4 + Math.random() * 4,
            color: colors[Math.floor(Math.random() * colors.length)],
            vx: (Math.random() - 0.5) * 4,
            vy: 2 + Math.random() * 4,
            rot: Math.random() * Math.PI * 2,
            rotV: (Math.random() - 0.5) * 0.2,
            opacity: 1,
        });
    }

    let frame = 0;
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let alive = false;
        particles.forEach((p) => {
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.08;
            p.rot += p.rotV;
            p.opacity -= 0.005;
            if (p.opacity <= 0) return;
            alive = true;
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rot);
            ctx.globalAlpha = p.opacity;
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
            ctx.restore();
        });
        frame++;
        if (alive && frame < 300) requestAnimationFrame(draw);
        else ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    requestAnimationFrame(draw);
}

const emojis = [];

const tickerText = 'RUN FOR EDUCATION — 22 MARCH 2026 — GACHIBOWLI STADIUM, HYDERABAD — FREE ENTRY — 70+ PARTICIPANTS — WE HEAL THE EARTH — SUSTAINABILITY IN ACTION';

export default function EventsPage() {
    const [activeFilter, setActiveFilter] = useState('All Events');
    const confettiRef = useRef(null);
    const { addToast } = useToast();

    const filters = ['All Events', 'This Month', 'Sustainability', 'Education', 'Free Events'];

    useEffect(() => {
        // Fire confetti on load
        const confettiTimer = setTimeout(() => {
            if (confettiRef.current) fireConfetti(confettiRef.current);
        }, 600);

        // Toast notification on events loaded
        const toastTimer = setTimeout(() => {
            addToast({
                title: 'Events Loaded!',
                message: '1 upcoming event found — Run for Education on March 22',
                type: 'success',
                duration: 5000,
            });
        }, 1200);

        return () => {
            clearTimeout(confettiTimer);
            clearTimeout(toastTimer);
        };
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            {/* Confetti Canvas */}
            <canvas ref={confettiRef} className="confetti-canvas" />

            {/* Hero */}
            <section className="events-hero">
                <HeroBackground />
                {/* Floating Emoji Blobs */}
                {emojis.map((e, i) => (
                    <span
                        key={i}
                        className="emoji-blob"
                        style={{
                            top: e.top,
                            left: e.left,
                            '--dur': e.dur,
                            '--delay': e.delay,
                        }}
                    >
                        {e.emoji}
                    </span>
                ))}

                <div className="hero-content">
                    <p className="eyebrow">WE HEAL THE EARTH · Events 2026</p>
                    <h1 className="hero-title">
                        Upcoming <em>Events</em>
                    </h1>
                    <p className="hero-sub">
                        Join us in transforming communities through education, empowerment, and
                        sustainable action across India.
                    </p>

                    {/* Stat Pills */}
                    <div className="stat-pills">
                        <div className="stat-pill">
                            <span className="stat-num">70+</span> Participants
                        </div>
                        <div className="stat-pill">
                            <span className="stat-num">2.5K</span> Students Impacted
                        </div>
                        <div className="stat-pill">
                            <span className="stat-num">4M</span> Lives Goal
                        </div>
                        <div className="stat-pill">
                            <span className="stat-num">10+</span> Interested
                        </div>
                    </div>
                </div>
            </section>

            {/* Ticker Tape */}
            <div className="ticker-wrap" aria-hidden="true">
                <div className="ticker">
                    {[0, 1].map((i) => (
                        <span key={i}>
                            {tickerText.split(' — ').map((seg, j) => (
                                <span key={j}>
                                    {seg} <span className="sep">✦</span>{' '}
                                </span>
                            ))}
                        </span>
                    ))}
                </div>
            </div>

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
                    <EventCard />
                </div>
            </section>
        </>
    );
}
