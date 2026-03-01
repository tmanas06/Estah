'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useCallback } from 'react';
import { Globe } from './Icons';
import ThemeSwitcher from './ThemeSwitcher';

const navItems = [
    { name: 'Home', path: '/home-page', soon: false },
    { name: 'Events', path: '/events', soon: false },
    { name: 'Programs', path: '/programs', soon: false },
    { name: 'Impact', path: '/impact', soon: false },
    { name: 'Gallery', path: '/gallery', soon: false },
    { name: 'Contact', path: '/contact', soon: false },
];

export default function Navbar() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);

    const toggleMobile = useCallback(() => {
        setMobileOpen((prev) => {
            if (!prev) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
            return !prev;
        });
    }, []);

    const closeMobile = useCallback(() => {
        setMobileOpen(false);
        document.body.style.overflow = '';
    }, []);

    const isActive = (path) => pathname === path || (path === '/events' && pathname === '/');

    return (
        <>
            <nav className="nav" role="navigation" aria-label="Main navigation">
                <Link href="/events" className="nav-logo">
                    <Globe className="logo-icon" /> WE HEAL THE EARTH
                </Link>

                <div className="nav-links" id="navLinks">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={`nav-link${isActive(item.path) ? ' active' : ''}`}
                        >
                            {item.name}
                            {item.soon && <span className="soon-badge">SOON</span>}
                            <span className="dot"></span>
                        </Link>
                    ))}
                </div>

                <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <ThemeSwitcher />
                    <button
                        className={`hamburger${mobileOpen ? ' open' : ''}`}
                        id="hamburger"
                        onClick={toggleMobile}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </nav>

            {/* Mobile Overlay */}
            <div
                className={`mobile-overlay${mobileOpen ? ' open' : ''}`}
                onClick={closeMobile}
            ></div>

            {/* Mobile Menu */}
            <div
                className={`mobile-menu${mobileOpen ? ' open' : ''}`}
                role="navigation"
                aria-label="Mobile navigation"
            >
                {navItems.map((item) => (
                    <Link
                        key={item.path}
                        href={item.path}
                        className={`nav-link${isActive(item.path) ? ' active' : ''}`}
                        onClick={closeMobile}
                    >
                        {item.name}
                        {item.soon && <span className="soon-badge">SOON</span>}
                    </Link>
                ))}
            </div>
        </>
    );
}
