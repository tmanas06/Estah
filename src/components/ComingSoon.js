export default function ComingSoon({ icon, pageName, title, subtitle, svgContent }) {
    return (
        <div className="coming-soon">
            <div className="cs-bg" dangerouslySetInnerHTML={{ __html: svgContent }} />
            <div className="cs-icon">{icon}</div>
            <p className="cs-eyebrow">{pageName}</p>
            <h2 className="cs-title">{title}</h2>
            <p className="cs-sub">{subtitle}</p>
            <div className="cs-pill">
                <span className="pulse"></span> COMING SOON
            </div>
            <div className="cs-notify">
                <input type="email" placeholder="Enter your email" aria-label="Email for notification" />
                <button type="button">Notify Me</button>
            </div>
        </div>
    );
}
