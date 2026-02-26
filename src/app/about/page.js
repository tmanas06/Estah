import ComingSoon from '@/components/ComingSoon';

export const metadata = {
    title: 'About Us — Estah Society',
    description: 'Learn about the people, purpose, and passion driving Estah Society.',
};

const svgContent = '<svg width="100%" height="100%" viewBox="0 0 800 600"><polygon points="400,50 750,550 50,550" fill="none" stroke="rgba(78,140,111,.08)" stroke-width="1"/><polygon points="400,120 680,500 120,500" fill="none" stroke="rgba(78,140,111,.06)" stroke-width="1"/><polygon points="400,190 610,450 190,450" fill="none" stroke="rgba(78,140,111,.04)" stroke-width="1"/></svg>';

export default function AboutPage() {
    return (
        <ComingSoon
            icon="🌱"
            pageName="About Us"
            title="Our Story Unfolds Soon"
            subtitle="Learn about the people, purpose, and passion driving Estah Society's work across India."
            svgContent={svgContent}
        />
    );
}
