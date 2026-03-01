'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

// Floating particles + glowing orbs + earth image layered background
export default function HeroBackground({ variant = 'default' }) {
    const canvasRef = useRef(null);
    const { theme } = useTheme();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        let animationId;
        let particles = [];
        let fireflies = [];

        function resize() {
            const parent = canvas.parentElement;
            canvas.width = parent.offsetWidth;
            canvas.height = parent.offsetHeight;
        }

        function createParticles() {
            particles = [];
            fireflies = [];
            const w = canvas.width;
            const h = canvas.height;

            // Define colors based on theme
            let baseHue = 100; // Default green
            if (theme === 'blue') baseHue = 200;
            if (theme === 'light') baseHue = 110;

            // Floating leaf-like particles
            for (let i = 0; i < 18; i++) {
                particles.push({
                    x: Math.random() * w,
                    y: Math.random() * h,
                    size: 2 + Math.random() * 4,
                    speedX: (Math.random() - 0.5) * 0.3,
                    speedY: -0.15 - Math.random() * 0.35,
                    opacity: theme === 'light' ? 0.3 : 0.15 + Math.random() * 0.25,
                    hue: baseHue + (Math.random() * 40 - 20),
                    wobble: Math.random() * Math.PI * 2,
                    wobbleSpeed: 0.01 + Math.random() * 0.02,
                });
            }

            // Firefly / sparkle particles
            for (let i = 0; i < 12; i++) {
                fireflies.push({
                    x: Math.random() * w,
                    y: Math.random() * h,
                    size: 1.5 + Math.random() * 2.5,
                    speedX: (Math.random() - 0.5) * 0.2,
                    speedY: (Math.random() - 0.5) * 0.2,
                    opacity: 0,
                    maxOpacity: theme === 'light' ? 0.5 : 0.3 + Math.random() * 0.4,
                    phase: Math.random() * Math.PI * 2,
                    phaseSpeed: 0.015 + Math.random() * 0.02,
                    glowSize: 8 + Math.random() * 16,
                    isGold: Math.random() > 0.6,
                });
            }
        }

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const w = canvas.width;
            const h = canvas.height;

            // Draw floating particles
            particles.forEach((p) => {
                p.wobble += p.wobbleSpeed;
                p.x += p.speedX + Math.sin(p.wobble) * 0.3;
                p.y += p.speedY;

                // Wrap around
                if (p.y < -10) { p.y = h + 10; p.x = Math.random() * w; }
                if (p.x < -10) p.x = w + 10;
                if (p.x > w + 10) p.x = -10;

                ctx.save();
                ctx.globalAlpha = p.opacity;
                ctx.fillStyle = `hsla(${p.hue}, 50%, 55%, 1)`;
                ctx.beginPath();

                // Draw leaf-like shapes
                ctx.ellipse(p.x, p.y, p.size, p.size * 0.6, p.wobble, 0, Math.PI * 2);
                ctx.fill();

                // Soft glow around particle
                const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3);
                gradient.addColorStop(0, `hsla(${p.hue}, 50%, 55%, 0.15)`);
                gradient.addColorStop(1, 'transparent');
                ctx.fillStyle = gradient;
                ctx.fillRect(p.x - p.size * 3, p.y - p.size * 3, p.size * 6, p.size * 6);

                ctx.restore();
            });

            // Draw fireflies
            fireflies.forEach((f) => {
                f.phase += f.phaseSpeed;
                f.opacity = f.maxOpacity * (0.5 + 0.5 * Math.sin(f.phase));
                f.x += f.speedX;
                f.y += f.speedY;

                // Gentle drift changes
                if (Math.random() < 0.005) {
                    f.speedX = (Math.random() - 0.5) * 0.2;
                    f.speedY = (Math.random() - 0.5) * 0.2;
                }

                // Wrap
                if (f.x < -20) f.x = w + 20;
                if (f.x > w + 20) f.x = -20;
                if (f.y < -20) f.y = h + 20;
                if (f.y > h + 20) f.y = -20;

                ctx.save();
                ctx.globalAlpha = f.opacity;

                // Outer glow
                let glowHue = f.isGold ? 42 : 140;
                if (theme === 'blue') glowHue = f.isGold ? 42 : 200;

                const glowColor = `${glowHue}, 38%, 54%`;
                const glow = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, f.glowSize);
                glow.addColorStop(0, `hsla(${glowColor}, 0.6)`);
                glow.addColorStop(0.4, `hsla(${glowColor}, 0.15)`);
                glow.addColorStop(1, 'transparent');
                ctx.fillStyle = glow;
                ctx.fillRect(f.x - f.glowSize, f.y - f.glowSize, f.glowSize * 2, f.glowSize * 2);

                // Core dot
                ctx.fillStyle = f.isGold ? '#D4A843' : (theme === 'blue' ? '#00B4D8' : '#7CB5A0');
                ctx.beginPath();
                ctx.arc(f.x, f.y, f.size, 0, Math.PI * 2);
                ctx.fill();

                ctx.restore();
            });

            animationId = requestAnimationFrame(draw);
        }

        resize();
        createParticles();
        draw();

        const handleResize = () => { resize(); createParticles(); };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationId);
        };
    }, [theme]);

    return (
        <div className="hero-bg-layers" aria-hidden="true">
            {/* Canvas particle layer */}
            <canvas ref={canvasRef} className="hero-particles-canvas" />

            {/* Animated gradient mesh */}
            <div className="hero-gradient-mesh" />

            {/* Earth image with glow */}
            <div className="hero-earth-image" />

            {/* Secondary soft orb */}
            <div className="hero-glow-orb hero-glow-orb-1" />
            <div className="hero-glow-orb hero-glow-orb-2" />

            {/* Vignette overlay */}
            <div className="hero-vignette" />
        </div>
    );
}
