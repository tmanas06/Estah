'use client';

import React from 'react';
import { Heart, ShieldCheck, Mail, Phone, ExternalLink, Globe } from '@/components/Icons';

export default function DonatePage() {
    const RAZORPAY_URL = "https://pages.razorpay.com/pl_HkMCyxeXURf9kK/view";

    return (
        <div className="donate-container">
            <header className="donate-hero">
                <div className="hero-content">
                    <div className="org-branding">
                        <img src="/estah-logo.png" alt="Estah Society Logo" className="org-logo" />
                        <span className="org-name">ESTAH SOCIETY</span>
                    </div>
                    <h1 className="hero-title">Support the <em>Mission</em></h1>
                    <p className="hero-quote">
                        "It's not how much we give, but how much love we put into giving..."
                        <br />— Mother Teresa
                    </p>
                </div>
            </header>

            <section className="donate-main">
                <div className="donate-grid">
                    <div className="donate-info">
                        <p className="eyebrow">Direct Impact</p>
                        <h2 className="info-title">Give today, make <em>tomorrow</em> better</h2>
                        <p className="info-text">
                            Your contribution directly fuels regenerative education,
                            grassroots sustainability projects, and community empowerment
                            across India. Together, we are healing the earth.
                        </p>

                        <div className="impact-points">
                            <div className="i-point">
                                <span className="icon-wrap"><Heart size={20} /></span>
                                <div>
                                    <strong>Tax Benefits</strong>
                                    <p>All donations are eligible for tax exemption under 80G.</p>
                                </div>
                            </div>
                            <div className="i-point">
                                <span className="icon-wrap"><ShieldCheck size={20} /></span>
                                <div>
                                    <strong>Secure Payments</strong>
                                    <p>Safe and verified transactions via Razorpay.</p>
                                </div>
                            </div>
                        </div>

                        <div className="contact-details">
                            <h3>Need help with your donation?</h3>
                            <div className="c-row">
                                <Mail size={16} /> estahsociety@gmail.com
                            </div>
                            <div className="c-row">
                                <Phone size={16} /> +91 90084 99555
                            </div>
                        </div>
                    </div>

                    <div className="donate-card-wrap">
                        <div className="payment-card">
                            <div className="card-header">
                                <Globe size={24} className="globe-icon" />
                                <h3>Payment Portal</h3>
                            </div>
                            <p>You will be redirected to our secure Razorpay portal to complete your transaction.</p>

                            <div className="donation-preview">
                                <div className="p-row">
                                    <span>Organization</span>
                                    <strong>Estah Society</strong>
                                </div>
                                <div className="p-row">
                                    <span>Purpose</span>
                                    <strong>WE HEAL THE EARTH</strong>
                                </div>
                            </div>

                            <a
                                href={RAZORPAY_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="donate-primary-btn"
                            >
                                Enter Donation Amount <ExternalLink size={18} />
                            </a>

                            <div className="payment-methods">
                                <img src="https://cdn.razorpay.com/static/assets/badget_sec.png" alt="Payment Methods" className="p-badges" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .donate-container {
                    background: var(--bg);
                    color: var(--text);
                    min-height: 100vh;
                }
                .donate-hero {
                    padding: 100px 4vw 60px;
                    background: linear-gradient(to bottom, rgba(255,255,255,0.02), transparent);
                    text-align: center;
                }
                .org-branding {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 12px;
                    margin-bottom: 32px;
                }
                .org-logo {
                    width: 80px;
                    height: 80px;
                    object-fit: contain;
                    border-radius: 16px;
                    background: white;
                    padding: 5px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                }
                .org-name {
                    font-size: 1rem;
                    font-weight: 800;
                    letter-spacing: 0.1em;
                    color: var(--text);
                    opacity: 0.6;
                }
                .hero-title {
                    font-size: clamp(3rem, 7vw, 5rem);
                    font-weight: 900;
                    margin-bottom: 24px;
                    letter-spacing: -0.02em;
                }
                .hero-title em { font-style: italic; color: var(--lime); font-weight: 500; }
                .hero-quote {
                    font-size: 1.1rem;
                    font-style: italic;
                    opacity: 0.6;
                    max-width: 600px;
                    margin: 0 auto;
                    line-height: 1.6;
                }

                .donate-main {
                    padding: 60px 4vw 140px;
                    max-width: 1200px;
                    margin: 0 auto;
                }
                .donate-grid {
                    display: grid;
                    grid-template-columns: 1.2fr 1fr;
                    gap: 100px;
                    align-items: flex-start;
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
                .info-title {
                    font-size: 2.8rem;
                    line-height: 1.1;
                    margin-bottom: 24px;
                }
                .info-title em { font-style: italic; color: var(--lime); font-weight: 500; }
                .info-text {
                    font-size: 1.15rem;
                    opacity: 0.7;
                    line-height: 1.7;
                    margin-bottom: 48px;
                }

                .impact-points {
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                    margin-bottom: 60px;
                }
                .i-point {
                    display: flex;
                    gap: 20px;
                    align-items: flex-start;
                }
                .icon-wrap {
                    width: 44px;
                    height: 44px;
                    border-radius: 12px;
                    background: rgba(var(--lime-rgb), 0.1);
                    color: var(--lime);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 1px solid var(--lime);
                }
                .i-point strong { color: var(--text); font-size: 1.1rem; display: block; margin-bottom: 4px; }
                .i-point p { font-size: 0.95rem; opacity: 0.6; margin: 0; }

                .contact-details h3 { font-size: 1rem; margin-bottom: 20px; opacity: 0.5; text-transform: uppercase; letter-spacing: 0.1em; }
                .c-row { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; font-weight: 700; color: var(--lime); }

                /* PAYMENT CARD */
                .donate-card-wrap {
                    position: sticky;
                    top: 100px;
                }
                .payment-card {
                    background: var(--surface1);
                    padding: 40px;
                    border-radius: 32px;
                    border: 1px solid rgba(255,255,255,0.05);
                    box-shadow: 0 30px 60px rgba(0,0,0,0.3);
                }
                .card-header {
                    display: flex;
                    align-items: center;
                    gap: 14px;
                    margin-bottom: 20px;
                    color: var(--lime);
                }
                .card-header h3 { font-size: 1.5rem; color: var(--text); margin: 0; }
                .payment-card p { opacity: 0.6; line-height: 1.6; margin-bottom: 32px; }

                .donation-preview {
                    background: rgba(0,0,0,0.2);
                    padding: 24px;
                    border-radius: 20px;
                    margin-bottom: 32px;
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }
                .p-row { display: flex; justify-content: space-between; align-items: center; font-size: 0.9rem; }
                .p-row span { opacity: 0.5; }
                .p-row strong { color: var(--lime); }

                .donate-primary-btn {
                    width: 100%;
                    padding: 20px;
                    border-radius: 16px;
                    background: var(--lime);
                    color: var(--text-dark);
                    font-weight: 900;
                    font-size: 1.1rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 12px;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    margin-bottom: 24px;
                }
                .donate-primary-btn:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
                }

                .payment-methods {
                    text-align: center;
                    opacity: 0.5;
                    filter: grayscale(1);
                }
                .p-badges { max-width: 200px; }

                @media (max-width: 1024px) {
                    .donate-grid { grid-template-columns: 1fr; gap: 60px; }
                    .donate-card-wrap { position: static; }
                }
            `}</style>
        </div>
    );
}
