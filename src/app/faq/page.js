'use client';

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Mail, Phone, ExternalLink } from '@/components/Icons';

const faqData = [
    {
        question: "What is the 'WE HEAL THE EARTH' initiative?",
        answer: "WE HEAL THE EARTH is a flagship initiative by Estah Society focused on regenerative education, environmental sustainability, and community empowerment. Our goal is to create a sustainable future for India by 2047 through grassroots action and systemic change."
    },
    {
        question: "How can I participate in your events?",
        answer: "You can explore our upcoming events on the 'Events' or 'PLANET EARTH' pages. Simply click on an event card to see details and use the participation link provided to register or join the activities."
    },
    {
        question: "Are donations to Estah Society tax-exempt?",
        answer: "Yes, Estah Society is a registered non-profit organization. Donations made to us are eligible for tax exemption under Section 80G of the Income Tax Act. You will receive a formal receipt for your contribution."
    },
    {
        question: "How is the donation money utilized?",
        answer: "Your contributions directly fund our educational programs, environmental restoration projects (like tree plantations and waste management), and community empowerment workshops. We maintain transparency in all our financial dealings."
    },
    {
        question: "How can I volunteer for the mission?",
        answer: "We are always looking for passionate individuals to join our cause. You can reach out to us via email at estahsociety@gmail.com or call us at +91 9008499555 to discuss volunteer opportunities."
    }
];

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <div className="faq-container">
            <header className="faq-hero">
                <div className="hero-content">
                    <span className="eyebrow">Assistance & Clarity</span>
                    <h1 className="hero-title">Frequently Asked <em>Questions</em></h1>
                    <p className="hero-sub">
                        Everything you need to know about our mission, participation,
                        and how we are healing the earth together.
                    </p>
                </div>
            </header>

            <section className="faq-section">
                <div className="faq-list">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className={`faq-item ${openIndex === index ? 'open' : ''}`}
                            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                        >
                            <div className="faq-question">
                                <h3>{item.question}</h3>
                                <div className="faq-toggle">
                                    {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                </div>
                            </div>
                            <div className="faq-answer">
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="faq-contact">
                <div className="contact-card">
                    <h2>Still have questions?</h2>
                    <p>We're here to help. Reach out to our team directly.</p>
                    <div className="contact-methods">
                        <a href="mailto:estahsociety@gmail.com" className="contact-link">
                            <Mail size={18} /> estahsociety@gmail.com
                        </a>
                        <a href="tel:+919008499555" className="contact-link">
                            <Phone size={18} /> +91 90084 99555
                        </a>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .faq-container {
                    background: var(--bg);
                    color: var(--text);
                    min-height: 100vh;
                }
                .faq-hero {
                    padding: 120px 4vw 60px;
                    text-align: center;
                    background: linear-gradient(to bottom, rgba(255,255,255,0.02), transparent);
                }
                .eyebrow {
                    font-size: 0.8rem;
                    font-weight: 800;
                    letter-spacing: 0.2em;
                    color: var(--lime);
                    text-transform: uppercase;
                    margin-bottom: 20px;
                    display: block;
                }
                .hero-title {
                    font-family: var(--font-sans);
                    font-size: clamp(2.5rem, 6vw, 4rem);
                    font-weight: 800;
                    margin-bottom: 24px;
                    line-height: 1.1;
                    letter-spacing: -0.02em;
                }
                .hero-title em { font-style: italic; color: var(--lime); font-weight: 500; }
                .hero-sub {
                    font-size: 1.15rem;
                    opacity: 0.7;
                    max-width: 600px;
                    margin: 0 auto;
                    line-height: 1.6;
                }

                .faq-section {
                    padding: 60px 4vw 100px;
                    max-width: 900px;
                    margin: 0 auto;
                }
                .faq-list {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }
                .faq-item {
                    background: var(--surface1);
                    border-radius: 20px;
                    border: 1px solid rgba(255,255,255,0.05);
                    overflow: hidden;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                .faq-item:hover {
                    border-color: var(--lime);
                    background: rgba(255,255,255,0.03);
                }
                .faq-item.open {
                    background: rgba(255,255,255,0.05);
                    border-color: var(--lime);
                    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                }
                .faq-question {
                    padding: 24px 30px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 20px;
                }
                .faq-question h3 {
                    font-size: 1.1rem;
                    font-weight: 700;
                    margin: 0;
                    line-height: 1.4;
                }
                .faq-toggle {
                    color: var(--lime);
                    flex-shrink: 0;
                }
                .faq-answer {
                    max-height: 0;
                    overflow: hidden;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    opacity: 0;
                }
                .faq-item.open .faq-answer {
                    max-height: 200px;
                    opacity: 1;
                    padding: 0 30px 30px;
                }
                .faq-answer p {
                    margin: 0;
                    font-size: 1rem;
                    line-height: 1.7;
                    opacity: 0.8;
                }

                .faq-contact {
                    padding: 0 4vw 140px;
                    display: flex;
                    justify-content: center;
                }
                .contact-card {
                    background: var(--surface1);
                    padding: 50px;
                    border-radius: 32px;
                    text-align: center;
                    max-width: 600px;
                    width: 100%;
                    border: 1px solid rgba(255,255,255,0.05);
                }
                .contact-card h2 { font-size: 2rem; margin-bottom: 12px; }
                .contact-card p { opacity: 0.7; margin-bottom: 32px; }
                .contact-methods {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 24px;
                }
                .contact-link {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-weight: 700;
                    color: var(--lime);
                    text-decoration: none;
                    transition: opacity 0.2s;
                }
                .contact-link:hover { opacity: 0.8; }

                @media (max-width: 600px) {
                    .faq-hero { padding: 100px 4vw 40px; }
                    .faq-question { padding: 20px; }
                    .faq-item.open .faq-answer { padding: 0 20px 20px; }
                }
            `}</style>
        </div>
    );
}
