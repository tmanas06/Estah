'use client';

import React, { useState } from 'react';
import HeroBackground from '@/components/HeroBackground';
import { ChevronDown, ChevronUp, Mail, Phone } from '@/components/Icons';

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
                <HeroBackground />
                <div className="hero-split">
                    <div className="hero-content">
                        <span className="eyebrow">Assistance & Clarity</span>
                        <h1 className="hero-title">Frequently Asked <em>Questions</em></h1>
                        <p className="hero-sub">
                            Everything you need to know about our mission, participation,
                            and how we are healing the earth together.
                        </p>
                    </div>
                    <div className="hero-image-wrap">
                        <img src="/faq-hero.png" alt="Guidance and Support" className="hero-img-main" />
                        <div className="hero-img-backdrop"></div>
                    </div>
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
                .faq-hero {
                    position: relative;
                    padding: var(--gap-xl) var(--container-px);
                    min-height: 70vh;
                    display: flex;
                    align-items: center;
                    overflow: hidden;
                    background: var(--bg);
                }
                .hero-split {
                    display: grid;
                    grid-template-columns: 1.2fr 0.8fr;
                    gap: var(--gap-lg);
                    align-items: center;
                    position: relative;
                    z-index: 2;
                    width: 100%;
                }
                .hero-content {
                    text-align: left;
                }
                .hero-image-wrap {
                    position: relative;
                    border-radius: 32px;
                    overflow: hidden;
                    box-shadow: 0 20px 60px rgba(0,0,0,0.3);
                    border: 1px solid rgba(255,255,255,0.08);
                    animation: fadeUp 0.8s ease both 0.2s;
                }
                .hero-img-main {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                    transition: transform 0.6s ease;
                }
                .hero-image-wrap:hover .hero-img-main {
                    transform: scale(1.03);
                }
                .hero-img-backdrop {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to top, rgba(10, 25, 47, 0.4), transparent);
                    pointer-events: none;
                }
                .eyebrow {
                    font-size: 0.8rem;
                    font-weight: 800;
                    letter-spacing: 0.25em;
                    color: var(--lime);
                    text-transform: uppercase;
                    margin-bottom: 24px;
                    display: block;
                    animation: fadeUp 0.5s ease both;
                }
                .hero-title {
                    font-size: var(--fs-h1);
                    font-weight: 900;
                    margin-bottom: 28px;
                    line-height: 1.05;
                    letter-spacing: -1px;
                    animation: fadeUp 0.5s ease both 0.1s;
                }
                .hero-title em { font-style: italic; color: var(--lime); font-weight: 900; }
                .hero-sub {
                    font-size: 1.15rem;
                    color: var(--muted);
                    max-width: 580px;
                    line-height: 1.65;
                    animation: fadeUp 0.5s ease both 0.2s;
                }

                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .faq-section {
                    padding: var(--gap-lg) var(--container-px) var(--gap-xl);
                    max-width: 1000px;
                    margin: 0 auto;
                }
                .faq-list {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }
                .faq-item {
                    background: var(--surface1);
                    border-radius: 24px;
                    border: 1px solid rgba(255,255,255,0.05);
                    overflow: hidden;
                    cursor: pointer;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .faq-item:hover {
                    border-color: rgba(100, 255, 218, 0.3);
                    background: rgba(255,255,255,0.02);
                    transform: translateY(-2px);
                }
                .faq-item.open {
                    background: rgba(255,255,255,0.03);
                    border-color: var(--lime);
                    box-shadow: 0 15px 40px rgba(0,0,0,0.15);
                }
                .faq-question {
                    padding: 28px 36px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 24px;
                }
                .faq-question h3 {
                    font-size: 1.15rem;
                    font-weight: 750;
                    margin: 0;
                    line-height: 1.4;
                    color: var(--text);
                }
                .faq-toggle {
                    color: var(--lime);
                    flex-shrink: 0;
                    transition: transform 0.3s ease;
                }
                .faq-item.open .faq-toggle {
                    transform: rotate(180deg);
                }
                .faq-answer {
                    max-height: 0;
                    overflow: hidden;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    opacity: 0;
                }
                .faq-item.open .faq-answer {
                    max-height: 300px;
                    opacity: 1;
                    padding: 0 36px 36px;
                }
                .faq-answer p {
                    margin: 0;
                    font-size: 1.05rem;
                    line-height: 1.75;
                    color: var(--muted);
                }

                .faq-contact {
                    padding: 0 var(--container-px) var(--gap-xl);
                    display: flex;
                    justify-content: center;
                }
                .contact-card {
                    background: var(--surface1);
                    padding: var(--gap-lg);
                    border-radius: 40px;
                    text-align: center;
                    max-width: 700px;
                    width: 100%;
                    border: 1px solid rgba(255,255,255,0.06);
                    box-shadow: 0 20px 50px rgba(0,0,0,0.2);
                }
                .contact-card h2 { font-size: 2.2rem; font-weight: 800; margin-bottom: 16px; }
                .contact-card p { color: var(--muted); font-size: 1.1rem; margin-bottom: 36px; }
                .contact-methods {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 32px;
                }
                .contact-link {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    font-weight: 800;
                    color: var(--lime);
                    text-decoration: none;
                    font-size: 1.05rem;
                    transition: transform 0.2s ease, opacity 0.2s ease;
                }
                .contact-link:hover { transform: translateY(-2px); opacity: 0.85; }

                @media (max-width: 1024px) {
                    .hero-split {
                        grid-template-columns: 1fr;
                        text-align: center;
                    }
                    .hero-content {
                        text-align: center;
                    }
                    .hero-sub { margin: 0 auto; }
                    .hero-image-wrap {
                        max-width: 500px;
                        margin: 0 auto;
                    }
                }
                @media (max-width: 600px) {
                    .faq-hero { padding: calc(var(--nav-h) + 40px) 4vw 40px; }
                    .faq-question { padding: 20px 24px; }
                    .faq-item.open .faq-answer { padding: 0 24px 24px; }
                    .contact-card { padding: 32px 24px; }
                }
            `}</style>
        </div>
    );
}
