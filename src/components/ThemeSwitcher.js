'use client';

import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Leaf, Droplets } from './Icons';

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="theme-switcher">
      <button
        className={`theme-toggle-btn ${theme}`}
        onClick={toggleTheme}
        aria-label="Toggle Theme"
        title={`Switch to ${theme === 'forest' ? 'Sunset' : 'Forest'} Theme`}
      >
        {theme === 'forest' ? <Leaf size={16} /> : <Leaf size={16} style={{ transform: 'rotate(180deg)' }} />}
        <span className="toggle-label">{theme === 'forest' ? 'FOREST' : 'SUNSET'}</span>
      </button>

      <style jsx>{`
        .theme-switcher {
          display: flex;
          align-items: center;
        }
        @media (max-width: 1024px) {
          .theme-switcher {
            display: none;
          }
        }
        .theme-toggle-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #7ED957;
          color: #FFFFFF;
          padding: 10px 18px;
          border-radius: 8px;
          border: none;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 4px 12px rgba(126, 217, 87, 0.3);
        }
        .theme-toggle-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(126, 217, 87, 0.4);
        }
        .theme-toggle-btn.ocean {
          background: #f8a533;
          box-shadow: 0 4px 12px rgba(248, 165, 51, 0.3);
        }
        .theme-toggle-btn.ocean:hover {
          box-shadow: 0 6px 16px rgba(248, 165, 51, 0.4);
        }
        .toggle-label {
          letter-spacing: 0.05em;
        }
      `}</style>
    </div>
  );
}
