'use client';

import { Leaf, GraduationCap, Zap } from '@/components/Icons';

export default function AboutUsPage() {
    const trustees = [
        { name: "V ATCHUTA RAO", title: "Founder" },
        { name: "JAYAKAR RAO", title: "Trustee" },
        { name: "BHASKAR REDDY DASARI", title: "Trustee" },
        { name: "VENKAT REDDY", title: "Trustee" },
        { name: "CHERKURI VAGDEVI", title: "Trustee" },
        { name: "V GRACE EVELYN", title: "Trustee" }
    ];

    const team = [
        "BHARATH PAPILI REDDY", "DEVANG RAJA", "DR ACHARYA MURALIDHAR",
        "DR VIVEKNANDA SWAMY", "DR RAMAMURTHY KRISHNA MURTHY", "HANNAH GRACE",
        "PRASANTH KUMAR B", "NB NAIK", "RAGHAVA REDDY", "REBECCA SELF",
        "SAGAR T", "SAMPAT ALTHUR", "SRINIVASAN THIMMARAYANI", "STANDLY K",
        "SUNIL REDDY", "TANUSHRI DASGUPTA", "VENKATESH LS", "VINDA",
        "ARUL JAMES", "Dr Chandrashekhar Biradar"
    ];

    return (
        <div className="about-container">
            {/* HERO SECTION */}
            <section className="about-hero">
                <div className="hero-content center">
                    <p className="eyebrow">ABOUT ESTAH SOCIETY</p>
                    <h1 className="hero-title">
                        Empowering Positive <em>Global Change</em>
                    </h1>
                    <p className="hero-sub">
                        ESTAH as a platform envisions a world where Sustainable Development Goals (SDGs)
                        and Environmental, Social, and Governance (ESG) principles are at the core of human progress.
                    </p>
                </div>
                <div className="hero-decorations">
                    <div className="blob blob-1"></div>
                    <div className="blob blob-2"></div>
                </div>
            </section>

            {/* VISION & VALUES */}
            <section className="about-vision">
                <div className="vision-container">
                    <div className="v-card">
                        <div className="v-icon"><Leaf size={32} /></div>
                        <h3>Our Vision</h3>
                        <p>
                            We engage with like-minded established corporations, investors and leading influencers
                            to drive impactful, sustainable initiatives globally.
                        </p>
                    </div>
                    <div className="v-card highlight">
                        <div className="v-icon"><Zap size={32} /></div>
                        <h3>Our Values</h3>
                        <p>
                            Estah Society Family Works Through <strong>GIVE</strong>. We are here to assist
                            you to develop and deploy your CSR initiatives.
                        </p>
                    </div>
                </div>
            </section>

            {/* FOUNDER & TRUSTEES */}
            <section className="about-leadership">
                <div className="section-header center">
                    <p className="section-label">Leadership</p>
                    <h2 className="section-title">Founder & <em>Trustees</em></h2>
                </div>
                <div className="trustees-grid">
                    {trustees.map((person, idx) => (
                        <div className="trustee-card" key={idx}>
                            <div className="t-avatar">{person.name.charAt(0)}</div>
                            <div className="t-info">
                                <h4>{person.name}</h4>
                                <span className="t-role">{person.title}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* THE TEAM */}
            <section className="about-team">
                <div className="section-header center">
                    <p className="section-label">The People</p>
                    <h2 className="section-title">Our <em>Team</em></h2>
                </div>
                <div className="team-grid">
                    {team.map((member, idx) => (
                        <div className="team-pill" key={idx}>
                            <span>{member}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="about-cta">
                <div className="cta-box">
                    <div className="cta-inner">
                        <h2 className="cta-title">Ready to <em>Heal the Earth?</em></h2>
                        <a href="https://pages.razorpay.com/pl_HkMCyxeXURf9kK/view" target="_blank" rel="noopener noreferrer" className="cta-btn primary">Support the Cause</a>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .about-container {
                    background: var(--bg);
                    color: var(--text);
                    min-height: 100vh;
                    padding-top: var(--nav-h);
                }

                .center { text-align: center; }

                /* HERO */
                .about-hero {
                    position: relative;
                    padding: 120px 4vw 80px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                    border-bottom: 1px solid rgba(255,255,255,0.05);
                }
                .hero-content {
                    position: relative;
                    z-index: 2;
                    max-width: 900px;
                    margin: 0 auto;
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
                    font-size: var(--fs-h1);
                    line-height: 1.1;
                    margin-bottom: 24px;
                    font-weight: 900;
                    letter-spacing: -0.03em;
                }
                .hero-title em { font-style: italic; color: var(--lime); font-weight: 900; }
                .hero-sub {
                    font-size: 1.25rem;
                    opacity: 0.8;
                    max-width: 700px;
                    margin: 0 auto;
                    line-height: 1.6;
                }
                
                /* DECORATIONS */
                .blob { position: absolute; filter: blur(100px); opacity: 0.1; z-index: 0; border-radius: 50%; }
                .blob-1 { top: -10%; left: -10%; width: 500px; height: 500px; background: var(--lime); }
                .blob-2 { bottom: -10%; right: -10%; width: 400px; height: 400px; background: var(--sky); }

                /* VISION */
                .about-vision {
                    padding: 100px 4vw;
                    background: var(--surface1);
                }
                .vision-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 40px;
                }
                .v-card {
                    padding: 60px;
                    background: var(--bg);
                    border-radius: 32px;
                    border: 1px solid rgba(255,255,255,0.05);
                }
                .v-card.highlight {
                    background: linear-gradient(135deg, var(--surface2), var(--surface3));
                    border-color: var(--lime);
                }
                .v-icon { color: var(--lime); margin-bottom: 24px; }
                .v-card.highlight .v-icon { color: white; }
                .v-card h3 { font-family: var(--font-sans); font-size: 2rem; margin-bottom: 16px; font-weight: 900; }
                .v-card p { opacity: 0.8; line-height: 1.7; font-size: 1.1rem; }

                /* HEADERS */
                .section-header { margin-bottom: 60px; }
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
                    font-size: var(--fs-h2);
                    font-weight: 900;
                    letter-spacing: -0.01em;
                }
                .section-title em { font-style: italic; color: var(--lime); font-weight: 900; }

                /* TRUSTEES */
                .about-leadership {
                    padding: 100px 4vw;
                    max-width: 1200px;
                    margin: 0 auto;
                }
                .trustees-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 24px;
                }
                .trustee-card {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    background: var(--surface1);
                    padding: 24px;
                    border-radius: 20px;
                    border: 1px solid rgba(255,255,255,0.05);
                    transition: transform 0.3s ease;
                }
                .trustee-card:hover { transform: translateY(-5px); border-color: var(--lime); }
                .t-avatar {
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    background: var(--lime);
                    color: var(--bg);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.5rem;
                    font-weight: 900;
                }
                .t-info h4 { font-size: 1.1rem; margin-bottom: 4px; }
                .t-role { font-size: 0.85rem; color: var(--lime); font-weight: 700; text-transform: uppercase; }

                /* TEAM */
                .about-team {
                    padding: 60px 4vw 140px;
                    max-width: 1400px;
                    margin: 0 auto;
                }
                .team-grid {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 16px;
                    justify-content: center;
                }
                .team-pill {
                    padding: 16px 24px;
                    background: var(--surface1);
                    border: 1px solid rgba(255,255,255,0.05);
                    border-radius: 100px;
                    font-size: 0.95rem;
                    font-weight: 700;
                    color: var(--text);
                    transition: all 0.3s ease;
                }
                .team-pill:hover {
                    background: var(--lime);
                    color: var(--bg);
                    transform: scale(1.05);
                }

                /* CTA */
                .about-cta {
                    padding: 0 4vw 140px;
                }
                .cta-box {
                    max-width: 1000px;
                    margin: 0 auto;
                    background: linear-gradient(135deg, var(--lime), #4E8C6F);
                    border-radius: 40px;
                    padding: 80px 40px;
                    text-align: center;
                    color: var(--bg);
                }
                .cta-title { font-family: var(--font-sans); font-size: 3rem; font-weight: 900; margin-bottom: 40px; }
                .cta-title em { font-style: italic; color: white; }
                .cta-btn {
                    padding: 18px 40px;
                    background: white;
                    color: var(--bg);
                    font-weight: 900;
                    border-radius: 14px;
                    text-decoration: none;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    transition: transform 0.3s ease;
                    display: inline-block;
                }
                .cta-btn:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(0,0,0,0.2); }

                @media (max-width: 1024px) {
                    .vision-container { grid-template-columns: 1fr; }
                    .trustees-grid { grid-template-columns: repeat(2, 1fr); }
                }

                @media (max-width: 640px) {
                    .about-hero { padding: 80px 4vw 60px; }
                    .v-card { padding: 40px 30px; }
                    .trustees-grid { grid-template-columns: 1fr; }
                    .cta-title { font-size: 2rem; }
                    .cta-box { padding: 60px 20px; }
                }
            `}</style>
        </div>
    );
}
