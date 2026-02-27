import ContactForm from '@/components/ContactForm';

export const metadata = {
    title: 'Contact — Events MVP',
    description: 'Get in touch with Events MVP — partners, volunteers, and donors welcome.',
};

export default function ContactPage() {
    return (
        <div className="contact-container">
            {/* HERO */}
            <section className="contact-hero">
                <div className="hero-content">
                    <p className="eyebrow">Connect</p>
                    <h1 className="hero-title">
                        Let's build <em>Together</em>
                    </h1>
                    <p className="hero-sub">
                        Whether you are a donor, volunteer, or potential partner, we would love to
                        hear from you. Use the form below or drop by our office.
                    </p>
                </div>
            </section>

            {/* CONTACT SPLIT */}
            <section className="contact-split">
                <div className="contact-info">
                    <div className="info-card">
                        <h3>Our Office</h3>
                        <p>
                            Gachibowli Stadium<br />
                            Old Mumbai Highway<br />
                            Gachibowli, Hyderabad<br />
                            Telangana, India 500032
                        </p>
                    </div>
                    <div className="info-card">
                        <h3>Direct Links</h3>
                        <div className="direct-links">
                            <a href="mailto:contact@eventsmvp.org" className="direct-link">Email Us</a>
                            <a href="#" className="direct-link">Join Volunteer WhatsApp</a>
                        </div>
                    </div>
                </div>

                <div className="contact-form-wrap">
                    <ContactForm />
                </div>
            </section>
        </div>
    );
}
