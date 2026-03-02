'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import HeroBackground from '@/components/HeroBackground';
import { TreeLoader } from '@/components/TreeLoader';

export default function ProgramsPage() {
    const [programs, setPrograms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPrograms = async () => {
            try {
                const response = await fetch('/api/programs');
                if (!response.ok) throw new Error('Failed to fetch programs');
                const data = await response.json();
                if (data.error) throw new Error(data.error);
                setPrograms(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPrograms();
    }, []);

    if (loading) {
        return (
            <div className="status-container">
                <HeroBackground />
                <TreeLoader size={80} />
                <p className="loading-text">Mapping out Impact Journeys...</p>
                <style jsx>{`
                    .status-container {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        min-height: 80vh;
                        padding: 120px 20px;
                        color: var(--text);
                        text-align: center;
                        position: relative;
                        overflow: hidden;
                    }
                    .loading-text {
                        margin-top: 30px;
                        font-family: var(--font-outfit);
                        font-weight: 600;
                        opacity: 0.8;
                    }
                `}</style>
            </div>
        );
    }

    if (error) {
        return (
            <div className="status-container">
                <HeroBackground />
                <div className="error-card">
                    <h2>Connection Interrupted</h2>
                    <p>We couldn't reach the live program calendar.</p>
                    <button onClick={() => window.location.reload()} className="retry-btn">Retry Connection</button>
                </div>
                <style jsx>{`
                    .status-container {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        min-height: 80vh;
                        position: relative;
                    }
                    .error-card {
                        background: var(--surface1);
                        padding: 40px;
                        border-radius: 24px;
                        border: 1px solid rgba(255, 255, 255, 0.1);
                        text-align: center;
                        max-width: 400px;
                        z-index: 2;
                        backdrop-filter: blur(10px);
                    }
                    .retry-btn {
                        margin-top: 20px;
                        padding: 12px 24px;
                        background: var(--lime);
                        color: var(--text-dark);
                        border-radius: 12px;
                        font-weight: 800;
                    }
                `}</style>
            </div>
        );
    }

    return (
        <div className="programs-container">
            <section className="programs-hero">
                <HeroBackground />
                <div className="hero-content">
                    <p className="eyebrow">Planet Run Calendar</p>
                    <h1 className="hero-title">
                        Transforming <em>Potential</em> into <em>Progress</em>
                    </h1>
                    <p className="hero-sub">
                        Explore our regular series of community runs and environmental initiatives.
                        Directly synced from the We Heal The Earth global movement.
                    </p>
                </div>
            </section>

            <section className="programs-grid-section">
                <div className="grid-container">
                    {programs.map((p, i) => (
                        <div key={i} className="program-card">
                            <div className="card-top">
                                <span className="category-label">{p.category || 'Environmental'}</span>
                                {p.date && <span className="date-badge">{p.date}</span>}
                            </div>
                            <h3 className="p-title">{p.title}</h3>
                            <p className="p-desc">{p.description}</p>
                            <div className="p-footer">
                                <a href={p.link} target="_blank" rel="noopener noreferrer" className="p-cta">
                                    Participate Now
                                    <span className="arrow">→</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="programs-cta">
                <div className="cta-box">
                    <h2>Want to <em>Partner</em> with us?</h2>
                    <p>We are always looking for institutional partners and corporate sponsors to scale our impact.</p>
                    <Link href="/contact" className="cta-btn secondary">
                        Get in Touch
                    </Link>
                </div>
            </section>

            <style jsx>{`
                .programs-container {
                    background: var(--bg);
                    min-height: 100vh;
                    color: var(--text);
                }
                .programs-hero {
                    position: relative;
                    padding: 160px 4vw 100px;
                    overflow: hidden;
                    text-align: center;
                }
                .hero-content {
                    position: relative;
                    z-index: 2;
                    max-width: 800px;
                    margin: 0 auto;
                }
                .eyebrow {
                    font-size: 0.85rem;
                    font-weight: 800;
                    letter-spacing: 0.15em;
                    color: var(--lime);
                    margin-bottom: 24px;
                    text-transform: uppercase;
                }
                .hero-title {
                    font-family: var(--font-sans);
                    font-size: clamp(3rem, 7vw, 5rem);
                    line-height: 0.95;
                    margin-bottom: 32px;
                    font-weight: 700;
                    letter-spacing: -0.02em;
                }
                .hero-title em {
                    font-style: italic;
                    font-weight: 500;
                    color: var(--lime);
                }
                .hero-sub {
                    font-size: 1.15rem;
                    opacity: 0.8;
                    max-width: 600px;
                    margin: 0 auto;
                    line-height: 1.6;
                }
                .programs-grid-section {
                    padding: 0 4vw 100px;
                }
                .grid-container {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
                    gap: 30px;
                    max-width: 1400px;
                    margin: 0 auto;
                }
                .program-card {
                    background: var(--surface1);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    border-radius: 24px;
                    padding: 40px;
                    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                    display: flex;
                    flex-direction: column;
                }
                .program-card:hover {
                    transform: translateY(-8px);
                    border-color: var(--lime);
                    background: rgba(255, 255, 255, 0.03);
                }
                .card-top {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 24px;
                }
                .category-label {
                    font-size: 0.7rem;
                    font-weight: 900;
                    text-transform: uppercase;
                    color: var(--lime);
                    letter-spacing: 0.1em;
                }
                .date-badge {
                    font-size: 0.75rem;
                    background: rgba(255, 255, 255, 0.05);
                    padding: 4px 12px;
                    border-radius: 20px;
                    font-weight: 700;
                }
                .p-title {
                    font-family: var(--font-sans);
                    font-size: 1.6rem;
                    margin-bottom: 16px;
                    line-height: 1.2;
                }
                .p-desc {
                    font-size: 0.95rem;
                    opacity: 0.7;
                    line-height: 1.7;
                    margin-bottom: 30px;
                    flex-grow: 1;
                }
                .p-footer {
                    padding-top: 20px;
                    border-top: 1px solid rgba(255, 255, 255, 0.05);
                }
                .p-cta {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-weight: 800;
                    color: var(--lime);
                    text-decoration: none;
                }
                .programs-cta {
                    padding: 100px 4vw;
                    display: flex;
                    justify-content: center;
                }
                .cta-box {
                    background: var(--surface1);
                    padding: 60px;
                    border-radius: 40px;
                    text-align: center;
                    max-width: 800px;
                    width: 100%;
                    border: 1px solid rgba(255, 255, 255, 0.05);
                }
                .cta-box h2 {
                    font-family: var(--font-sans);
                    font-size: 2.5rem;
                    margin-bottom: 20px;
                }
                .cta-box h2 em { font-style: italic; color: var(--lime); font-weight: 500;}
                .cta-box p { margin-bottom: 40px; opacity: 0.8; }
                .cta-btn {
                    display: inline-block;
                    padding: 18px 40px;
                    background: var(--lime);
                    color: var(--text-dark);
                    border-radius: 16px;
                    font-weight: 800;
                    text-decoration: none;
                }
            `}</style>
        </div>
    );
}
