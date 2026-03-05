'use client';
import Link from 'next/link';
import { Globe, Instagram, Linkedin, Youtube, Facebook, MessageCircle, Mail, Phone, MapPin, ArrowUpRight } from './Icons';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-grid">
                    {/* Column 1: Brand & Socials */}
                    <div className="footer-col brand-col">
                        <div className="footer-brand-logo">
                            <img src="/estah-logo.png" alt="Estah Logo" className="logo-img-footer" />
                            <span className="brand-text">WE HEAL THE EARTH</span>
                        </div>
                        <p className="footer-desc">
                            Dedicated to consistent environmental action throughout the year,
                            addressing ecological and social challenges through innovative
                            community-driven initiatives for a sustainable future.
                        </p>
                        <div className="social-links-row">
                            <a href="https://www.instagram.com/estahsocietyindia/" target="_blank" rel="noopener noreferrer" className="social-icon-btn" title="Instagram">
                                <Instagram size={18} />
                            </a>
                            <a href="https://in.linkedin.com/company/estah-society" target="_blank" rel="noopener noreferrer" className="social-icon-btn" title="LinkedIn">
                                <Linkedin size={18} />
                            </a>
                            <a href="https://www.youtube.com/@estah_society" target="_blank" rel="noopener noreferrer" className="social-icon-btn" title="YouTube">
                                <Youtube size={18} />
                            </a>
                            <a href="https://www.facebook.com/estah.org/" target="_blank" rel="noopener noreferrer" className="social-icon-btn" title="Facebook">
                                <Facebook size={18} />
                            </a>
                            <a href="https://wa.me/919810196405" target="_blank" rel="noopener noreferrer" className="social-icon-btn" title="WhatsApp">
                                <MessageCircle size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Navigation */}
                    <div className="footer-col links-col">
                        <h4 className="footer-header">Quick Navigation</h4>
                        <ul className="footer-nav-list">
                            <li><Link href="/home-page">Home</Link></li>
                            <li><Link href="/events">Events</Link></li>
                            <li><Link href="/programs">Planet Earth</Link></li>
                            <li><Link href="/blog">Blog</Link></li>
                            <li><Link href="/gallery">Gallery</Link></li>
                            <li><Link href="/faq">FAQ</Link></li>
                            <li><Link href="/donate">Donate</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact & Support */}
                    <div className="footer-col contact-col">
                        <h4 className="footer-header">Get In Touch</h4>
                        <div className="contact-details-grid">
                            <a href="mailto:hello@estah.org" className="contact-link-item">
                                <Mail size={16} />
                                <span>hello@estah.org</span>
                            </a>
                            <a href="tel:+919008499555" className="contact-link-item">
                                <Phone size={16} />
                                <span>+91 90084 99555</span>
                            </a>
                            <div className="contact-link-item">
                                <MapPin size={16} />
                                <span style={{ whiteSpace: 'normal' }}>Bangalore, Karnataka, India</span>
                            </div>
                            <div style={{ marginTop: '12px' }}>
                                <Link href="/donate" className="highlight-link">Donate Now <ArrowUpRight size={14} /></Link>
                            </div>
                        </div>
                    </div>

                    {/* Column 4: Newsletter */}
                    <div className="footer-col footer-newsletter">
                        <h4 className="footer-header">Impact & Updates</h4>
                        <p className="footer-desc">
                            Join our community to receive updates on our latest environmental initiatives and impact stories.
                        </p>
                        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="newsletter-input-group">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="newsletter-input"
                                    required
                                />
                                <button type="submit" className="newsletter-submit-btn" title="Subscribe">
                                    <ArrowUpRight size={18} />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="footer-divider" />

                <div className="footer-copyright-bar">
                    <p>© {new Date().getFullYear()} Estah Society. All Rights Reserved.</p>
                    <p className="powered-by">Education · Sustainability · Empowerment</p>
                </div>
            </div>
        </footer>
    );
}
