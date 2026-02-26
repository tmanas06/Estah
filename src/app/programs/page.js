import ComingSoon from '@/components/ComingSoon';

export const metadata = {
    title: 'Programs — Estah Society',
    description: 'From scholarship exams to Education Fellowships — see how we create impact.',
};

const svgContent = '<svg width="100%" height="100%" viewBox="0 0 800 600"><rect x="200" y="100" width="400" height="400" rx="40" fill="none" stroke="rgba(201,168,76,.06)" stroke-width="1" transform="rotate(15 400 300)"/><rect x="250" y="150" width="300" height="300" rx="30" fill="none" stroke="rgba(201,168,76,.04)" stroke-width="1" transform="rotate(30 400 300)"/></svg>';

export default function ProgramsPage() {
    return (
        <ComingSoon
            icon="📚"
            pageName="Programs"
            title="Explore Our Programs"
            subtitle="From scholarship exams to Education Fellowships — a full overview of how we create impact is coming."
            svgContent={svgContent}
        />
    );
}
