import Link from 'next/link';
import { FileText, Handshake, Building2 } from '@/components/Icons';

export const metadata = {
    title: 'Programs — Events MVP',
    description: 'Explore our key initiatives: Scholarship Exams, Rural Fellowships, and Sustainable Schools.',
};

const programs = [
    {
        title: 'Education Scholarship Exam',
        icon: <FileText size={32} />,
        desc: 'Identifying and supporting brilliant minds from underprivileged backgrounds through merit-based scholarship programs.',
        tags: ['Education', 'Grassroots'],
        color: 'var(--sky)'
    },
    {
        title: 'Rural Fellowship Program',
        icon: <Handshake size={32} />,
        desc: 'A 2-year dedicated program for young leaders to work directly with rural communities on education and sustainability.',
        tags: ['Leadership', 'Impact'],
        color: 'var(--coral)'
    },
    {
        title: 'Sustainable Schools',
        icon: <Building2 size={32} />,
        desc: 'Integrating green energy, zero-waste practices, and environmental education into the core of Indian schools.',
        tags: ['Sustainability', 'Innovation'],
        color: 'var(--lime)'
    }
];

export default function ProgramsPage() {
    return (
        <div className="programs-container">
            {/* HERO */}
            <section className="programs-hero">
                <div className="hero-content">
                    <p className="eyebrow">Initiatives</p>
                    <h1 className="hero-title">
                        Transforming <em>Potential</em> into <em>Progress</em>
                    </h1>
                    <p className="hero-sub">
                        From scholarship exams to intensive community fellowships, discover the
                        targeted programs we run to create a sustainable and equitable future.
                    </p>
                </div>
            </section>

            {/* PROGRAMS GRID */}
            <section className="programs-grid-section">
                <div className="grid-container">
                    {programs.map((p, i) => (
                        <div key={i} className="program-card" style={{ '--accent': p.color }}>
                            <div className="p-header">
                                <span className="p-icon">{p.icon}</span>
                                <div className="p-tags">
                                    {p.tags.map(tag => <span key={tag} className="p-tag">{tag}</span>)}
                                </div>
                            </div>
                            <h3 className="p-title">{p.title}</h3>
                            <p className="p-desc">{p.desc}</p>
                            <div className="p-footer">
                                <button className="p-cta">Learn More</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="programs-cta">
                <div className="cta-box">
                    <h2>Want to <em>Partner</em> with us?</h2>
                    <p>We are always looking for institutional partners and corporate sponsors to scale our impact.</p>
                    <Link href="/contact" className="cta-btn secondary">
                        Get in Touch
                    </Link>
                </div>
            </section>
        </div>
    );
}
