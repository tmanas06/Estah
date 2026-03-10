'use client';

import { Leaf, GraduationCap, Zap } from '@/components/Icons';

export default function AboutUsPage() {
    const trustees = [
        { name: "V ATCHUTA RAO", title: "Founder", img: "https://estah.org/wp-content/uploads/elementor/thumbs/1701503690183-removebg-preview-quwinh8ibqxzx90sc7exh06xnlgd1lgte318cmvmj4.jpg" },
        { name: "JAYAKAR RAO", title: "Trustee", img: "https://estah.org/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2025-06-12-at-10.31.57-AM-removebg-preview-1-1-r76nyytre0wg4oflmrew6iv28xm6m4zvh0umdf8n2o.jpg" },
        { name: "BHASKAR REDDY DASARI", title: "Trustee", img: "https://estah.org/wp-content/uploads/elementor/thumbs/1517725513392-removebg-preview-r76npcx5izqxg6e1qlw6oy5fn4z3xiunhgrxrlhiog.jpg" },
        { name: "VENKAT REDDY", title: "Trustee", img: "https://estah.org/wp-content/uploads/elementor/thumbs/Screenshot-from-2024-10-01-09-46-09-quwgw8nej0ditovnlvcipyoiwd5d6oexd2z80gn55c.png" },
        { name: "CHERKURI VAGDEVI", title: "Trustee", img: "https://estah.org/wp-content/uploads/elementor/thumbs/bg-image-quwgpdfulkz408uqpehn072ao0ztya5ir3eisotols.jpg" },
        { name: "V GRACE EVELYN", title: "Trustee", img: "https://estah.org/wp-content/uploads/elementor/thumbs/18-quwgytpfblwwr34hihkl2t75piepcpocpvkaiut61c.png" }
    ];

    const team = [
        { name: "BHARATH PAPILI REDDY", title: "CEO ENTERTAINMENT", img: "https://estah.org/wp-content/uploads/elementor/thumbs/12-1-qu8imo5tngt2qghnkhcc1p0zr33bewjbvkwdwwabps.png" },
        { name: "DEVANG RAJA", title: "CEO INVESTMENT", img: "https://estah.org/wp-content/uploads/elementor/thumbs/1678234380153-removebg-preview-qum8q5qhz0jd9t664pyvyl1jpotrsemr3h0uzolmmo.jpg" },
        { name: "DR ACHARYA MURALIDHAR", title: "CEO HEALTH & WELLNESS", img: "https://estah.org/wp-content/uploads/elementor/thumbs/21-quwgwv7j318ekbyvy53kdszl5m26bewhg6mvj3pp00.png" },
        { name: "DR VIVEKNANDA SWAMY", title: "CEO HEALTH", img: "https://estah.org/wp-content/uploads/elementor/thumbs/Screenshot-from-2024-10-01-09-47-11-quwgy0kffqt0r6at8mz5fijvakebq3go9vc8na0de8.png" },
        { name: "DR RAMAMURTHY KRISHNA MURTHY", title: "CEO TRANSPORT", img: "https://estah.org/wp-content/uploads/elementor/thumbs/Screenshot-from-2024-10-01-09-42-56-quwgra22ghl1js32kq5ek7qy15lmk6pxcj0ytvzxzk.png" },
        { name: "HANNAH GRACE", title: "CRM ESTAH SOCIETY", img: "https://estah.org/wp-content/uploads/elementor/thumbs/1721972033857-removebg-preview-quwis3lxxf9r08b4cpbw8c7issobw0tb0yi6am0xxs.jpg" },
        { name: "PRASANTH KUMAR B", title: "GRAPHIC DESIGNER", img: "https://estah.org/wp-content/uploads/elementor/thumbs/Linkedin-profile-ASF-1-r1j3k9pxpzimtlmcvy60h9gglq3zyv6b7wqt7bs72o.png" },
        { name: "NB NAIK", title: "CEO AGRICULTURE", img: "https://estah.org/wp-content/uploads/elementor/thumbs/Screenshot-from-2024-10-01-09-29-56-quwgp5x52wotfd5nxb8mg8ylwy0w8pbo226myh4tzk.png" },
        { name: "RAGHAVA REDDY", title: "CEO LIVESTOCK", img: "https://estah.org/wp-content/uploads/elementor/thumbs/Screenshot-from-2024-10-01-09-53-22-quwh7jniq9uoguggl99z7lz447farmap91ggt9vob4.png" },
        { name: "REBECCA SELF", title: "CEO ENERGY", img: "https://estah.org/wp-content/uploads/elementor/thumbs/1702987796160-removebg-preview-qum687khyrek95tsdc94us6l9a6a74jge9l4pfyw28.jpg" },
        { name: "SAGAR T", title: "CEO TECHNOLOGY", img: "https://estah.org/wp-content/uploads/elementor/thumbs/Linkedin-profile-ASF--r1j2neb4pkimsjdbu8mps234pm4vrxo917ehzyiuog.png" },
        { name: "SAMPAT ALTHUR", title: "CEO HOUSING", img: "https://estah.org/wp-content/uploads/elementor/thumbs/5-qtw0gfl0djot7syem8ux6a6r8hksv0w725chkhfrgw.png" },
        { name: "SRINIVASAN THIMMARAYANI", title: "CEO EDUCATION", img: "https://estah.org/wp-content/uploads/elementor/thumbs/Screenshot-from-2024-10-01-09-48-45-quwh0isxnu8jpqnqlpzc2vs4bk1k91ewm9yupuaksw.png" },
        { name: "STANDLY K", title: "CEO HUB", img: "https://estah.org/wp-content/uploads/elementor/thumbs/17-quwh2clmy8qmag05xif7xf6dwj197uo47bmub7l0pc.png" },
        { name: "SUNIL REDDY", title: "CEO REWARDS", img: "https://estah.org/wp-content/uploads/elementor/thumbs/Screenshot-from-2024-10-01-09-50-41-quwh3g2uxa8nu2etizhju57qupmo750ucr18gtyhg0.png" },
        { name: "TANUSHRI DASGUPTA", title: "CEO ENVIRONMENT", img: "https://estah.org/wp-content/uploads/elementor/thumbs/1563815279194-removebg-preview-quwhpsopfgu3w9y30na74i6bcjgv81r2rdgv9othhs.jpg" },
        { name: "VENKATESH LS", title: "CEO ASSESSMENT", img: "https://estah.org/wp-content/uploads/elementor/thumbs/bg-image-18-quwhmffixu84aku7oovbourupu2in3dpapb8czt9sg.jpg" },
        { name: "VINDA", title: "CEO TRAINING", img: "https://estah.org/wp-content/uploads/elementor/thumbs/1628081254276-removebg-preview-qum6zpcjvb1hujw2tq3aaceys0nsceot6cjf1t7c28.jpg" },
        { name: "ARUL JAMES", title: "CEO AGRICULTURE", img: "https://estah.org/wp-content/uploads/elementor/thumbs/1696304036845-removebg-preview-r1rtv10bqekgkgaxnbcvcitpq73xaezairfq11a18w.jpg" },
        { name: "Dr Chandrashekhar Biradar", title: "CEO AGRICULTURE", img: "https://estah.org/wp-content/uploads/elementor/thumbs/1732638338543-1-removebg-preview-r1rtzdzdfqjcfbyx6p7kex7oxjm7zvagscdt68tads.jpg" }
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
                            <div className="t-avatar">
                                {person.img ? (
                                    <img src={person.img} alt={person.name} className="t-avatar-img" />
                                ) : (
                                    person.name.charAt(0)
                                )}
                            </div>
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
                        <div className="team-card" key={idx}>
                            <div className="t-avatar">
                                {member.img ? (
                                    <img src={member.img} alt={member.name} className="t-avatar-img" />
                                ) : (
                                    member.name.charAt(0)
                                )}
                            </div>
                            <div className="t-info">
                                <h4>{member.name}</h4>
                                <span className="t-role">{member.title}</span>
                            </div>
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

                /* TRUSTEES & TEAM */
                .about-leadership, .about-team {
                    padding: 80px 4vw;
                    max-width: 1400px;
                    margin: 0 auto;
                }
                .trustees-grid, .team-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 24px;
                }
                .trustee-card, .team-card {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    background: var(--surface1);
                    padding: 24px;
                    border-radius: 20px;
                    border: 1px solid rgba(255,255,255,0.05);
                    transition: transform 0.3s ease;
                }
                .trustee-card:hover, .team-card:hover { transform: translateY(-5px); border-color: var(--lime); }
                .t-avatar {
                    width: 70px;
                    height: 70px;
                    border-radius: 50%;
                    background: var(--lime);
                    color: var(--bg);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.5rem;
                    font-weight: 900;
                    overflow: hidden;
                    flex-shrink: 0;
                }
                .t-avatar-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .t-info h4 { font-size: 1.1rem; margin-bottom: 4px; line-height: 1.3; }
                .t-role { font-size: 0.8rem; color: var(--lime); font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; }

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
                    .trustees-grid, .team-grid { grid-template-columns: repeat(2, 1fr); }
                }

                @media (max-width: 640px) {
                    .about-hero { padding: 80px 4vw 60px; }
                    .v-card { padding: 40px 30px; }
                    .trustees-grid, .team-grid { grid-template-columns: 1fr; }
                    .cta-title { font-size: 2rem; }
                    .cta-box { padding: 60px 20px; }
                }
            `}</style>
        </div>
    );
}
