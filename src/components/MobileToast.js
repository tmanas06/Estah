'use client';

import { useState, useCallback, useEffect, createContext, useContext } from 'react';

const ToastContext = createContext(null);

export function useToast() {
    const ctx = useContext(ToastContext);
    if (!ctx) throw new Error('useToast must be used within ToastProvider');
    return ctx;
}

let toastId = 0;

export function ToastProvider({ children }) {
    const [toasts, setToasts] = useState([]);

    const addToast = useCallback(({ icon = '🎉', title, message, type = 'success', duration = 4000 }) => {
        const id = ++toastId;
        setToasts((prev) => [...prev, { id, icon, title, message, type, duration, exiting: false }]);

        // Auto-dismiss
        setTimeout(() => {
            setToasts((prev) => prev.map((t) => (t.id === id ? { ...t, exiting: true } : t)));
            setTimeout(() => {
                setToasts((prev) => prev.filter((t) => t.id !== id));
            }, 300);
        }, duration);

        return id;
    }, []);

    const removeToast = useCallback((id) => {
        setToasts((prev) => prev.map((t) => (t.id === id ? { ...t, exiting: true } : t)));
        setTimeout(() => {
            setToasts((prev) => prev.filter((t) => t.id !== id));
        }, 300);
    }, []);

    return (
        <ToastContext.Provider value={{ addToast, removeToast }}>
            {children}
            <div className="toast-container" role="region" aria-label="Notifications" aria-live="polite">
                {toasts.map((toast) => (
                    <div
                        key={toast.id}
                        className={`toast toast-${toast.type}${toast.exiting ? ' toast-exit' : ''}`}
                        style={{ '--toast-dur': `${toast.duration}ms` }}
                        role="alert"
                    >
                        <span className="toast-icon">{toast.icon}</span>
                        <div className="toast-content">
                            {toast.title && <div className="toast-title">{toast.title}</div>}
                            {toast.message && <div className="toast-message">{toast.message}</div>}
                        </div>
                        <button
                            className="toast-close"
                            onClick={() => removeToast(toast.id)}
                            aria-label="Dismiss notification"
                        >
                            ✕
                        </button>
                        <div className="toast-progress" />
                    </div>
                ))}
            </div>
        </ToastContext.Provider>
    );
}
