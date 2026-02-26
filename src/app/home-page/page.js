import ComingSoon from '@/components/ComingSoon';

export const metadata = {
    title: 'Home — Events MVP',
    description: 'Our full homepage with our story, mission, and community highlights is coming soon.',
};

const svgContent = '<svg width="100%" height="100%" viewBox="0 0 800 600"><circle cx="400" cy="300" r="250" fill="none" stroke="rgba(201,168,76,.08)" stroke-width="1"/><circle cx="400" cy="300" r="180" fill="none" stroke="rgba(201,168,76,.06)" stroke-width="1"/><circle cx="400" cy="300" r="110" fill="none" stroke="rgba(201,168,76,.04)" stroke-width="1"/></svg>';

export default function HomePage() {
    return (
        <ComingSoon
            icon="🏠"
            pageName="Home"
            title="A New Home for Events MVP"
            subtitle="Our full homepage with our story, mission, and community highlights is in the works."
            svgContent={svgContent}
        />
    );
}
