'use client';

import { useState, useEffect } from 'react';
import HeroBackground from '@/components/HeroBackground';
import { TreeLoader } from '@/components/TreeLoader';

export default function BlogPage() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [selectedPost, setSelectedPost] = useState(null);
    const [postLoading, setPostLoading] = useState(false);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch('/api/blogs');
                if (!response.ok) throw new Error('Failed to load blogs');
                const data = await response.json();
                if (data.error) throw new Error(data.error);
                setBlogs(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    const handleReadPost = async (url) => {
        setPostLoading(true);
        try {
            const response = await fetch(`/api/blogs?url=${encodeURIComponent(url)}`);
            if (!response.ok) throw new Error('Failed to fetch post content');
            const data = await response.json();
            setSelectedPost(data);
            document.body.style.overflow = 'hidden';
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } catch (err) {
            console.error(err);
        } finally {
            setPostLoading(false);
        }
    };

    const closePost = () => {
        setSelectedPost(null);
        document.body.style.overflow = '';
    };

    if (loading) {
        return (
            <div className="blog-status">
                <HeroBackground />
                <TreeLoader size={80} />
                <p className="loading-text">Harvesting our latest stories...</p>
                <style jsx>{`
                    .blog-status {
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
                        letter-spacing: 0.02em;
                        opacity: 0.8;
                    }
                `}</style>
            </div>
        );
    }

    if (error) {
        return (
            <div className="blog-status">
                <HeroBackground />
                <div className="error-card">
                    <h2>Oops!</h2>
                    <p>We couldn't reach the earth's stories right now.</p>
                    <p className="error-detail">{error}</p>
                    <button onClick={() => window.location.reload()} className="retry-btn">Try Again</button>
                </div>
                <style jsx>{`
                    .blog-status {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        min-height: 80vh;
                        position: relative;
                        padding: 40px;
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
                    .error-detail {
                        font-size: 0.8rem;
                        opacity: 0.6;
                        margin-top: 10px;
                        margin-bottom: 20px;
                    }
                    .retry-btn {
                        padding: 12px 24px;
                        background: var(--lime);
                        color: var(--text-dark);
                        border-radius: 12px;
                        font-weight: 800;
                        transition: transform 0.2s;
                    }
                    .retry-btn:hover { transform: scale(1.05); }
                `}</style>
            </div>
        );
    }

    return (
        <div className="blog-container">
            {postLoading && (
                <div className="fullscreen-loader">
                    <TreeLoader size={100} />
                    <p>Preparing the full story for you...</p>
                </div>
            )}

            {selectedPost && (
                <div className="reading-overlay">
                    <div className="reading-content">
                        <button className="close-bar" onClick={closePost}>
                            <span className="close-text">← Back to Stories</span>
                        </button>

                        <article className="full-post">
                            {selectedPost.featuredImage && (
                                <div className="post-hero-image">
                                    <img src={selectedPost.featuredImage} alt={selectedPost.title} />
                                </div>
                            )}
                            <h1 className="post-title-full">{selectedPost.title}</h1>
                            <div
                                className="post-body-html"
                                dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                            />
                        </article>

                        <div className="reading-footer">
                            <p>WE HEAL THE EARTH · Global Perspectives</p>
                            <button className="close-btn-bottom" onClick={closePost}>Close Reader</button>
                        </div>
                    </div>
                </div>
            )}

            <section className="blog-hero">
                <HeroBackground />
                <div className="hero-content">
                    <p className="eyebrow">WE HEAL THE EARTH · Global Insights</p>
                    <h1 className="hero-title">
                        Our <em>Impact</em> & <em>Stories</em>
                    </h1>
                    <p className="hero-sub">
                        Explore our regular updates on sustainability, education, and the movement to heal the earth.
                        Directly synced from our global community.
                    </p>
                </div>
            </section>

            <section className="blog-grid-section">
                <div className="blog-grid">
                    {blogs.map((post) => (
                        <div
                            key={post.id}
                            onClick={() => handleReadPost(post.link)}
                            className="blog-card"
                            role="button"
                            tabIndex={0}
                        >
                            <div className="blog-card-content">
                                <span className="category-tag">Movement</span>
                                <h2 className="post-title">{post.title}</h2>
                                <p className="post-excerpt">{post.excerpt}</p>
                                <div className="card-footer">
                                    <span className="read-more">Read Full Story</span>
                                    <span className="arrow">→</span>
                                </div>
                            </div>
                            <div className="card-glow"></div>
                        </div>
                    ))}
                </div>
            </section>

            <style jsx>{`
                .blog-container {
                    background: var(--bg);
                    min-height: 100vh;
                    color: var(--text);
                }
                .blog-hero {
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
                    font-size: 0.82rem;
                    font-weight: 800;
                    letter-spacing: 0.15em;
                    color: var(--lime);
                    margin-bottom: 24px;
                    text-transform: uppercase;
                }
                .hero-title {
                    font-family: var(--font-display);
                    font-size: clamp(3rem, 8vw, 5.5rem);
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
                    font-size: clamp(1rem, 2vw, 1.25rem);
                    opacity: 0.8;
                    max-width: 600px;
                    margin: 0 auto;
                    line-height: 1.6;
                }
                .blog-grid-section {
                    padding: 0 4vw 100px;
                    position: relative;
                    z-index: 2;
                }
                .blog-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
                    gap: 32px;
                    max-width: 1400px;
                    margin: 0 auto;
                }
                .blog-card {
                    background: var(--surface1);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    border-radius: 24px;
                    padding: 40px;
                    position: relative;
                    overflow: hidden;
                    text-decoration: none;
                    color: inherit;
                    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), background 0.4s;
                    display: flex;
                    flex-direction: column;
                    cursor: pointer;
                }
                .blog-card:hover {
                    transform: translateY(-8px);
                    background: rgba(255, 255, 255, 0.03);
                    border-color: var(--lime);
                }
                .category-tag {
                    font-size: 0.75rem;
                    font-weight: 900;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: var(--lime);
                    margin-bottom: 20px;
                    display: block;
                }
                .post-title {
                    font-family: var(--font-display);
                    font-size: 1.75rem;
                    line-height: 1.2;
                    margin-bottom: 16px;
                    font-weight: 600;
                }
                .post-excerpt {
                    font-size: 0.95rem;
                    opacity: 0.7;
                    line-height: 1.7;
                    margin-bottom: 30px;
                    flex-grow: 1;
                }
                .card-footer {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    font-weight: 700;
                    font-size: 0.9rem;
                    padding-top: 20px;
                    border-top: 1px solid rgba(255, 255, 255, 0.05);
                }
                .read-more {
                    color: var(--lime);
                }
                .card-glow {
                    position: absolute;
                    top: -50%;
                    left: -50%;
                    width: 200%;
                    height: 200%;
                    background: radial-gradient(circle, var(--lime) 0%, transparent 70%);
                    opacity: 0;
                    transition: opacity 0.6s;
                    pointer-events: none;
                    z-index: 0;
                    filter: blur(80px);
                }
                .blog-card:hover .card-glow {
                    opacity: 0.05;
                }

                /* READING OVERLAY */
                .reading-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: var(--bg);
                    z-index: 1000;
                    overflow-y: auto;
                    animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1);
                }
                .reading-content {
                    max-width: 900px;
                    margin: 0 auto;
                    padding: 40px 20px 100px;
                }
                .close-bar {
                    background: none;
                    border: none;
                    color: var(--lime);
                    font-weight: 800;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    padding: 20px 0;
                    font-size: 1rem;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }
                .full-post {
                    padding-top: 40px;
                }
                .post-hero-image {
                    width: 100%;
                    border-radius: 32px;
                    overflow: hidden;
                    margin-bottom: 40px;
                    border: 1px solid rgba(255, 255, 255, 0.05);
                }
                .post-hero-image img {
                    width: 100%;
                    height: auto;
                    display: block;
                }
                .post-title-full {
                    font-family: var(--font-display);
                    font-size: clamp(2.5rem, 6vw, 4rem);
                    line-height: 1.1;
                    margin-bottom: 40px;
                    font-weight: 700;
                    letter-spacing: -0.02em;
                }
                .post-body-html {
                    font-size: 1.2rem;
                    line-height: 1.8;
                    opacity: 0.95;
                }
                .post-body-html :global(p) { margin-bottom: 30px; }
                .post-body-html :global(h2) { 
                    font-family: var(--font-display);
                    font-size: 2rem;
                    margin: 60px 0 30px;
                }
                .post-body-html :global(img) {
                    max-width: 100%;
                    height: auto;
                    border-radius: 20px;
                    margin: 40px 0;
                }
                .reading-footer {
                    margin-top: 100px;
                    padding-top: 60px;
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                    text-align: center;
                }
                .reading-footer p {
                    font-weight: 800;
                    font-size: 0.8rem;
                    letter-spacing: 0.1em;
                    opacity: 0.5;
                    margin-bottom: 30px;
                }
                .close-btn-bottom {
                    padding: 14px 32px;
                    background: var(--surface1);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    color: var(--text);
                    border-radius: 14px;
                    font-weight: 700;
                    cursor: pointer;
                }

                .fullscreen-loader {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.8);
                    backdrop-filter: blur(10px);
                    z-index: 2000;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    text-align: center;
                }
                .fullscreen-loader p {
                    margin-top: 20px;
                    font-weight: 600;
                    letter-spacing: 0.02em;
                }

                @keyframes slideUp {
                    from { transform: translateY(100%); }
                    to { transform: translateY(0); }
                }

                @media (max-width: 768px) {
                    .blog-grid { grid-template-columns: 1fr; }
                    .post-title-full { font-size: 2rem; }
                    .post-body-html { font-size: 1.1rem; }
                }
            `}</style>
        </div>
    );
}
