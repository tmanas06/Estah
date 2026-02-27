import ImpactDashboard from '@/components/ImpactDashboard';

export const metadata = {
    title: 'Impact — Events MVP',
    description: 'Measuring what matters: Students impacted, fellowships awarded, and community transformation metrics.',
};

export default function ImpactPage() {
    return (
        <div className="impact-container">
            {/* HERO */}
            <section className="impact-hero">
                <div className="hero-content">
                    <p className="eyebrow">Data for Good</p>
                    <h1 className="hero-title">
                        Measuring what <em>Matters</em>
                    </h1>
                    <p className="hero-sub">
                        Transparency is at our core. Here is a live look at the impact we are
                        creating across India through our education and sustainability programs.
                    </p>
                </div>
            </section>

            {/* STATS DASHBOARD (Client Component) */}
            <ImpactDashboard />

            {/* FRAMEWORK FOCUS */}
            <section className="impact-framework">
                <div className="framework-split">
                    <div className="f-content">
                        <p className="section-label">Our Framework</p>
                        <h2 className="section-title">Beyond the <em>Numbers</em></h2>
                        <p>
                            Impact isn't just about how many people we reach; it's about the depth
                            of transformation. Our "WE HEAL THE EARTH" framework ensures that
                            every educational milestone is tied to a sustainable future.
                        </p>
                        <div className="f-list">
                            <div className="f-item">
                                <strong>Social Responsibility</strong>
                                <p>Fostering a sense of giving back in every student we support.</p>
                            </div>
                            <div className="f-item">
                                <strong>Environmental Stewardship</strong>
                                <p>Practical climate action integrated into rural fellowships.</p>
                            </div>
                        </div>
                    </div>
                    <div className="f-visual">
                        <div className="visual-circle">
                            <div className="v-inner">THE EARTH</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
