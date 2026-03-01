'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const themes = [
    { id: 'light', name: 'Light', color: '#F5F0E8', icon: '☀️' },
    { id: 'dark', name: 'Dark', color: '#0C1A0F', icon: '🌙' },
    { id: 'green', name: 'Green', color: '#1B3C22', icon: '🌳' },
    { id: 'blue', name: 'Blue', color: '#0A192F', icon: '🌊' },
];

export default function ThemeSwitcher() {
    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="theme-switcher" ref={dropdownRef}>
            <button
                className="theme-toggle-btn"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Select Theme"
                title="Change Theme"
            >
                <span className="current-theme-icon">
                    {themes.find(t => t.id === theme)?.icon || '🎨'}
                </span>
            </button>

            {isOpen && (
                <div className="theme-dropdown">
                    <p className="dropdown-title">Choose Theme</p>
                    <div className="theme-options">
                        {themes.map((t) => (
                            <button
                                key={t.id}
                                className={`theme-option ${theme === t.id ? 'active' : ''}`}
                                onClick={() => {
                                    toggleTheme(t.id);
                                    setIsOpen(false);
                                }}
                            >
                                <span className="option-color" style={{ backgroundColor: t.color }}></span>
                                <span className="option-name">{t.name}</span>
                                {theme === t.id && <span className="active-check">✓</span>}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            <style jsx>{`
        .theme-switcher {
          position: relative;
          z-index: 1002;
        }
        .theme-toggle-btn {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.05);
          border: 1.5px solid var(--lime);
          cursor: pointer;
          transition: all 0.2s;
          font-size: 1.2rem;
        }
        .theme-toggle-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: scale(1.05);
        }
        .theme-dropdown {
          position: absolute;
          top: calc(100% + 12px);
          right: 0;
          width: 180px;
          background: var(--surface1);
          border: 1.5px solid var(--lime);
          border-radius: 12px;
          padding: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          animation: slideIn 0.2s ease;
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .dropdown-title {
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--muted);
          margin-bottom: 12px;
          padding-left: 4px;
        }
        .theme-options {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .theme-option {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 10px;
          border-radius: 8px;
          background: transparent;
          border: 1.5px solid transparent;
          cursor: pointer;
          transition: all 0.2s;
          text-align: left;
          width: 100%;
        }
        .theme-option:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.1);
        }
        .theme-option.active {
          background: rgba(78, 140, 111, 0.1);
          border-color: var(--lime);
        }
        .option-color {
          width: 16px;
          height: 16px;
          border-radius: 4px;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .option-name {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text);
          flex: 1;
        }
        .active-check {
          color: var(--lime);
          font-weight: 800;
          font-size: 0.8rem;
        }
      `}</style>
        </div>
    );
}
