import ComingSoon from '@/components/ComingSoon';

export const metadata = {
    title: 'Contact — Events MVP',
    description: 'Get in touch with Events MVP — partners, volunteers, donors welcome.',
};

const svgContent = '<svg width="100%" height="100%" viewBox="0 0 800 600"><path d="M200,300 Q400,100 600,300 Q400,500 200,300" fill="none" stroke="rgba(201,168,76,.06)" stroke-width="1"/><path d="M250,300 Q400,150 550,300 Q400,450 250,300" fill="none" stroke="rgba(201,168,76,.04)" stroke-width="1"/></svg>';

export default function ContactPage() {
    return (
        <ComingSoon
            icon="✉️"
            pageName="Contact"
            title="Let's Build Together"
            subtitle="Whether you're a partner, volunteer, donor, or simply curious — we'd love to connect."
            svgContent={svgContent}
        />
    );
}
