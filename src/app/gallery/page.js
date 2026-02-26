import ComingSoon from '@/components/ComingSoon';

export const metadata = {
    title: 'Gallery — Events MVP',
    description: 'Photos and moments from our events and programs across India.',
};

const svgContent = '<svg width="100%" height="100%" viewBox="0 0 800 600"><rect x="100" y="100" width="200" height="150" rx="8" fill="none" stroke="rgba(201,168,76,.06)" stroke-width="1"/><rect x="350" y="200" width="200" height="150" rx="8" fill="none" stroke="rgba(201,168,76,.05)" stroke-width="1"/><rect x="500" y="80" width="180" height="120" rx="8" fill="none" stroke="rgba(201,168,76,.04)" stroke-width="1"/><rect x="150" y="320" width="220" height="160" rx="8" fill="none" stroke="rgba(201,168,76,.04)" stroke-width="1"/></svg>';

export default function GalleryPage() {
    return (
        <ComingSoon
            icon="🖼️"
            pageName="Gallery"
            title="Memories of Impact"
            subtitle="Photos and moments from our events and programs across India — gallery coming soon."
            svgContent={svgContent}
        />
    );
}
