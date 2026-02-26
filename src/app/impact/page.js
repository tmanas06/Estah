import ComingSoon from '@/components/ComingSoon';

export const metadata = {
    title: 'Impact — Events MVP',
    description: 'Live data on students impacted, fellowships awarded, and communities transformed.',
};

const svgContent = '<svg width="100%" height="100%" viewBox="0 0 800 600"><ellipse cx="400" cy="300" rx="300" ry="200" fill="none" stroke="rgba(78,140,111,.07)" stroke-width="1"/><ellipse cx="400" cy="300" rx="200" ry="130" fill="none" stroke="rgba(78,140,111,.05)" stroke-width="1"/><line x1="100" y1="300" x2="700" y2="300" stroke="rgba(78,140,111,.04)" stroke-width="1"/><line x1="400" y1="100" x2="400" y2="500" stroke="rgba(78,140,111,.04)" stroke-width="1"/></svg>';

export default function ImpactPage() {
    return (
        <ComingSoon
            icon="🌍"
            pageName="Impact"
            title="Measuring What Matters"
            subtitle="Live data on students impacted, fellowships awarded, and communities transformed — launching soon."
            svgContent={svgContent}
        />
    );
}
