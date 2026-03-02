'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Leaf, GraduationCap, Zap, ArrowRight, ExternalLink } from '@/components/Icons';
import HeroBackground from '@/components/HeroBackground';
import { TreeLoader } from '@/components/TreeLoader';

export default function HomePage() {
    const [latestBlogs, setLatestBlogs] = useState([]);
    const [loadingBlogs, setLoadingBlogs] = useState(true);

    useEffect(() => {
        const fetchLatest = async () => {
            try {
                const response = await fetch('/api/blogs');
                const data = await response.json();
                setLatestBlogs(data.slice(0, 3));
            } catch (err) {
                console.error('Failed to fetch latest blogs', err);
            } finally {
                setLoadingBlogs(false);
            }
        };
        fetchLatest();
    }, []);

    return (
        <div className="home-container">
            {/* HERO SECTION */}
            <section className="home-hero">
                <HeroBackground />
                <div className="hero-content">
                    <div className="hero-brand-mark">
                        <img src="/estah-logo.png" alt="Estah Logo" className="hero-logo-img" />
                    </div>
                    <p className="eyebrow">WE HEAL THE EARTH · Established 2026</p>
                    <h1 className="hero-title">
                        Healing the Earth Through <em>Education</em> and <em>Action</em>
                    </h1>
                    <p className="hero-sub">
                        We are a sustainability-driven initiative creating lasting impact through
                        regenerative education and community transformation. Join the movement.
                    </p>
                    <div className="hero-ctas">
                        <Link href="/events" className="cta-btn primary">
                            Explore Events
                            <span className="btn-arrow">→</span>
                        </Link>
                        <Link href="/blog" className="cta-btn secondary">
                            Read Stories
                        </Link>
                    </div>
                </div>

                <div className="hero-decorations">
                    <div className="blob blob-1"></div>
                    <div className="blob blob-2"></div>
                </div>
            </section>

            {/* QUICK STATS TICKER */}
            <section className="home-stats">
                <div className="stats-ticker">
                    <div className="ticker-inner">
                        <span>70+ PARTICIPANTS</span>
                        <span>2500+ STUDENTS IMPACTED</span>
                        <span>25+ PARTNERS</span>
                        <span>4M LIVES TARGETED</span>
                        <span>70+ PARTICIPANTS</span>
                        <span>2500+ STUDENTS IMPACTED</span>
                        <span>25+ PARTNERS</span>
                        <span>4M LIVES TARGETED</span>
                    </div>
                </div>
            </section>

            {/* OUR STORY / MISSION */}
            <section className="home-story">
                <div className="story-grid">
                    <div className="story-image-wrap">
                        <img
                            src="/Users/manas/.gemini/antigravity/brain/9ceacb18-b23f-49a0-8c8a-9efbea6d8e48/earth_healing_mission_story_1772461176474.png"
                            alt="Planting seeds of change"
                            className="story-main-img"
                        />
                        <div className="img-accent-card">
                            <span className="accent-num">01</span>
                            <p>Our commitment to regenerative growth starts at the grassroots level.</p>
                        </div>
                    </div>
                    <div className="story-content">
                        <p className="section-label">Our Story</p>
                        <h2 className="story-title">From <em>Awareness</em> to <em>Accountability</em></h2>
                        <p className="story-text">
                            Estah Society’s "WE HEAL THE EARTH" initiative is more than just a campaign;
                            it’s a commitment to the Future of India 2047. We bridge the gap between
                            environmental consciousness and tangible community action.
                        </p>
                        <div className="story-points">
                            <div className="s-point">
                                <strong>Regenerative Mindsets</strong>
                                <p>Teaching communities not just to sustain, but to actively heal their local ecosystems.</p>
                            </div>
                            <div className="s-point">
                                <strong>Systemic Change</strong>
                                <p>Working with institutional partners to scale sustainable practices across the nation.</p>
                            </div>
                        </div>
                        <Link href="/programs" className="learn-more-link">
                            Explore our Programs <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* VISION CARDS */}
            <section className="home-vision">
                <div className="section-header">
                    <p className="section-label">Our Philosophy</p>
                    <h2 className="section-title">A Vision for <em>India 2047</em></h2>
                </div>

                <div className="vision-grid">
                    <div className="vision-card">
                        <div className="vision-icon"><Leaf size={32} /></div>
                        <h3>Sustainability</h3>
                        <p>Healing the earth through conscious living and regenerative educational frameworks.</p>
                    </div>
                    <div className="vision-card">
                        <div className="vision-icon"><GraduationCap size={32} /></div>
                        <h3>Education</h3>
                        <p>Bridging the gap with scholarship exams and fellowships for every aspiring mind.</p>
                    </div>
                    <div className="vision-card">
                        <div className="vision-icon"><Zap size={32} /></div>
                        <h3>Empowerment</h3>
                        <p>Providing the tools and networks for individual and community transformation.</p>
                    </div>
                </div>
            </section>

            {/* LATEST STORIES PREVIEW */}
            <section className="home-latest-blogs">
                <div className="section-header center">
                    <p className="section-label">Field Notes</p>
                    <h2 className="section-title">Latest <em>Stories</em></h2>
                </div>

                <div className="blog-preview-grid">
                    {loadingBlogs ? (
                        <div className="loader-container">
                            <TreeLoader size={60} />
                        </div>
                    ) : (
                        latestBlogs.map((post, idx) => (
                            <Link href="/blog" key={idx} className="blog-preview-card">
                                <div className="preview-content">
                                    <span className="p-category">Impact Story</span>
                                    <h3 className="p-title">{post.title}</h3>
                                    <p className="p-excerpt">{post.excerpt?.substring(0, 100)}...</p>
                                    <span className="p-link">Read More <ArrowRight size={14} /></span>
                                </div>
                            </Link>
                        ))
                    )}
                </div>
                <div className="center-cta">
                    <Link href="/blog" className="view-all-btn">View All Historical Notes</Link>
                </div>
            </section>

            {/* PARTNERS / GLOBAL REACH */}
            <section className="home-partners">
                <div className="partners-container">
                    <h2 className="partners-heading">Driving Impact with <em>Institutional Partners</em></h2>
                    <div className="partners-grid">
                        <div className="partner-name">Estah Society</div>
                        <div className="partner-name">Skill Bloomer</div>
                        <div className="partner-name">Planet Run Network</div>
                        <div className="partner-name">Regenerative Labs</div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .home-container {
                    background: var(--bg);
                    color: var(--text);
                }
                
                /* HERO */
                .home-hero {
                    position: relative;
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    padding: 0 4vw;
                    overflow: hidden;
                }
                .hero-content {
                    position: relative;
                    z-index: 2;
                    max-width: 900px;
                }
                .eyebrow {
                    font-size: 0.85rem;
                    font-weight: 800;
                    letter-spacing: 0.2em;
                    color: var(--lime);
                    margin-bottom: 24px;
                    text-transform: uppercase;
                }
                .hero-title {
                    font-family: var(--font-sans);
                    font-size: clamp(3.5rem, 8vw, 6rem);
                    line-height: 0.95;
                    margin-bottom: 32px;
                    font-weight: 700;
                    letter-spacing: -0.03em;
                }
                .hero-title em {
                    font-style: italic;
                    font-weight: 500;
                    color: var(--lime);
                }
                .hero-sub {
                    font-size: 1.25rem;
                    opacity: 0.8;
                    max-width: 650px;
                    margin: 0 auto 48px;
                    line-height: 1.6;
                }
                .hero-ctas {
                    display: flex;
                    gap: 16px;
                    justify-content: center;
                }
                .cta-btn {
                    padding: 18px 36px;
                    border-radius: 14px;
                    font-weight: 800;
                    text-decoration: none;
                    transition: all 0.3s ease;
                }
                .cta-btn.primary {
                    background: var(--lime);
                    color: var(--text-dark);
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
                .cta-btn.secondary {
                    background: rgba(255,255,255,0.05);
                    border: 1px solid rgba(255,255,255,0.1);
                    backdrop-filter: blur(10px);
                }
                .cta-btn:hover { transform: translateY(-2px); box-shadow: 0 10px 30px rgba(0,0,0,0.2); }

                /* STATS TICKER */
                .home-stats {
                    background: var(--surface1);
                    padding: 24px 0;
                    border-top: 1px solid rgba(255,255,255,0.05);
                    border-bottom: 1px solid rgba(255,255,255,0.05);
                }
                .stats-ticker {
                    overflow: hidden;
                    white-space: nowrap;
                }
                .ticker-inner {
                    display: inline-block;
                    animation: ticker 30s linear infinite;
                }
                .ticker-inner span {
                    display: inline-block;
                    margin-right: 100px;
                    font-weight: 900;
                    font-size: 0.9rem;
                    letter-spacing: 0.1em;
                    opacity: 0.8;
                }
                @keyframes ticker {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }

                /* OUR STORY */
                .home-story {
                    padding: 140px 4vw;
                    max-width: 1400px;
                    margin: 0 auto;
                }
                .story-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 80px;
                    align-items: center;
                }
                .story-image-wrap {
                    position: relative;
                }
                .story-main-img {
                    width: 100%;
                    aspect-ratio: 4/5;
                    object-fit: cover;
                    border-radius: 40px;
                    filter: saturate(1.1);
                    box-shadow: 0 30px 60px rgba(0,0,0,0.3);
                }
                .img-accent-card {
                    position: absolute;
                    bottom: -30px;
                    right: -30px;
                    background: var(--surface1);
                    padding: 30px;
                    border-radius: 24px;
                    max-width: 240px;
                    border: 1px solid rgba(255,255,255,0.1);
                    backdrop-filter: blur(20px);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.2);
                }
                .accent-num {
                    font-size: 2.5rem;
                    font-weight: 800;
                    color: var(--lime);
                    display: block;
                    margin-bottom: 12px;
                }
                .img-accent-card p {
                    font-size: 0.9rem;
                    line-height: 1.5;
                    font-weight: 600;
                }
                .story-title {
                    font-family: var(--font-sans);
                    font-size: 3.5rem;
                    margin: 20px 0 32px;
                    line-height: 1.1;
                    font-weight: 700;
                }
                .story-title em { font-style: italic; color: var(--lime); font-weight: 500; }
                .story-text {
                    font-size: 1.15rem;
                    opacity: 0.8;
                    margin-bottom: 40px;
                    line-height: 1.7;
                }
                .story-points {
                    display: grid;
                    gap: 24px;
                    margin-bottom: 48px;
                }
                .s-point strong { color: var(--lime); display: block; margin-bottom: 4px; }
                .learn-more-link {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    font-weight: 800;
                    color: var(--lime);
                    text-decoration: none;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    font-size: 0.9rem;
                }

                /* VISION */
                .home-vision {
                    padding: 100px 4vw;
                    background: rgba(255,255,255,0.01);
                }
                .section-header { margin-bottom: 60px; }
                .section-header.center { text-align: center; }
                .section-label {
                    color: var(--lime);
                    font-weight: 900;
                    text-transform: uppercase;
                    letter-spacing: 0.2em;
                    font-size: 0.75rem;
                    margin-bottom: 16px;
                }
                .section-title {
                    font-family: var(--font-sans);
                    font-size: 3.5rem;
                    font-weight: 700;
                    letter-spacing: -0.01em;
                }
                .section-title em { font-style: italic; color: var(--lime); font-weight: 500; }
                .vision-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 30px;
                    max-width: 1400px;
                    margin: 0 auto;
                }
                .vision-card {
                    background: var(--surface1);
                    padding: 50px;
                    border-radius: 32px;
                    border: 1px solid rgba(255,255,255,0.05);
                    transition: all 0.4s ease;
                }
                .vision-card:hover { transform: translateY(-10px); background: rgba(255,255,255,0.04); border-color: var(--lime); }
                .vision-icon { color: var(--lime); margin-bottom: 30px; }
                .vision-card h3 { font-family: var(--font-sans); font-size: 1.8rem; margin-bottom: 16px; }
                .vision-card p { opacity: 0.7; line-height: 1.7; }

                /* LATEST BLOGS */
                .home-latest-blogs {
                    padding: 140px 4vw;
                    max-width: 1400px;
                    margin: 0 auto;
                }
                .blog-preview-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 30px;
                    margin-top: 60px;
                }
                .blog-preview-card {
                    background: var(--surface1);
                    padding: 40px;
                    border-radius: 24px;
                    text-decoration: none;
                    color: inherit;
                    border: 1px solid rgba(255,255,255,0.05);
                    transition: all 0.3s ease;
                }
                .blog-preview-card:hover { box-shadow: 0 20px 40px rgba(0,0,0,0.3); transform: scale(1.02); }
                .p-category { font-size: 0.75rem; font-weight: 900; color: var(--lime); text-transform: uppercase; margin-bottom: 20px; display: block; }
                .p-title { font-family: var(--font-sans); font-size: 1.4rem; margin-bottom: 16px; line-height: 1.2; }
                .p-excerpt { font-size: 0.95rem; opacity: 0.6; line-height: 1.6; margin-bottom: 24px; }
                .p-link { font-weight: 800; color: var(--lime); display: flex; align-items: center; gap: 8px; }
                .center-cta { text-align: center; margin-top: 60px; }
                .view-all-btn { display: inline-block; padding: 18px 40px; background: transparent; border: 1px solid var(--lime); color: var(--lime); border-radius: 14px; font-weight: 800; text-decoration: none; }

                /* PARTNERS */
                .home-partners {
                    padding: 100px 4vw 160px;
                    text-align: center;
                }
                .partners-heading { font-family: var(--font-sans); font-size: 2rem; opacity: 0.5; max-width: 600px; margin: 0 auto 60px; }
                .partners-grid {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 60px;
                    opacity: 0.4;
                }
                .partner-name { font-size: 1.5rem; font-weight: 800; letter-spacing: 0.1em; }

                @media (max-width: 1024px) {
                    .story-grid, .vision-grid, .blog-preview-grid { grid-template-columns: 1fr; }
                    .hero-title { font-size: 4rem; }
                }
            `}</style>
        </div>
    );
}
