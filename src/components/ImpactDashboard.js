'use client';

import { useEffect, useState } from 'react';

const stats = [
    { label: 'Students Impacted', target: 2500, suffix: '+', icon: '🎓' },
    { label: 'Active Participants', target: 70, suffix: '+', icon: '🏃' },
    { label: 'Partner Institutions', target: 25, suffix: '', icon: '🏛️' },
    { label: 'Lives to Impact', target: 4000000, suffix: '', icon: '🌏' }
];

function CountUp({ target, duration = 2000 }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = parseInt(target);
        if (start === end) return;

        let totalMiliseconds = duration;
        const step = Math.max(1, Math.floor(end / (duration / 16)));

        let timer = setInterval(() => {
            start += step;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(start);
            }
        }, 16);

        return () => clearInterval(timer);
    }, [target, duration]);

    return <span>{count.toLocaleString()}</span>;
}

export default function ImpactDashboard() {
    return (
        <section className="impact-dashboard">
            <div className="dashboard-grid">
                {stats.map((s, i) => (
                    <div key={i} className="stat-card">
                        <div className="stat-icon">{s.icon}</div>
                        <div className="stat-val">
                            <CountUp target={s.target} />
                            {s.suffix}
                        </div>
                        <div className="stat-label">{s.label}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}
