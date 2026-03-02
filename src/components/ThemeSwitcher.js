'use client';

import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Leaf, Droplets } from './Icons';

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="theme-switcher">
      <button
        className="theme-toggle-btn"
        onClick={toggleTheme}
        aria-label="Toggle Theme"
        title={`Switch to ${theme === 'green' ? 'Blue' : 'Green'} Theme`}
      >
        <div className={`toggle-track ${theme}`}>
          <div className="toggle-thumb">
            {theme === 'green' ? <Leaf size={14} /> : <Droplets size={14} />}
          </div>
          <span className="toggle-label">{theme === 'green' ? 'GREEN' : 'BLUE'}</span>
        </div>
      </button>

      <style jsx>{`
        .theme-switcher {
          display: flex;
          align-items: center;
        }
        .theme-toggle-btn {
          background: transparent;
          border: none;
          padding: 0;
          cursor: pointer;
          transition: transform 0.2s ease;
        }
        .theme-toggle-btn:hover {
          transform: scale(1.05);
        }
        .toggle-track {
          position: relative;
          width: 100px;
          height: 36px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--lime);
          display: flex;
          align-items: center;
          padding: 3px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .toggle-track.blue {
          border-color: #64FFDA;
          background: rgba(100, 255, 218, 0.05);
        }
        .toggle-thumb {
          position: absolute;
          left: 3px;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: var(--lime);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 0 15px rgba(78, 140, 111, 0.4);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 2;
        }
        .blue .toggle-thumb {
          left: 67px;
          background: #64FFDA;
          box-shadow: 0 0 15px rgba(100, 255, 218, 0.4);
          color: #0A192F;
        }
        .toggle-label {
          width: 100%;
          text-align: center;
          font-size: 0.65rem;
          font-weight: 900;
          letter-spacing: 0.15em;
          color: var(--lime);
          padding-left: 28px;
          transition: all 0.3s ease;
        }
        .blue .toggle-label {
          padding-left: 0;
          padding-right: 28px;
          color: #64FFDA;
        }
      `}</style>
    </div>
  );
}
