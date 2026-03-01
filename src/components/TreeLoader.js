'use client';

import React from 'react';

export const TreeLoader = ({ size = 60, className = '' }) => (
    <div className={`tree-loader-container ${className}`}>
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="tree-svg">
            <path d="M12 19V10" stroke="var(--lime)" strokeWidth="2" strokeLinecap="round" className="trunk" />
            <path d="M12 10C12 10 9 9 9 6C9 3 12 2 12 2C12 2 15 3 15 6C15 9 12 10 12 10Z" fill="var(--lime)" className="leaf leaf-1" />
            <path d="M12 12C12 12 7 11.5 7 8C7 4.5 12 3.5 12 3.5" stroke="var(--lime)" strokeWidth="1.5" strokeLinecap="round" className="branch-1" />
            <path d="M12 12C12 12 17 11.5 17 8C17 4.5 12 3.5 12 3.5" stroke="var(--lime)" strokeWidth="1.5" strokeLinecap="round" className="branch-2" />
            <circle cx="12" cy="19" r="1.5" fill="var(--lime)" className="base" />
        </svg>
        <div className="leaves-surround">
            <div className="tiny-leaf leaf-pos-1">🍃</div>
            <div className="tiny-leaf leaf-pos-2">🌱</div>
            <div className="tiny-leaf leaf-pos-3">🍃</div>
            <div className="tiny-leaf leaf-pos-4">🌿</div>
        </div>
        <style jsx>{`
            .tree-loader-container {
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                width: ${size * 1.5}px;
                height: ${size * 1.5}px;
            }
            .tree-svg {
                z-index: 2;
                filter: drop-shadow(0 0 8px rgba(78, 140, 111, 0.4));
            }
            .trunk {
                stroke-dasharray: 20;
                stroke-dashoffset: 20;
                animation: growTrunk 2s ease-out forwards infinite;
            }
            .leaf {
                opacity: 0;
                transform-origin: bottom center;
                animation: bloomLeaf 2s ease-out 1s forwards infinite;
            }
            .leaves-surround {
                position: absolute;
                width: 100%;
                height: 100%;
                animation: rotateLeaves 10s linear infinite;
            }
            .tiny-leaf {
                position: absolute;
                font-size: 14px;
                opacity: 0.6;
            }
            .leaf-pos-1 { top: 0; left: 50%; transform: translateX(-50%); }
            .leaf-pos-2 { bottom: 0; left: 50%; transform: translateX(-50%); }
            .leaf-pos-3 { left: 0; top: 50%; transform: translateY(-50%); }
            .leaf-pos-4 { right: 0; top: 50%; transform: translateY(-50%); }
            
            @keyframes growTrunk {
                0% { stroke-dashoffset: 20; }
                50% { stroke-dashoffset: 0; }
                100% { stroke-dashoffset: 0; }
            }
            @keyframes bloomLeaf {
                0% { opacity: 0; transform: scale(0); }
                30% { opacity: 1; transform: scale(1.1); }
                60% { opacity: 1; transform: scale(1); }
                100% { opacity: 0; transform: scale(0.8); }
            }
            @keyframes rotateLeaves {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }
        `}</style>
    </div>
);
