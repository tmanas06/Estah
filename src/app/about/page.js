export const metadata = {
    title: 'About Us — Events MVP',
    description: 'Learn about the people, purpose, and passion driving Events MVP and our mission for India 2047.',
};

export default function AboutPage() {
    return (
        <div className="about-container">
            {/* HER0 */}
            <section className="about-hero">
                <div className="hero-content">
                    <p className="eyebrow">Our Story</p>
                    <h1 className="hero-title">
                        Driven by <em>Passion</em>, Sustained by <em>Purpose</em>
                    </h1>
                    <p className="hero-sub">
                        Events MVP is a community-driven initiative empowering communities through education,
                        entrepreneurship, and sustainability under the WE HEAL THE EARTH framework.
                    </p>
                </div>
            </section>

            {/* THE JOURNEY */}
            <section className="about-split">
                <div className="split-img">
                    <img src="https://skillbloomer.com/uploads/events/1770985327_698f176f3b880_featured.jpg" alt="Our Journey" />
                    <div className="img-caption">Empowering over 2500+ students across India.</div>
                </div>
                <div className="split-content">
                    <p className="section-label">The Journey</p>
                    <h2 className="section-title">Bridging the Gap</h2>
                    <p>
                        Our journey began with a simple observation: talent is universal, but opportunity is not.
                        We started as a small group of educators and social activists with a vision to
                        democratize quality education and create high-impact community solutions.
                    </p>
                    <p>
                        Today, we are bridging the gap through large-scale scholarship exams,
                        intensive fellowships, and sustainable development projects that transform
                        lives from the grassroots up.
                    </p>
                </div>
            </section>

            {/* WE HEAL THE EARTH */}
            <section className="about-framework">
                <div className="framework-card">
                    <div className="framework-brand">
                        <span className="brand-icon">🌏</span>
                        <h3>WE HEAL THE EARTH</h3>
                    </div>
                    <div className="framework-desc">
                        <p>
                            Our core philosophy is simple: we cannot have thriving communities on a dying planet.
                            The WE HEAL THE EARTH framework integrates sustainability into every program we run.
                        </p>
                        <div className="framework-points">
                            <div className="f-point">
                                <span className="p-icon">♻️</span>
                                <div>
                                    <strong>Regenerative Education</strong>
                                    <p>Teaching students not just how to succeed, but how to sustain.</p>
                                </div>
                            </div>
                            <div className="f-point">
                                <span className="p-icon">🏗️</span>
                                <div>
                                    <strong>Solution-Based Action</strong>
                                    <p>Building real-world solutions for local community challenges.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* VISION 2047 */}
            <section className="about-vision">
                <div className="vision-box">
                    <p className="section-label">Vision 2047</p>
                    <h2 className="vision-title">India at 100</h2>
                    <p className="vision-text">
                        We are committed to the vision of a developed India by 2047.
                        By focusing on education and entrepreneurship today, we are
                        building the leaders of tomorrow.
                    </p>
                    <div className="vision-btn-wrap">
                        <button className="vision-cta">Join the Mission</button>
                    </div>
                </div>
            </section>
        </div>
    );
}
