'use client';

import React from 'react';

export const TreeLoader = ({ size = 80, className = '' }) => (
    <div className={`premium-tree-loader ${className}`}>
        <div className="loader-content">
            <svg
                width={size}
                height={size}
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="main-tree-svg"
            >
                <defs>
                    <linearGradient id="trunkGradient" x1="50" y1="90" x2="50" y2="40" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#2D5A42" />
                        <stop offset="100%" stopColor="var(--lime)" />
                    </linearGradient>
                    <radialGradient id="leafGlow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="var(--lime)" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="var(--lime)" stopOpacity="0" />
                    </radialGradient>
                </defs>

                {/* Tree Trunk */}
                <path
                    d="M50 95V45"
                    stroke="url(#trunkGradient)"
                    strokeWidth="6"
                    strokeLinecap="round"
                    className="animate-trunk"
                />

                {/* Branches */}
                <g className="branches">
                    <path d="M50 70C40 60 35 65 30 55" stroke="url(#trunkGradient)" strokeWidth="3" strokeLinecap="round" className="branch left" />
                    <path d="M50 60C60 50 65 55 70 45" stroke="url(#trunkGradient)" strokeWidth="3" strokeLinecap="round" className="branch right" />
                    <path d="M50 50C45 40 55 35 50 25" stroke="url(#trunkGradient)" strokeWidth="2" strokeLinecap="round" className="branch top" />
                </g>

                {/* Leaves - Represented as stylized circles/teardrops */}
                <g className="leaves">
                    <circle cx="30" cy="55" r="6" fill="var(--lime)" className="leaf l1" />
                    <circle cx="70" cy="45" r="6" fill="var(--lime)" className="leaf l2" />
                    <circle cx="50" cy="25" r="8" fill="var(--lime)" className="leaf l3" />
                    <circle cx="40" cy="45" r="4" fill="var(--lime)" className="leaf l4" />
                    <circle cx="60" cy="35" r="5" fill="var(--lime)" className="leaf l5" />
                </g>

                {/* Soft Glow */}
                <circle cx="50" cy="50" r="40" fill="url(#leafGlow)" className="bloom-glow" />
            </svg>

            {/* Floating Particles (replacing emojis) */}
            <div className="particles">
                {[...Array(8)].map((_, i) => (
                    <div key={i} className={`particle p${i + 1}`} />
                ))}
            </div>
        </div>

        <style jsx>{`
      .premium-tree-loader {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: ${size * 1.5}px;
        height: ${size * 1.5}px;
      }
      .loader-content {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .main-tree-svg {
        z-index: 10;
        filter: drop-shadow(0 0 15px rgba(78, 140, 111, 0.3));
      }

      /* Animations */
      .animate-trunk {
        stroke-dasharray: 60;
        stroke-dashoffset: 60;
        animation: growTrunk 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
      }

      .branch {
        opacity: 0;
        stroke-dasharray: 30;
        stroke-dashoffset: 30;
      }
      .branch.left { animation: growBranch 3s ease-out 0.5s infinite; }
      .branch.right { animation: growBranch 3s ease-out 0.8s infinite; }
      .branch.top { animation: growBranch 3s ease-out 1.1s infinite; }

      .leaf {
        opacity: 0;
        transform: scale(0);
        transform-origin: center;
      }
      .leaf.l1 { animation: bloom 3s ease-out 1s infinite; }
      .leaf.l2 { animation: bloom 3s ease-out 1.3s infinite; }
      .leaf.l3 { animation: bloom 3s ease-out 1.6s infinite; }
      .leaf.l4 { animation: bloom 3s ease-out 1.2s infinite; }
      .leaf.l5 { animation: bloom 3s ease-out 1.5s infinite; }

      .bloom-glow {
        opacity: 0;
        animation: pulseGlow 3s ease-in-out infinite;
      }

      /* Particle System */
      .particles {
        position: absolute;
        inset: 0;
        animation: rotateAll 15s linear infinite;
      }
      .particle {
        position: absolute;
        width: 6px;
        height: 6px;
        background: var(--lime);
        border-radius: 50% 0 50% 50%; /* Leaf shape */
        opacity: 0;
      }
      .p1 { top: 10%; left: 50%; animation: float 4s ease-in-out infinite; }
      .p2 { top: 50%; left: 90%; animation: float 5s ease-in-out 0.5s infinite; }
      .p3 { top: 90%; left: 50%; animation: float 4s ease-in-out 1s infinite; }
      .p4 { top: 50%; left: 10%; animation: float 4.5s ease-in-out 1.5s infinite; }
      .p5 { top: 25%; left: 25%; animation: float 6s ease-in-out 0.2s infinite; }
      .p6 { top: 25%; left: 75%; animation: float 5.5s ease-in-out 0.7s infinite; }
      .p7 { top: 75%; left: 25%; animation: float 4.8s ease-in-out 1.2s infinite; }
      .p8 { top: 75%; left: 75%; animation: float 5.2s ease-in-out 1.7s infinite; }

      @keyframes growTrunk {
        0% { stroke-dashoffset: 60; }
        30%, 70% { stroke-dashoffset: 0; }
        90%, 100% { stroke-dashoffset: 60; opacity: 0; }
      }
      @keyframes growBranch {
        0%, 20% { opacity: 0; stroke-dashoffset: 30; }
        40%, 70% { opacity: 1; stroke-dashoffset: 0; }
        90%, 100% { opacity: 0; stroke-dashoffset: 30; }
      }
      @keyframes bloom {
        0%, 40% { opacity: 0; transform: scale(0); }
        60%, 80% { opacity: 1; transform: scale(1); }
        90%, 100% { opacity: 0; transform: scale(0); }
      }
      @keyframes pulseGlow {
        0%, 50% { opacity: 0; transform: scale(0.8); }
        70% { opacity: 1; transform: scale(1.2); }
        90%, 100% { opacity: 0; transform: scale(0.8); }
      }
      @keyframes float {
        0% { transform: translateY(0) rotate(0deg); opacity: 0; }
        20% { opacity: 0.6; }
        80% { opacity: 0.6; }
        100% { transform: translateY(-40px) rotate(360deg); opacity: 0; }
      }
      @keyframes rotateAll {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
    `}</style>
    </div>
);
