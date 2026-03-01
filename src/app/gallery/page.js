import GalleryGrid from '@/components/GalleryGrid';
import HeroBackground from '@/components/HeroBackground';

export const metadata = {
    title: 'Gallery — Events MVP',
    description: 'A visual journey through our community events, scholarship exams, and impact projects across India.',
};

export default function GalleryPage() {
    return (
        <div className="gallery-container">
            {/* HERO */}
            <section className="gallery-hero">
                <HeroBackground />
                <div className="hero-content">
                    <p className="eyebrow">Visual Journey</p>
                    <h1 className="hero-title">
                        Memories of <em>Impact</em>
                    </h1>
                    <p className="hero-sub">
                        Explore moments of joy, hard work, and transformation from our various
                        initiatives across the country.
                    </p>
                </div>
            </section>

            {/* Gallery Grid (Client Component) */}
            <GalleryGrid />
        </div>
    );
}
