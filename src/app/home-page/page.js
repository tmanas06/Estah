import Link from 'next/link';

export const metadata = {
    title: 'Home — Events MVP',
    description: 'Welcome to Events MVP — empowering communities through education, entrepreneurship, and sustainability.',
};

export default function HomePage() {
    return (
        <div className="home-container">
            {/* HERO SECTION */}
            <section className="home-hero">
                <div className="hero-content">
                    <p className="eyebrow">Events MVP · Established 2026</p>
                    <h1 className="hero-title">
                        Empowering the <em>Next Generation</em> of Global Citizens
                    </h1>
                    <p className="hero-sub">
                        We are a community-driven platform dedicated to creating lasting impact through
                        innovative education and sustainable solutions. Join the movement.
                    </p>
                    <div className="hero-ctas">
                        <Link href="/events" className="cta-btn primary">
                            Explore Events
                            <span className="btn-arrow">→</span>
                        </Link>
                        <Link href="/about" className="cta-btn secondary">
                            Our Story
                        </Link>
                    </div>
                </div>

                <div className="hero-decorations">
                    <div className="blob blob-1"></div>
                    <div className="blob blob-2"></div>
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
                        <div className="vision-icon">🌱</div>
                        <h3>Sustainability</h3>
                        <p>Healing the earth through conscious living and regenerative educational frameworks.</p>
                    </div>
                    <div className="vision-card">
                        <div className="vision-icon">🎓</div>
                        <h3>Education</h3>
                        <p>Bridging the gap with scholarship exams and fellowships for every aspiring mind.</p>
                    </div>
                    <div className="vision-card">
                        <div className="vision-icon">⚡</div>
                        <h3>Empowerment</h3>
                        <p>Providing the tools and networks for individual and community transformation.</p>
                    </div>
                </div>
            </section>

            {/* QUICK STATS */}
            <section className="home-stats">
                <div className="stats-ticker">
                    <div className="ticker-inner">
                        <span>70+ PARTICIPANTS</span>
                        <span>2500+ STUDENTS IMPACTED</span>
                        <span>25+ PARTNERS</span>
                        <span>4M LIVES TARGETED</span>
                        {/* Repeat for seamless loop */}
                        <span>70+ PARTICIPANTS</span>
                        <span>2500+ STUDENTS IMPACTED</span>
                        <span>25+ PARTNERS</span>
                        <span>4M LIVES TARGETED</span>
                    </div>
                </div>
            </section>
        </div>
    );
}
